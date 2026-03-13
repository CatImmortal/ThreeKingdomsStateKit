import { recompute全局 } from './recompute';
import { create初始状态, type 状态总表 } from './state';
import { stripStatusBar } from './status-panel';
import { debugError, debugLog, summarizeState, summarizeValue } from './debug';

export const STATE_ROOT_KEY = 'sgbz_state';
export const CONTEXT_MACRO_KEY = 'sgbz_context';
export const MAX_SAVED_STATE_MESSAGES = 10;

type 聊天消息 = {
  message_id: number;
  role?: 'system' | 'assistant' | 'user';
  message?: string;
  data?: Record<string, any>;
  extra?: Record<string, any>;
};

type 消息接口 = {
  getChatMessages: (range: string | number, option?: { include_swipes?: false }) => 聊天消息[];
  setChatMessages: (
    chatMessages: Array<{ message_id: number } & Partial<聊天消息>>,
    option?: { refresh?: 'none' | 'affected' | 'all' },
  ) => Promise<void>;
};

type RuntimeApi = {
  getChatMessages?: 消息接口['getChatMessages'];
  setChatMessages?: 消息接口['setChatMessages'];
  TavernHelper?: Partial<消息接口>;
};

function 获取消息接口(): 消息接口 {
  const globalApi = globalThis as typeof globalThis & RuntimeApi;
  const windowApi = typeof window !== 'undefined' ? (window as typeof window & RuntimeApi) : undefined;
  const getChatMessages = globalApi.getChatMessages ?? windowApi?.getChatMessages ?? globalApi.TavernHelper?.getChatMessages ?? windowApi?.TavernHelper?.getChatMessages;
  const setChatMessages = globalApi.setChatMessages ?? windowApi?.setChatMessages ?? globalApi.TavernHelper?.setChatMessages ?? windowApi?.TavernHelper?.setChatMessages;
  debugLog('storage', '检查聊天消息接口', {
    hasGetChatMessages: typeof getChatMessages === 'function',
    hasSetChatMessages: typeof setChatMessages === 'function',
  });
  if (!getChatMessages || !setChatMessages) {
    const error = new Error('未找到 getChatMessages / setChatMessages，无法读写楼层状态');
    debugError('storage', '获取聊天消息接口失败', error);
    throw error;
  }
  return { getChatMessages, setChatMessages };
}

export function 读取消息(messageId: number): 聊天消息 | null {
  const messages = 获取消息接口().getChatMessages(messageId, { include_swipes: false }) ?? [];
  const message = Array.isArray(messages) ? messages[0] ?? null : null;
  debugLog('storage', '读取单条消息完成', {
    messageId,
    summary: summarizeValue(message),
  });
  return message;
}

export function 读取所有消息(截止消息ID?: number): 聊天消息[] {
  if (typeof 截止消息ID === 'number' && 截止消息ID < 0) {
    debugLog('storage', '读取消息列表完成', {
      range: 'empty',
      count: 0,
    });
    return [];
  }
  const range = typeof 截止消息ID === 'number' ? `0-${截止消息ID}` : '0-{{lastMessageId}}';
  const messages = 获取消息接口().getChatMessages(range, { include_swipes: false }) ?? [];
  debugLog('storage', '读取消息列表完成', {
    range,
    count: messages.length,
  });
  return messages;
}

export function 读取原始状态(messageId?: number): Partial<状态总表> | undefined {
  const messages = 读取所有消息(messageId);
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const raw = _.get(messages[index], ['data', STATE_ROOT_KEY]) as Partial<状态总表> | undefined;
    if (!raw) continue;
    debugLog('storage', '读取原始状态快照', {
      sourceMessageId: messages[index].message_id,
      summary: summarizeValue(raw),
    });
    return raw;
  }
  debugLog('storage', '未找到状态快照', { upToMessageId: messageId ?? null });
  return undefined;
}

export function 读取上下文宏(rootKey = CONTEXT_MACRO_KEY): string {
  debugLog('storage', '楼层级方案下不再持久化上下文宏', { rootKey });
  return '';
}

export function 加载状态(截止消息ID?: number): 状态总表 {
  const raw = 读取原始状态(截止消息ID);
  const state = recompute全局(create初始状态(raw));
  debugLog('storage', '加载状态完成', {
    upToMessageId: 截止消息ID ?? null,
    raw: summarizeValue(raw),
    state: summarizeState(state),
  });
  return state;
}

async function 清理过期状态快照(): Promise<void> {
  const messages = 读取所有消息();
  const snapshots = messages.filter(message => _.has(message.data, STATE_ROOT_KEY));
  if (snapshots.length <= MAX_SAVED_STATE_MESSAGES) {
    debugLog('storage', '无需清理过期状态快照', {
      snapshots: snapshots.length,
      limit: MAX_SAVED_STATE_MESSAGES,
    });
    return;
  }
  const expired = snapshots.slice(0, snapshots.length - MAX_SAVED_STATE_MESSAGES);
  const patches = expired.map(message => {
    const nextData = { ...(message.data || {}) };
    delete nextData[STATE_ROOT_KEY];
    return {
      message_id: message.message_id,
      data: nextData,
    };
  });
  debugLog('storage', '准备清理过期状态快照', {
    keep: MAX_SAVED_STATE_MESSAGES,
    removeCount: patches.length,
    removedMessageIds: patches.map(item => item.message_id),
  });
  await 获取消息接口().setChatMessages(patches, { refresh: 'none' });
  debugLog('storage', '过期状态快照清理完成', {
    removedMessageIds: patches.map(item => item.message_id),
  });
}

async function 清理旧状态栏(当前消息ID: number): Promise<void> {
  const messages = 读取所有消息();
  const patches = messages
    .filter(message => message.role === 'assistant' && message.message_id !== 当前消息ID)
    .map(message => {
      const cleaned = stripStatusBar(String(message.message || ''));
      if (cleaned === String(message.message || '').trim()) {
        return null;
      }
      return {
        message_id: message.message_id,
        message: cleaned,
      };
    })
    .filter((item): item is { message_id: number; message: string } => Boolean(item));
  if (patches.length === 0) {
    debugLog('storage', '无需清理旧状态栏', { currentMessageId: 当前消息ID });
    return;
  }
  debugLog('storage', '准备清理旧状态栏', {
    currentMessageId: 当前消息ID,
    removeFromMessageIds: patches.map(item => item.message_id),
  });
  await 获取消息接口().setChatMessages(patches, { refresh: 'none' });
  debugLog('storage', '旧状态栏清理完成', {
    currentMessageId: 当前消息ID,
    cleanedMessageIds: patches.map(item => item.message_id),
  });
}

export async function 更新消息正文(messageId: number, message: string): Promise<void> {
  const currentMessage = 读取消息(messageId);
  if (!currentMessage) {
    throw new Error(`未找到要更新正文的消息: ${messageId}`);
  }
  debugLog('storage', '准备写入楼层正文', {
    messageId,
    before: summarizeValue(currentMessage.message),
    after: summarizeValue(message),
  });
  await 清理旧状态栏(messageId);
  await 获取消息接口().setChatMessages([{ message_id: messageId, message }], { refresh: 'affected' });
  debugLog('storage', '楼层正文写入完成', { messageId });
}

export async function 保存状态(state: 状态总表, messageId: number): Promise<状态总表> {
  const next = recompute全局(create初始状态(state));
  const currentMessage = 读取消息(messageId);
  if (!currentMessage) {
    throw new Error(`未找到要写入状态的消息: ${messageId}`);
  }
  const nextData = {
    ...(currentMessage.data || {}),
    [STATE_ROOT_KEY]: next,
  };
  debugLog('storage', '准备写入楼层状态', {
    messageId,
    before: summarizeValue(currentMessage.data?.[STATE_ROOT_KEY]),
    next: summarizeState(next),
  });
  try {
    await 获取消息接口().setChatMessages([{ message_id: messageId, data: nextData }], { refresh: 'none' });
    debugLog('storage', '楼层状态写入完成', {
      messageId,
      after: summarizeValue(nextData[STATE_ROOT_KEY]),
    });
    await 清理过期状态快照();
  } catch (error) {
    debugError('storage', '楼层状态写入失败', error);
    throw error;
  }
  return next;
}

export function 保存上下文宏(content: string, rootKey = CONTEXT_MACRO_KEY): string {
  debugLog('storage', '楼层级方案下跳过上下文宏持久化', {
    rootKey,
    summary: summarizeValue(content),
  });
  return String(content || '');
}

export async function 初始化状态(seed: Partial<状态总表> = {}, messageId: number): Promise<状态总表> {
  return 保存状态(create初始状态(seed), messageId);
}

export async function 更新状态(updater: (state: 状态总表) => 状态总表, messageId: number): Promise<状态总表> {
  const current = 加载状态(messageId - 1);
  return 保存状态(updater(current), messageId);
}
