import { 执行命令, 执行并保存命令, type 执行结果 } from './executor';
import { 构建宏注入文本, 构建注入文本, 构建注入视图, type 注入视图 } from './context';
import { 解析命令输入, type 状态命令 } from './commands';
import { debugError, debugInfo, debugLog, summarizeState, summarizeValue } from './debug';
import { 解析命令块, 解析玩家选项块, 移除命令协议块, type 玩家选项 } from './protocol';
import { CONTEXT_MACRO_KEY, 保存上下文宏, 加载状态, 更新消息正文 } from './storage';
import { type 状态总表 } from './state';

export type 命令应用结果 = 执行结果 & {
  commandsText: string | null;
  playerOptions: 玩家选项[];
  cleanedReplyText: string;
};

export type 处理回复选项 = {
  messageId?: number;
  macroKey?: string;
  refreshMacroOnNoCommands?: boolean;
};

export function buildInjectedContext(state: 状态总表): string {
  return 构建注入文本(state);
}

export function buildInjectedView(state: 状态总表): 注入视图 {
  return 构建注入视图(state);
}

export function buildContextMacroText(state: 状态总表): string {
  return 构建宏注入文本(state);
}

export function appendReplyDecorators(replyText: string, state: 状态总表, playerOptions: 玩家选项[] = [], messageId?: number): string {
  void state;
  void playerOptions;
  void messageId;
  return 移除命令协议块(String(replyText || ''));
}

export function refreshContextMacro(state: 状态总表, macroKey = CONTEXT_MACRO_KEY): string {
  debugLog('bridge', '刷新上下文宏', {
    macroKey,
    state: summarizeState(state),
  });
  return 保存上下文宏(buildContextMacroText(state), macroKey);
}

export function refreshContextMacroFromStorage(messageId?: number, macroKey = CONTEXT_MACRO_KEY): string {
  debugLog('bridge', '从最新楼层快照刷新上下文宏', { messageId: messageId ?? null, macroKey });
  return refreshContextMacro(加载状态(messageId), macroKey);
}

export function extractCommands(replyText: string): { commandsText: string | null; commands: 状态命令[]; playerOptions: 玩家选项[]; cleanedReplyText: string } {
  debugLog('bridge', '开始从回复提取命令与选项', summarizeValue(replyText));
  try {
    const parsed = 解析命令块(replyText);
    const commands = parsed.commandsText ? 解析命令输入(parsed.commands) : [];
    const playerOptions = 解析玩家选项块(parsed.replyText);
    const cleanedReplyText = parsed.replyText;
    debugInfo('bridge', '命令与选项提取完成', {
      hasCommandsText: Boolean(parsed.commandsText),
      commandsCount: commands.length,
      playerOptionsCount: playerOptions.length,
      cleanedReply: summarizeValue(cleanedReplyText),
    });
    return {
      commandsText: parsed.commandsText,
      commands,
      playerOptions,
      cleanedReplyText,
    };
  } catch (error) {
    debugError('bridge', '提取命令失败', error);
    throw error;
  }
}

export function extractAndApplyCommands(replyText: string, state: 状态总表): 命令应用结果 {
  debugLog('bridge', '开始提取并应用命令', { state: summarizeState(state) });
  const extracted = extractCommands(replyText);
  if (extracted.commands.length === 0) {
    debugInfo('bridge', '未提取到命令，跳过执行');
    return {
      state: _.cloneDeep(state),
      applied: [],
      commandsText: null,
      playerOptions: extracted.playerOptions,
      cleanedReplyText: extracted.cleanedReplyText,
    };
  }
  const result = 执行命令(state, extracted.commands);
  debugInfo('bridge', '提取并应用命令完成', {
    applied: result.applied.length,
    state: summarizeState(result.state),
  });
  return {
    ...result,
    commandsText: extracted.commandsText,
    playerOptions: extracted.playerOptions,
    cleanedReplyText: extracted.cleanedReplyText,
  };
}

export async function extractApplyAndSaveCommands(
  replyText: string,
  state: 状态总表,
  messageId: number,
  macroKey = CONTEXT_MACRO_KEY,
  refreshMacroOnNoCommands = true,
): Promise<命令应用结果> {
  debugLog('bridge', '开始提取、应用并保存命令', {
    messageId,
    macroKey,
    state: summarizeState(state),
  });
  const extracted = extractCommands(replyText);
  debugLog('bridge', '提取、应用并保存命令提取结果', {
    messageId,
    macroKey,
    hasCommandsText: Boolean(extracted.commandsText),
    commandsCount: extracted.commands.length,
    playerOptionsCount: extracted.playerOptions.length,
  });
  if (extracted.commands.length === 0) {
    debugInfo('bridge', refreshMacroOnNoCommands ? '未提取到命令，仅刷新上下文宏' : '未提取到命令，仅记录日志', {
      macroKey,
      refreshMacroOnNoCommands,
    });
    await 更新消息正文(messageId, appendReplyDecorators(extracted.cleanedReplyText, state, extracted.playerOptions, messageId));
    if (refreshMacroOnNoCommands) {
      refreshContextMacro(state, macroKey);
    }
    return {
      state: _.cloneDeep(state),
      applied: [],
      commandsText: null,
      playerOptions: extracted.playerOptions,
      cleanedReplyText: extracted.cleanedReplyText,
    };
  }
  const result = await 执行并保存命令(state, extracted.commands, messageId);
  await 更新消息正文(messageId, appendReplyDecorators(extracted.cleanedReplyText, result.state, extracted.playerOptions, messageId));
  refreshContextMacro(result.state, macroKey);
  debugInfo('bridge', '提取、应用并保存命令完成', {
    messageId,
    macroKey,
    applied: result.applied.length,
    playerOptionsCount: extracted.playerOptions.length,
    state: summarizeState(result.state),
  });
  return {
    ...result,
    commandsText: extracted.commandsText,
    playerOptions: extracted.playerOptions,
    cleanedReplyText: extracted.cleanedReplyText,
  };
}

export async function handleAssistantReply(replyText: string, options: 处理回复选项 = {}): Promise<命令应用结果> {
  const { messageId, macroKey = CONTEXT_MACRO_KEY, refreshMacroOnNoCommands = false } = options;
  debugInfo('bridge', '开始处理 AI 回复', {
    messageId: messageId ?? null,
    macroKey,
    refreshMacroOnNoCommands,
    reply: summarizeValue(replyText),
  });
  try {
    if (typeof messageId !== 'number') {
      throw new Error('处理 AI 回复时必须提供目标 messageId');
    }
    const state = 加载状态(messageId - 1);
    const result = await extractApplyAndSaveCommands(replyText, state, messageId, macroKey, refreshMacroOnNoCommands);
    debugInfo('bridge', 'AI 回复处理完成', {
      messageId,
      macroKey,
      applied: result.applied.length,
      hasCommandsText: Boolean(result.commandsText),
      state: summarizeState(result.state),
    });
    return result;
  } catch (error) {
    debugError('bridge', '处理 AI 回复失败', error);
    throw error;
  }
}
