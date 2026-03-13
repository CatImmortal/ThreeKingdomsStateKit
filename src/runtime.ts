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
  getButtonEvent?: (buttonName: string) => string;
  tavern_events?: {
    MESSAGE_RECEIVED?: string;
  };
  getChatMessages?: (range: string | number, option?: { include_swipes?: false }) => ChatMessageLike[];
  TavernHelper?: {
    getChatMessages?: (range: string | number, option?: { include_swipes?: false }) => ChatMessageLike[];
  };
};

let 已注册回复钩子: { eventName: string; listener: (...args: any[]) => void; binding?: EventBinding } | null = null;
let 已注册按钮钩子: { eventName: string; listener: (...args: any[]) => void; binding?: EventBinding } | null = null;
let 最近处理记录: { messageId: number | null; message: string } = { messageId: null, message: '' };

function 获取运行时接口(): RuntimeApi {
  const globalApi = globalThis as typeof globalThis & RuntimeApi;
  const windowApi = typeof window !== 'undefined' ? (window as typeof window & RuntimeApi) : undefined;
  return {
    eventOn: globalApi.eventOn ?? windowApi?.eventOn,
    eventRemoveListener: globalApi.eventRemoveListener ?? windowApi?.eventRemoveListener,
    getButtonEvent: globalApi.getButtonEvent ?? windowApi?.getButtonEvent,
    tavern_events: globalApi.tavern_events ?? windowApi?.tavern_events,
    getChatMessages: globalApi.getChatMessages ?? windowApi?.getChatMessages,
    TavernHelper: globalApi.TavernHelper ?? windowApi?.TavernHelper,
  };
}

function 获取消息读取函数() {
  const runtime = 获取运行时接口();
  return runtime.getChatMessages ?? runtime.TavernHelper?.getChatMessages;
}

function 读取消息(messageId: number): ChatMessageLike | null {
  const getChatMessages = 获取消息读取函数();
  if (typeof getChatMessages !== 'function') {
    debugLog('runtime', '未找到 getChatMessages，无法读取指定消息', { messageId });
    return null;
  }
  const messages = getChatMessages(messageId, { include_swipes: false }) ?? [];
  const message = Array.isArray(messages) ? messages[0] ?? null : null;
  debugLog('runtime', '读取指定消息完成', {
    messageId,
    message: summarizeValue(message),
  });
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

export function teardownDebugParseButtonHook(): void {
  if (!已注册按钮钩子) {
    return;
  }
  const runtime = 获取运行时接口();
  const { eventName, listener, binding } = 已注册按钮钩子;
  binding?.removeListener?.();
  binding?.off?.();
  binding?.unsubscribe?.();
  binding?.unregister?.();
  runtime.eventRemoveListener?.(eventName, listener);
  已注册按钮钩子 = null;
  debugLog('runtime', '已卸载解析命令按钮钩子', { eventName });
}

export function setupDebugParseButtonHook(buttonName = '解析命令', options: 自动接线选项 = {}): boolean {
  teardownDebugParseButtonHook();
  const runtime = 获取运行时接口();
  const eventName = runtime.getButtonEvent?.(buttonName);
  if (!eventName || typeof runtime.eventOn !== 'function') {
    debugLog('runtime', '未找到按钮事件或 eventOn，无法注册解析命令按钮', {
      buttonName,
      hasEventOn: typeof runtime.eventOn === 'function',
      eventName,
    });
    return false;
  }

  const listener = () => {
    debugLog('runtime', '收到解析命令按钮点击事件', { buttonName, eventName });
    try {
      const message = 读取消息(-1);
      if (!message) {
        debugLog('runtime', '按钮调试未读取到最新消息，跳过处理');
        return;
      }
      if (message.role !== 'assistant') {
        debugLog('runtime', '按钮调试读取到的最新消息不是 assistant，跳过处理', {
          role: message.role ?? null,
          messageId: message.message_id ?? null,
        });
        return;
      }
      const result = handleAssistantReply(String(message.message || ''), {
        ...options,
        refreshMacroOnNoCommands: false,
      });
      debugLog('runtime', '按钮触发的 assistant 消息处理完成', {
        buttonName,
        messageId: message.message_id ?? null,
        applied: result.applied.length,
        hasCommandsText: Boolean(result.commandsText),
      });
    } catch (error) {
      debugError('runtime', '按钮触发的 assistant 消息处理失败', error);
    }
  };

  const binding = runtime.eventOn(eventName, listener) as EventBinding | void;
  已注册按钮钩子 = { eventName, listener, binding: binding ?? undefined };
  debugLog('runtime', '已注册解析命令按钮钩子', { buttonName, eventName });
  return true;
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
  const eventName = runtime.tavern_events?.MESSAGE_RECEIVED;
  if (!eventName || typeof runtime.eventOn !== 'function') {
    debugLog('runtime', '未找到 tavern_events.MESSAGE_RECEIVED 或 eventOn，无法自动接入', {
      hasEventOn: typeof runtime.eventOn === 'function',
      eventName,
    });
    return false;
  }

  const listener = (messageId: number, type?: string) => {
    debugLog('runtime', '收到 MESSAGE_RECEIVED 事件', {
      eventName,
      messageId,
      type: type ?? null,
    });
    try {
      const message = 读取消息(messageId);
      if (!message) {
        debugLog('runtime', '未读取到目标消息，跳过处理', { messageId });
        return;
      }
      if (message.role !== 'assistant') {
        debugLog('runtime', '目标消息不是 assistant，跳过处理', {
          role: message.role ?? null,
          messageId: message.message_id ?? messageId,
        });
        return;
      }
      if (是否重复消息(message)) {
        debugLog('runtime', '检测到重复 assistant 消息，跳过处理', {
          messageId: message.message_id ?? messageId,
        });
        return;
      }
      const result = handleAssistantReply(String(message.message || ''), {
        ...options,
        refreshMacroOnNoCommands: false,
      });
      记录最近消息(message);
      debugLog('runtime', 'assistant 消息自动处理完成', {
        messageId: message.message_id ?? messageId,
        applied: result.applied.length,
        hasCommandsText: Boolean(result.commandsText),
      });
    } catch (error) {
      debugError('runtime', 'assistant 消息自动处理失败', error);
    }
  };

  const binding = runtime.eventOn(eventName, listener) as EventBinding | void;
  已注册回复钩子 = { eventName, listener, binding: binding ?? undefined };
  debugLog('runtime', '已注册 assistant 消息接收钩子', { eventName });
  return true;
}
