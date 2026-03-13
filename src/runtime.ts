import { handleAssistantReply, type 处理回复选项 } from './bridge';
import { debugError, debugLog, summarizeValue } from './debug';

export type 自动接线选项 = 处理回复选项;

type EventBinding = {
  removeListener?: () => void;
  off?: () => void;
  unsubscribe?: () => void;
  unregister?: () => void;
};

type ChatMessageLike = {
  message_id?: number;
  role?: 'system' | 'assistant' | 'user';
  message?: string;
};

type RuntimeApi = {
  eventOn?: (eventName: string, listener: (...args: any[]) => void) => EventBinding | void;
  eventRemoveListener?: (eventName: string, listener: (...args: any[]) => void) => void;
  tavern_events?: {
    GENERATION_ENDED?: string;
  };
  getChatMessages?: (range: string | number, option?: { include_swipes?: false }) => ChatMessageLike[];
  TavernHelper?: {
    getChatMessages?: (range: string | number, option?: { include_swipes?: false }) => ChatMessageLike[];
  };
};

let 已注册回复钩子: { eventName: string; listener: (...args: any[]) => void; binding?: EventBinding } | null = null;
let 最近处理记录: { messageId: number | null; message: string } = { messageId: null, message: '' };

function 获取运行时接口(): RuntimeApi {
  return globalThis as typeof globalThis & RuntimeApi;
}

function 获取最新助手消息(): ChatMessageLike | null {
  const runtime = 获取运行时接口();
  const getChatMessages = runtime.getChatMessages ?? runtime.TavernHelper?.getChatMessages;
  if (typeof getChatMessages !== 'function') {
    debugLog('runtime', '未找到 getChatMessages，无法读取最新消息');
    return null;
  }
  const messages = getChatMessages(-1, { include_swipes: false }) ?? [];
  const message = Array.isArray(messages) ? messages[0] ?? null : null;
  debugLog('runtime', '读取最新消息完成', summarizeValue(message));
  return message;
}

function 是否重复消息(message: ChatMessageLike): boolean {
  const messageId = typeof message.message_id === 'number' ? message.message_id : null;
  const text = String(message.message || '');
  return 最近处理记录.messageId === messageId && 最近处理记录.message === text;
}

function 记录最近消息(message: ChatMessageLike): void {
  最近处理记录 = {
    messageId: typeof message.message_id === 'number' ? message.message_id : null,
    message: String(message.message || ''),
  };
}

export function teardownAssistantReplyHook(): void {
  if (!已注册回复钩子) {
    return;
  }
  const runtime = 获取运行时接口();
  const { eventName, listener, binding } = 已注册回复钩子;
  binding?.removeListener?.();
  binding?.off?.();
  binding?.unsubscribe?.();
  binding?.unregister?.();
  runtime.eventRemoveListener?.(eventName, listener);
  已注册回复钩子 = null;
  debugLog('runtime', '已卸载 AI 回复完成钩子', { eventName });
}

export function setupAssistantReplyHook(options: 自动接线选项 = {}): boolean {
  teardownAssistantReplyHook();
  const runtime = 获取运行时接口();
  const eventName = runtime.tavern_events?.GENERATION_ENDED;
  if (!eventName || typeof runtime.eventOn !== 'function') {
    debugLog('runtime', '未找到 tavern_events.GENERATION_ENDED 或 eventOn，无法自动接入', {
      hasEventOn: typeof runtime.eventOn === 'function',
      eventName,
    });
    return false;
  }

  const listener = (...args: any[]) => {
    debugLog('runtime', '收到 GENERATION_ENDED 事件', {
      eventName,
      args: summarizeValue(args),
    });
    try {
      const message = 获取最新助手消息();
      if (!message) {
        debugLog('runtime', '未读取到最新消息，跳过处理');
        return;
      }
      if (message.role !== 'assistant') {
        debugLog('runtime', '最新消息不是 assistant，跳过处理', {
          role: message.role ?? null,
          messageId: message.message_id ?? null,
        });
        return;
      }
      if (是否重复消息(message)) {
        debugLog('runtime', '检测到重复 assistant 消息，跳过处理', {
          messageId: message.message_id ?? null,
        });
        return;
      }
      const result = handleAssistantReply(String(message.message || ''), {
        ...options,
        refreshMacroOnNoCommands: false,
      });
      记录最近消息(message);
      debugLog('runtime', 'assistant 消息自动处理完成', {
        messageId: message.message_id ?? null,
        applied: result.applied.length,
        hasCommandsText: Boolean(result.commandsText),
      });
    } catch (error) {
      debugError('runtime', 'assistant 消息自动处理失败', error);
    }
  };

  const binding = runtime.eventOn(eventName, listener) as EventBinding | void;
  已注册回复钩子 = { eventName, listener, binding: binding ?? undefined };
  debugLog('runtime', '已注册 AI 回复完成钩子', { eventName });
  return true;
}
