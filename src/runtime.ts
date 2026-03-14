import { handleAssistantReply, type 处理回复选项 } from './bridge';
import { debugError, debugInfo, debugLog, debugWarn, getDebugEnabled, setDebugEnabled, summarizeValue } from './debug';
import { getHostDocument } from './dom-host';
import { 解析玩家选项块 } from './protocol';
import { 加载状态 } from './storage';
import { create初始状态, type 状态总表 } from './state';
import { mountUnifiedPanelApp, unmountUnifiedPanelApp } from './ui/app';
import { clearUnifiedPanelState, setPlayerOptionsPanelVisible, setSystemPanelVisible, updatePlayerOptionsPanelState, updateSystemPanelState, unifiedPanelState } from './ui/store';

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
    MESSAGE_SENT?: string;
    MESSAGE_RECEIVED?: string;
    MESSAGE_DELETED?: string;
    CHAT_CHANGED?: string;
  };
  getChatMessages?: (range: string | number, option?: { include_swipes?: false }) => ChatMessageLike[];
  executeSlashCommandsWithOptions?: (text: string, options?: any) => Promise<{ isError?: boolean; errorMessage?: string }>;
  triggerSlash?: (command: string) => Promise<string>;
  TavernHelper?: {
    getChatMessages?: (range: string | number, option?: { include_swipes?: false }) => ChatMessageLike[];
    executeSlashCommandsWithOptions?: (text: string, options?: any) => Promise<{ isError?: boolean; errorMessage?: string }>;
    triggerSlash?: (command: string) => Promise<string>;
  };
  SillyTavern?: {
    chatId?: string;
    characterId?: string;
    getCurrentChatId?: () => string;
  };
};

type ToastrLike = {
  success?: (message: string) => void;
  warning?: (message: string) => void;
};

let 已注册回复钩子: { eventName: string; listener: (...args: any[]) => void; binding?: EventBinding } | null = null;
let 已注册发送消息钩子: { eventName: string; listener: (...args: any[]) => void; binding?: EventBinding } | null = null;
let 已注册删除消息钩子: { eventName: string; listener: (...args: any[]) => void; binding?: EventBinding } | null = null;
let 已注册聊天切换钩子: { eventName: string; listener: (...args: any[]) => void; binding?: EventBinding } | null = null;
let 已注册按钮钩子: { eventName: string; listener: (...args: any[]) => void; binding?: EventBinding } | null = null;
let 已注册日志按钮钩子: { eventName: string; listener: (...args: any[]) => void; binding?: EventBinding } | null = null;
let 已注册Vue面板按钮钩子: { eventName: string; listener: (...args: any[]) => void; binding?: EventBinding } | null = null;
let 最近处理记录: { chatId: string | null; messageId: number | null; message: string } = { chatId: null, messageId: null, message: '' };
let Vue面板已启用 = false;

function 获取运行时接口(): RuntimeApi {
  const globalApi = globalThis as typeof globalThis & RuntimeApi;
  const windowApi = typeof window !== 'undefined' ? (window as typeof window & RuntimeApi) : undefined;
  return {
    eventOn: globalApi.eventOn ?? windowApi?.eventOn,
    eventRemoveListener: globalApi.eventRemoveListener ?? windowApi?.eventRemoveListener,
    getButtonEvent: globalApi.getButtonEvent ?? windowApi?.getButtonEvent,
    tavern_events: globalApi.tavern_events ?? windowApi?.tavern_events,
    getChatMessages: globalApi.getChatMessages ?? windowApi?.getChatMessages,
    executeSlashCommandsWithOptions: globalApi.executeSlashCommandsWithOptions ?? windowApi?.executeSlashCommandsWithOptions,
    triggerSlash: globalApi.triggerSlash ?? windowApi?.triggerSlash,
    TavernHelper: globalApi.TavernHelper ?? windowApi?.TavernHelper,
  };
}

function 获取消息读取函数() {
  const runtime = 获取运行时接口();
  return runtime.getChatMessages ?? runtime.TavernHelper?.getChatMessages;
}

function 获取当前聊天ID(): string | null {
  const globalApi = globalThis as typeof globalThis & RuntimeApi;
  const windowApi = typeof window !== 'undefined' ? (window as typeof window & RuntimeApi) : undefined;
  const sillyTavern = globalApi.SillyTavern ?? windowApi?.SillyTavern;
  const chatId = typeof sillyTavern?.getCurrentChatId === 'function'
    ? sillyTavern.getCurrentChatId()
    : sillyTavern?.chatId;
  return chatId ? String(chatId) : null;
}

function 获取当前角色卡ID(): string | null {
  const globalApi = globalThis as typeof globalThis & RuntimeApi;
  const windowApi = typeof window !== 'undefined' ? (window as typeof window & RuntimeApi) : undefined;
  const sillyTavern = globalApi.SillyTavern ?? windowApi?.SillyTavern;
  return sillyTavern?.characterId ? String(sillyTavern.characterId) : null;
}

function 获取Slash执行器() {
  const runtime = 获取运行时接口();
  const triggerSlash = runtime.triggerSlash ?? runtime.TavernHelper?.triggerSlash;
  const executeSlashCommandsWithOptions = runtime.executeSlashCommandsWithOptions ?? runtime.TavernHelper?.executeSlashCommandsWithOptions;
  debugLog('runtime', '检查 slash 执行器', {
    hasDirectTriggerSlash: typeof runtime.triggerSlash === 'function',
    hasTavernHelperTriggerSlash: typeof runtime.TavernHelper?.triggerSlash === 'function',
    hasDirectExecutor: typeof runtime.executeSlashCommandsWithOptions === 'function',
    hasTavernHelperExecutor: typeof runtime.TavernHelper?.executeSlashCommandsWithOptions === 'function',
    preferred: typeof triggerSlash === 'function' ? 'triggerSlash' : typeof executeSlashCommandsWithOptions === 'function' ? 'executeSlashCommandsWithOptions' : 'none',
  });
  return {
    triggerSlash,
    executeSlashCommandsWithOptions,
  };
}

function 获取Toastr接口(): ToastrLike | undefined {
  const globalApi = globalThis as typeof globalThis & { toastr?: ToastrLike };
  const windowApi = typeof window !== 'undefined' ? ((window as typeof window) as typeof window & { toastr?: ToastrLike }) : undefined;
  return globalApi.toastr ?? windowApi?.toastr;
}

function 提示日志开关状态(enabled: boolean): void {
  const message = `已${enabled ? '开启' : '关闭'} log/info 日志打印`;
  const toastr = 获取Toastr接口();
  if (typeof toastr?.success === 'function') {
    toastr.success(message);
    return;
  }
  console.log('[ThreeKingdomsStateKit][debug]', message);
}

function 提示玩家选项消息(message: string, tone: 'success' | 'warning' = 'success'): void {
  const toastr = 获取Toastr接口();
  if (tone === 'warning' && typeof toastr?.warning === 'function') {
    toastr.warning(message);
    return;
  }
  if (tone === 'success' && typeof toastr?.success === 'function') {
    toastr.success(message);
    return;
  }
  console.log('[ThreeKingdomsStateKit][player-options]', message);
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

function 读取最新消息(): ChatMessageLike | null {
  const getChatMessages = 获取消息读取函数();
  if (typeof getChatMessages !== 'function') {
    debugLog('runtime', '未找到 getChatMessages，无法读取最新消息');
    return null;
  }
  const messages = getChatMessages('0-{{lastMessageId}}', { include_swipes: false }) ?? [];
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (message) {
      debugLog('runtime', '读取最新消息完成', {
        messageId: message.message_id ?? null,
        role: message.role ?? null,
      });
      return message;
    }
  }
  debugLog('runtime', '未找到最新消息');
  return null;
}

function 读取最新assistant消息(): ChatMessageLike | null {
  const getChatMessages = 获取消息读取函数();
  if (typeof getChatMessages !== 'function') {
    debugLog('runtime', '未找到 getChatMessages，无法读取最新 assistant 消息');
    return null;
  }
  const messages = getChatMessages('0-{{lastMessageId}}', { include_swipes: false }) ?? [];
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (message?.role === 'assistant') {
      debugLog('runtime', '读取最新 assistant 消息完成', {
        messageId: message.message_id ?? null,
      });
      return message;
    }
  }
  debugLog('runtime', '未找到最新 assistant 消息');
  return null;
}

function 刷新玩家选项界面状态(reason: string): boolean {
  const latest = 读取最新消息();
  if (!latest || latest.role !== 'assistant' || typeof latest.message_id !== 'number') {
    updatePlayerOptionsPanelState({
      messageId: typeof latest?.message_id === 'number' ? latest.message_id : (unifiedPanelState.playerOptionsPanel.latestMessageId ?? -1),
      options: [],
    });
    setPlayerOptionsPanelVisible(false);
    debugLog('runtime', '最新楼层不是可展示选项的 assistant，已关闭玩家选项窗', {
      reason,
      latestMessageId: latest?.message_id ?? null,
      latestRole: latest?.role ?? null,
    });
    return false;
  }
  const options = 解析玩家选项块(String(latest.message || ''));
  updatePlayerOptionsPanelState({
    messageId: latest.message_id,
    options,
  });
  debugLog('runtime', '已按最新楼层刷新玩家选项窗', {
    reason,
    latestMessageId: latest.message_id,
    playerOptionsCount: options.length,
  });
  return options.length > 0;
}

function 是否最新assistant楼层(messageId: number): boolean {
  const latest = 读取最新assistant消息();
  const isLatest = typeof latest?.message_id === 'number' && latest.message_id === messageId;
  debugLog('runtime', '校验玩家选项楼层是否最新', {
    messageId,
    latestAssistantMessageId: latest?.message_id ?? null,
    isLatest,
  });
  return isLatest;
}

function 格式化玩家选项文本(text: string): string {
  const normalized = String(text || '').trim().replace(/^（|）$/g, '');
  return normalized ? `（${normalized}）` : '';
}

function 查找输入框(): HTMLTextAreaElement | HTMLInputElement | HTMLElement | null {
  let hostDocument: Document;
  try {
    hostDocument = getHostDocument();
  } catch {
    return null;
  }
  const selectors = [
    '#send_textarea',
    '#send_textarea textarea',
    'textarea[name="send_textarea"]',
    'textarea[id="send_textarea"]',
    'textarea[data-testid="send_textarea"]',
    '[contenteditable="true"]',
    '[contenteditable="plaintext-only"]',
    '.ProseMirror',
    'form textarea',
    'textarea',
    'input[type="text"]',
  ];
  for (const selector of selectors) {
    const element = hostDocument.querySelector(selector);
    if (element instanceof HTMLTextAreaElement || element instanceof HTMLInputElement) {
      return element;
    }
    if (element instanceof HTMLElement && element.isContentEditable) {
      return element;
    }
  }
  const active = hostDocument.activeElement;
  if (active instanceof HTMLTextAreaElement || active instanceof HTMLInputElement) {
    return active;
  }
  if (active instanceof HTMLElement && active.isContentEditable) {
    return active;
  }
  return null;
}

function 设置原生输入值(input: HTMLTextAreaElement | HTMLInputElement, text: string): void {
  const prototype = input instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
  const descriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
  if (descriptor?.set) {
    descriptor.set.call(input, text);
    return;
  }
  input.value = text;
}

function 设置可编辑区域文本(input: HTMLElement, text: string): void {
  input.textContent = text;
  const selection = typeof window !== 'undefined' ? window.getSelection?.() : null;
  let range: Range | null = null;
  try {
    range = getHostDocument().createRange();
  } catch {
    range = null;
  }
  if (!selection || !range) {
    return;
  }
  range.selectNodeContents(input);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

async function 通过Slash填充输入框(text: string): Promise<boolean> {
  const command = `/setinput ${JSON.stringify(text)}`;
  if (await 执行Slash(command)) {
    debugInfo('runtime', '已通过 slash /setinput 填充输入框', { text: summarizeValue(text) });
    return true;
  }
  return false;
}

function 通过DOM填充输入框(text: string): boolean {
  const input = 查找输入框();
  if (!input) {
    debugWarn('runtime', '未找到可填充的输入框');
    return false;
  }
  input.focus();
  if (input instanceof HTMLTextAreaElement || input instanceof HTMLInputElement) {
    设置原生输入值(input, text);
  } else if (input instanceof HTMLElement && input.isContentEditable) {
    设置可编辑区域文本(input, text);
  } else {
    debugWarn('runtime', '找到的输入目标不支持填充', { tagName: (input as HTMLElement).tagName ?? null });
    return false;
  }
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('change', { bubbles: true }));
  debugInfo('runtime', '已通过 DOM 填充用户输入框', {
    tagName: (input as HTMLElement).tagName,
    isContentEditable: input instanceof HTMLElement ? input.isContentEditable : false,
    text: summarizeValue(text),
  });
  return true;
}

async function 填充输入框(text: string): Promise<boolean> {
  if (await 通过Slash填充输入框(text)) {
    return true;
  }
  return 通过DOM填充输入框(text);
}

function 是否重复消息(message: ChatMessageLike): boolean {
  const chatId = 获取当前聊天ID();
  const messageId = typeof message.message_id === 'number' ? message.message_id : null;
  const text = String(message.message || '');
  return 最近处理记录.chatId === chatId && 最近处理记录.messageId === messageId && 最近处理记录.message === text;
}

function 记录最近消息(message: ChatMessageLike): void {
  最近处理记录 = {
    chatId: 获取当前聊天ID(),
    messageId: typeof message.message_id === 'number' ? message.message_id : null,
    message: String(message.message || ''),
  };
}

function 转义Slash参数(value: string): string {
  return JSON.stringify(String(value || ''));
}

async function 执行Slash(command: string): Promise<boolean> {
  const { triggerSlash, executeSlashCommandsWithOptions } = 获取Slash执行器();
  if (typeof triggerSlash === 'function') {
    try {
      await triggerSlash(command);
      debugLog('runtime', '通过 triggerSlash 执行 slash 命令成功', { command });
      return true;
    } catch (error) {
      debugWarn('runtime', '通过 triggerSlash 执行 slash 命令异常', { command, error });
      return false;
    }
  }
  if (typeof executeSlashCommandsWithOptions === 'function') {
    try {
      const result = await executeSlashCommandsWithOptions(command, { handleExecutionErrors: true });
      if (result?.isError) {
        debugWarn('runtime', '通过 executeSlashCommandsWithOptions 执行 slash 命令失败', {
          command,
          errorMessage: result.errorMessage || null,
        });
        return false;
      }
      debugLog('runtime', '通过 executeSlashCommandsWithOptions 执行 slash 命令成功', { command });
      return true;
    } catch (error) {
      debugWarn('runtime', '通过 executeSlashCommandsWithOptions 执行 slash 命令异常', { command, error });
      return false;
    }
  }
  debugWarn('runtime', '未找到可用的 slash 执行器，无法执行命令', { command });
  return false;
}

function 重置运行时消息记录(): void {
  最近处理记录 = { chatId: null, messageId: null, message: '' };
}

function 销毁全部Vue界面(reason: string): void {
  clearUnifiedPanelState();
  unmountUnifiedPanelApp();
  Vue面板已启用 = false;
  debugLog('runtime', '已销毁全部 Vue 界面', { reason });
}

export function teardownRuntimeHooks(reason = 'runtime-teardown'): void {
  debugLog('runtime', '开始统一销毁运行时钩子与 Vue 界面', { reason });
  teardownAssistantReplyHook();
  teardownChatChangedHook();
  teardownMessageSentHook();
  teardownMessageDeletedHook();
  teardownDebugParseButtonHook();
  teardownDebugLogToggleButtonHook();
  teardownVuePanelToggleButtonHook();
  销毁全部Vue界面(reason);
  重置运行时消息记录();
  debugLog('runtime', '统一销毁运行时钩子与 Vue 界面完成', { reason });
}

function 确保Vue面板已挂载(): boolean {
  try {
    const mounted = mountUnifiedPanelApp();
    if (!mounted) {
      debugWarn('runtime', 'Vue 面板挂载失败，继续使用正文状态栏兜底');
      return false;
    }
    Vue面板已启用 = true;
    return true;
  } catch (error) {
    debugWarn('runtime', 'Vue 面板挂载异常，继续使用正文状态栏兜底', error);
    return false;
  }
}

function 同步Vue面板(messageId: number, state: 状态总表): boolean {
  if (!确保Vue面板已挂载()) {
    return false;
  }
  try {
    updateSystemPanelState({
      messageId,
      state,
    });
    刷新玩家选项界面状态('sync-vue-panel');
    debugLog('runtime', '已同步 Vue 双悬浮窗状态', {
      messageId,
      playerOptionsCount: unifiedPanelState.playerOptionsPanel.options.length,
    });
    return true;
  } catch (error) {
    debugWarn('runtime', '同步 Vue 面板状态失败，继续使用正文状态栏兜底', error);
    return false;
  }
}

export function restoreRuntimeStateFromCurrentChat(reason = 'runtime-restore'): boolean {
  if (!确保Vue面板已挂载()) {
    return false;
  }
  try {
    const latestAssistant = 读取最新assistant消息();
    if (!latestAssistant || typeof latestAssistant.message_id !== 'number') {
      updateSystemPanelState({
        messageId: unifiedPanelState.systemPanel.latestMessageId ?? -1,
        state: create初始状态(),
      });
      updatePlayerOptionsPanelState({
        messageId: unifiedPanelState.playerOptionsPanel.latestMessageId ?? -1,
        options: [],
      });
      setPlayerOptionsPanelVisible(false);
      debugLog('runtime', '当前聊天无 assistant 楼层，已恢复为空状态', { reason });
      return false;
    }
    const state = 加载状态(latestAssistant.message_id);
    updateSystemPanelState({
      messageId: latestAssistant.message_id,
      state,
    });
    刷新玩家选项界面状态(reason);
    debugLog('runtime', '已按当前聊天恢复系统面板与玩家选项', {
      reason,
      messageId: latestAssistant.message_id,
      playerOptionsCount: unifiedPanelState.playerOptionsPanel.options.length,
    });
    return true;
  } catch (error) {
    debugWarn('runtime', '按当前聊天恢复系统面板与玩家选项失败', { reason, error });
    return false;
  }
}

export function updatePlayerOptionsView(messageId: number, options: Array<{ text: string }>): boolean {
  void messageId;
  void options;
  return 刷新玩家选项界面状态('update-player-options-view');
}

export function clearPlayerOptionsView(): void {
  setPlayerOptionsPanelVisible(false);
  updatePlayerOptionsPanelState({ messageId: unifiedPanelState.playerOptionsPanel.latestMessageId ?? -1, options: [] });
  debugLog('runtime', '已清理玩家选项悬浮窗状态');
}

export async function handlePlayerOptionClick(messageId: number, optionText: string): Promise<boolean> {
  debugLog('runtime', '收到玩家选项点击请求', {
    messageId,
    optionText,
  });
  if (!Number.isFinite(messageId) || !optionText) {
    debugWarn('runtime', '玩家选项点击参数无效，已忽略', { messageId, optionText });
    return false;
  }
  if (!是否最新assistant楼层(messageId)) {
    提示玩家选项消息('仅最新一条 AI 回复的选项可填入输入栏', 'warning');
    return false;
  }
  const formatted = 格式化玩家选项文本(optionText);
  if (!formatted) {
    debugWarn('runtime', '玩家选项文本为空，已忽略', { messageId });
    return false;
  }
  if (!(await 填充输入框(formatted))) {
    提示玩家选项消息('未找到输入栏，无法填充选项', 'warning');
    return false;
  }
  提示玩家选项消息('已将选项填入输入栏，可修改后手动发送');
  return true;
}

function 卸载事件绑定(bindingState: { eventName: string; listener: (...args: any[]) => void; binding?: EventBinding } | null): void {
  if (!bindingState) {
    return;
  }
  const runtime = 获取运行时接口();
  const { eventName, listener, binding } = bindingState;
  binding?.removeListener?.();
  binding?.off?.();
  binding?.unsubscribe?.();
  binding?.unregister?.();
  runtime.eventRemoveListener?.(eventName, listener);
}

export function teardownDebugParseButtonHook(): void {
  if (!已注册按钮钩子) {
    return;
  }
  const { eventName } = 已注册按钮钩子;
  卸载事件绑定(已注册按钮钩子);
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

  const listener = async () => {
    debugInfo('runtime', '收到解析命令按钮点击事件', { buttonName, eventName });
    try {
      const message = 读取消息(-1);
      if (!message) {
        debugInfo('runtime', '按钮调试未读取到最新消息，跳过处理');
        return;
      }
      if (message.role !== 'assistant' || typeof message.message_id !== 'number') {
        debugInfo('runtime', '按钮调试读取到的最新消息不是可处理 assistant 消息，跳过处理', {
          role: message.role ?? null,
          messageId: message.message_id ?? null,
        });
        return;
      }
      debugInfo('runtime', '按钮开始处理 assistant 消息', {
        buttonName,
        messageId: message.message_id,
      });
      const result = await handleAssistantReply(String(message.message || ''), {
        ...options,
        messageId: message.message_id,
        refreshMacroOnNoCommands: false,
      });
      同步Vue面板(message.message_id, result.state);
      debugInfo('runtime', '按钮触发的 assistant 消息处理完成', {
        buttonName,
        messageId: message.message_id,
        applied: result.applied.length,
        hasCommandsText: Boolean(result.commandsText),
        playerOptionsCount: unifiedPanelState.playerOptionsPanel.options.length,
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
  const { eventName } = 已注册回复钩子;
  卸载事件绑定(已注册回复钩子);
  已注册回复钩子 = null;
  debugLog('runtime', '已卸载 AI 回复完成钩子', { eventName });
}

export function teardownMessageSentHook(): void {
  if (!已注册发送消息钩子) {
    return;
  }
  const { eventName } = 已注册发送消息钩子;
  卸载事件绑定(已注册发送消息钩子);
  已注册发送消息钩子 = null;
  debugLog('runtime', '已卸载消息发送钩子', { eventName });
}

export function setupMessageSentHook(): boolean {
  teardownMessageSentHook();
  const runtime = 获取运行时接口();
  const eventName = runtime.tavern_events?.MESSAGE_SENT;
  if (!eventName || typeof runtime.eventOn !== 'function') {
    debugLog('runtime', '未找到 tavern_events.MESSAGE_SENT 或 eventOn，无法注册消息发送钩子', {
      hasEventOn: typeof runtime.eventOn === 'function',
      eventName,
    });
    return false;
  }
  const listener = (messageId?: number) => {
    debugInfo('runtime', '收到 MESSAGE_SENT 事件，准备按最新楼层刷新玩家选项窗', { messageId: messageId ?? null });
    刷新玩家选项界面状态('message-sent');
  };
  const binding = runtime.eventOn(eventName, listener) as EventBinding | void;
  已注册发送消息钩子 = { eventName, listener, binding: binding ?? undefined };
  debugLog('runtime', '已注册消息发送钩子', { eventName });
  return true;
}

export function teardownMessageDeletedHook(): void {
  if (!已注册删除消息钩子) {
    return;
  }
  const { eventName } = 已注册删除消息钩子;
  卸载事件绑定(已注册删除消息钩子);
  已注册删除消息钩子 = null;
  debugLog('runtime', '已卸载消息删除钩子', { eventName });
}

export function setupMessageDeletedHook(): boolean {
  teardownMessageDeletedHook();
  const runtime = 获取运行时接口();
  const eventName = runtime.tavern_events?.MESSAGE_DELETED;
  if (!eventName || typeof runtime.eventOn !== 'function') {
    debugLog('runtime', '未找到 tavern_events.MESSAGE_DELETED 或 eventOn，无法注册消息删除钩子', {
      hasEventOn: typeof runtime.eventOn === 'function',
      eventName,
    });
    return false;
  }
  const listener = (messageId?: number) => {
    debugInfo('runtime', '收到 MESSAGE_DELETED 事件，准备按最新楼层刷新玩家选项窗', { messageId: messageId ?? null });
    刷新玩家选项界面状态('message-deleted');
  };
  const binding = runtime.eventOn(eventName, listener) as EventBinding | void;
  已注册删除消息钩子 = { eventName, listener, binding: binding ?? undefined };
  debugLog('runtime', '已注册消息删除钩子', { eventName });
  return true;
}

export function teardownChatChangedHook(): void {
  if (!已注册聊天切换钩子) {
    return;
  }
  const { eventName } = 已注册聊天切换钩子;
  卸载事件绑定(已注册聊天切换钩子);
  已注册聊天切换钩子 = null;
  debugLog('runtime', '已卸载聊天切换钩子', { eventName });
}

export function setupChatChangedHook(): boolean {
  teardownChatChangedHook();
  const runtime = 获取运行时接口();
  const eventName = runtime.tavern_events?.CHAT_CHANGED;
  if (!eventName || typeof runtime.eventOn !== 'function') {
    debugLog('runtime', '未找到 tavern_events.CHAT_CHANGED 或 eventOn，无法注册聊天切换钩子', {
      hasEventOn: typeof runtime.eventOn === 'function',
      eventName,
    });
    return false;
  }
  const listener = (chatFileName?: string) => {
    debugInfo('runtime', '收到 CHAT_CHANGED 事件，准备清理并恢复当前聊天状态', {
      chatFileName: chatFileName ?? null,
      currentCharacterId: 获取当前角色卡ID(),
    });
    销毁全部Vue界面('chat-changed');
    重置运行时消息记录();
    restoreRuntimeStateFromCurrentChat('chat-changed');
  };
  const binding = runtime.eventOn(eventName, listener) as EventBinding | void;
  已注册聊天切换钩子 = { eventName, listener, binding: binding ?? undefined };
  debugLog('runtime', '已注册聊天切换钩子', { eventName });
  return true;
}

export function teardownDebugLogToggleButtonHook(): void {
  if (!已注册日志按钮钩子) {
    return;
  }
  const { eventName } = 已注册日志按钮钩子;
  卸载事件绑定(已注册日志按钮钩子);
  已注册日志按钮钩子 = null;
  debugLog('runtime', '已卸载日志开关按钮钩子', { eventName });
}

export function teardownVuePanelToggleButtonHook(): void {
  if (已注册Vue面板按钮钩子) {
    const { eventName } = 已注册Vue面板按钮钩子;
    卸载事件绑定(已注册Vue面板按钮钩子);
    已注册Vue面板按钮钩子 = null;
    debugLog('runtime', '已卸载 Vue 面板开关按钮钩子', { eventName });
  }
  clearUnifiedPanelState();
  unmountUnifiedPanelApp();
  Vue面板已启用 = false;
  debugLog('runtime', '已卸载 Vue 面板');
}

export function toggleVuePanel(): boolean {
  const mounted = 确保Vue面板已挂载();
  if (!mounted) {
    return false;
  }
  const nextVisible = !unifiedPanelState.systemPanel.visible;
  setSystemPanelVisible(nextVisible);
  debugLog('runtime', nextVisible ? '已显示系统界面' : '已隐藏系统界面');
  return nextVisible;
}

export function setupVuePanelToggleButtonHook(buttonName = '系统界面开关'): boolean {
  teardownVuePanelToggleButtonHook();
  const runtime = 获取运行时接口();
  const eventName = runtime.getButtonEvent?.(buttonName);
  if (!eventName || typeof runtime.eventOn !== 'function') {
    debugLog('runtime', '未找到按钮事件或 eventOn，无法注册 Vue 面板开关按钮', {
      buttonName,
      hasEventOn: typeof runtime.eventOn === 'function',
      eventName,
    });
    return false;
  }
  const listener = () => {
    const visible = toggleVuePanel();
    debugLog('runtime', '收到系统界面开关按钮点击事件', { buttonName, eventName, visible });
  };
  const binding = runtime.eventOn(eventName, listener) as EventBinding | void;
  已注册Vue面板按钮钩子 = { eventName, listener, binding: binding ?? undefined };
  debugLog('runtime', '已注册系统界面开关按钮钩子', { buttonName, eventName, hasBinding: Boolean(binding) });
  return true;
}

export function setupDebugLogToggleButtonHook(buttonName = '日志开关'): boolean {
  teardownDebugLogToggleButtonHook();
  const runtime = 获取运行时接口();
  const eventName = runtime.getButtonEvent?.(buttonName);
  if (!eventName || typeof runtime.eventOn !== 'function') {
    debugLog('runtime', '未找到按钮事件或 eventOn，无法注册日志开关按钮', {
      buttonName,
      hasEventOn: typeof runtime.eventOn === 'function',
      eventName,
    });
    return false;
  }

  const listener = () => {
    const nextEnabled = !getDebugEnabled();
    setDebugEnabled(nextEnabled);
    console.log('[ThreeKingdomsStateKit][debug]', `日志开关已${nextEnabled ? '开启' : '关闭'}（info/log ${nextEnabled ? '启用' : '禁用'}，warning/error 始终输出）`);
    提示日志开关状态(nextEnabled);
  };

  const binding = runtime.eventOn(eventName, listener) as EventBinding | void;
  已注册日志按钮钩子 = { eventName, listener, binding: binding ?? undefined };
  debugLog('runtime', '已注册日志开关按钮钩子', { buttonName, eventName });
  return true;
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

  const listener = async (messageId: number, type?: string) => {
    debugInfo('runtime', '收到 MESSAGE_RECEIVED 事件', {
      eventName,
      messageId,
      type: type ?? null,
    });
    try {
      const message = 读取消息(messageId);
      if (!message) {
        debugInfo('runtime', '未读取到目标消息，跳过处理', { messageId });
        return;
      }
      if (message.role !== 'assistant') {
        debugInfo('runtime', '目标消息不是 assistant，跳过处理', {
          role: message.role ?? null,
          messageId: message.message_id ?? messageId,
        });
        return;
      }
      if (是否重复消息(message)) {
        debugInfo('runtime', '检测到重复 assistant 消息，跳过处理', {
          messageId: message.message_id ?? messageId,
        });
        return;
      }
      const result = await handleAssistantReply(String(message.message || ''), {
        ...options,
        messageId,
        refreshMacroOnNoCommands: false,
      });
      记录最近消息(message);
      同步Vue面板(message.message_id ?? messageId, result.state);
      debugInfo('runtime', 'assistant 消息自动处理完成', {
        messageId: message.message_id ?? messageId,
        applied: result.applied.length,
        hasCommandsText: Boolean(result.commandsText),
        playerOptionsCount: unifiedPanelState.playerOptionsPanel.options.length,
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
