import { 执行命令, 执行并保存命令, type 执行结果 } from './executor';
import { 构建宏注入文本, 构建注入文本, 构建注入视图, type 注入视图 } from './context';
import { 解析命令输入, type 状态命令 } from './commands';
import { debugError, debugLog, summarizeState, summarizeValue } from './debug';
import { 解析命令块 } from './protocol';
import { CONTEXT_MACRO_KEY, 保存上下文宏, 加载状态, STATE_ROOT_KEY } from './storage';
import { type 状态总表 } from './state';

export type 命令应用结果 = 执行结果 & {
  commandsText: string | null;
  cleanedReplyText: string;
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

export function refreshContextMacro(state: 状态总表, macroKey = CONTEXT_MACRO_KEY): string {
  debugLog('bridge', '刷新上下文宏', {
    macroKey,
    state: summarizeState(state),
  });
  return 保存上下文宏(buildContextMacroText(state), macroKey);
}

export function refreshContextMacroFromStorage(rootKey = STATE_ROOT_KEY, macroKey = CONTEXT_MACRO_KEY): string {
  debugLog('bridge', '从存档刷新上下文宏', { rootKey, macroKey });
  return refreshContextMacro(加载状态(rootKey), macroKey);
}

export function extractCommands(replyText: string): { commandsText: string | null; commands: 状态命令[]; cleanedReplyText: string } {
  debugLog('bridge', '开始从回复提取命令', summarizeValue(replyText));
  try {
    const parsed = 解析命令块(replyText);
    const commands = parsed.commandsText ? 解析命令输入(parsed.commands) : [];
    debugLog('bridge', '命令提取完成', {
      hasCommandsText: Boolean(parsed.commandsText),
      commandsCount: commands.length,
      cleanedReply: summarizeValue(parsed.replyText),
    });
    return {
      commandsText: parsed.commandsText,
      commands,
      cleanedReplyText: parsed.replyText,
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
    debugLog('bridge', '未提取到命令，跳过执行');
    return {
      state: _.cloneDeep(state),
      applied: [],
      commandsText: null,
      cleanedReplyText: extracted.cleanedReplyText,
    };
  }
  const result = 执行命令(state, extracted.commands);
  debugLog('bridge', '提取并应用命令完成', {
    applied: result.applied.length,
    state: summarizeState(result.state),
  });
  return {
    ...result,
    commandsText: extracted.commandsText,
    cleanedReplyText: extracted.cleanedReplyText,
  };
}

export function extractApplyAndSaveCommands(
  replyText: string,
  state: 状态总表,
  rootKey = STATE_ROOT_KEY,
  macroKey = CONTEXT_MACRO_KEY,
): 命令应用结果 {
  debugLog('bridge', '开始提取、应用并保存命令', {
    rootKey,
    macroKey,
    state: summarizeState(state),
  });
  const extracted = extractCommands(replyText);
  if (extracted.commands.length === 0) {
    debugLog('bridge', '未提取到命令，仅刷新上下文宏', { macroKey });
    refreshContextMacro(state, macroKey);
    return {
      state: _.cloneDeep(state),
      applied: [],
      commandsText: null,
      cleanedReplyText: extracted.cleanedReplyText,
    };
  }
  const result = 执行并保存命令(state, extracted.commands, rootKey);
  refreshContextMacro(result.state, macroKey);
  debugLog('bridge', '提取、应用并保存命令完成', {
    applied: result.applied.length,
    state: summarizeState(result.state),
  });
  return {
    ...result,
    commandsText: extracted.commandsText,
    cleanedReplyText: extracted.cleanedReplyText,
  };
}
