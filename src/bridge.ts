import { 执行命令, 执行并保存命令, type 执行结果 } from './executor';
import { 构建宏注入文本, 构建注入文本, 构建注入视图, type 注入视图 } from './context';
import { 解析命令输入, type 状态命令 } from './commands';
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
  return 保存上下文宏(buildContextMacroText(state), macroKey);
}

export function refreshContextMacroFromStorage(rootKey = STATE_ROOT_KEY, macroKey = CONTEXT_MACRO_KEY): string {
  return refreshContextMacro(加载状态(rootKey), macroKey);
}

export function extractCommands(replyText: string): { commandsText: string | null; commands: 状态命令[]; cleanedReplyText: string } {
  const parsed = 解析命令块(replyText);
  return {
    commandsText: parsed.commandsText,
    commands: parsed.commandsText ? 解析命令输入(parsed.commands) : [],
    cleanedReplyText: parsed.replyText,
  };
}

export function extractAndApplyCommands(replyText: string, state: 状态总表): 命令应用结果 {
  const extracted = extractCommands(replyText);
  if (extracted.commands.length === 0) {
    return {
      state: _.cloneDeep(state),
      applied: [],
      commandsText: null,
      cleanedReplyText: extracted.cleanedReplyText,
    };
  }
  const result = 执行命令(state, extracted.commands);
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
  const extracted = extractCommands(replyText);
  if (extracted.commands.length === 0) {
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
  return {
    ...result,
    commandsText: extracted.commandsText,
    cleanedReplyText: extracted.cleanedReplyText,
  };
}
