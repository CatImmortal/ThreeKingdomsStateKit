import type { 状态命令 } from './commands';
import { debugError, debugLog, summarizeValue } from './debug';

export const UPDATE_VARIABLE_START = '<UpdateVariable>';
export const UPDATE_VARIABLE_END = '</UpdateVariable>';
export const ANALYSIS_START = '<Analysis>';
export const ANALYSIS_END = '</Analysis>';
export const COMMAND_BLOCK_START = '<Commands>';
export const COMMAND_BLOCK_END = '</Commands>';

export type 命令块提取结果 = {
  commandsText: string | null;
  commands: 状态命令[];
  replyText: string;
};

export function 包装命令块(commands: 状态命令[] | 状态命令, analysis = '', space = 2): string {
  const list = Array.isArray(commands) ? commands : [commands];
  return [
    UPDATE_VARIABLE_START,
    ANALYSIS_START,
    analysis,
    ANALYSIS_END,
    COMMAND_BLOCK_START,
    JSON.stringify(list, null, space),
    COMMAND_BLOCK_END,
    UPDATE_VARIABLE_END,
  ].join('\n');
}

function 提取更新块(replyText: string): string | null {
  const start = replyText.indexOf(UPDATE_VARIABLE_START);
  const end = replyText.indexOf(UPDATE_VARIABLE_END);
  debugLog('protocol', '扫描 UpdateVariable 包装', {
    hasStart: start >= 0,
    hasEnd: end >= 0,
    reply: summarizeValue(replyText),
  });
  if (start < 0 || end < 0 || end < start) {
    return null;
  }
  const block = replyText.slice(start + UPDATE_VARIABLE_START.length, end).trim();
  debugLog('protocol', '提取到 UpdateVariable 内容', summarizeValue(block));
  return block;
}

export function 提取命令块(replyText: string): string | null {
  const block = 提取更新块(replyText);
  if (!block) {
    debugLog('protocol', '未提取到 UpdateVariable 内容');
    return null;
  }
  const start = block.indexOf(COMMAND_BLOCK_START);
  const end = block.indexOf(COMMAND_BLOCK_END);
  debugLog('protocol', '扫描 Commands 包装', {
    hasStart: start >= 0,
    hasEnd: end >= 0,
    block: summarizeValue(block),
  });
  if (start < 0 || end < 0 || end < start) {
    return null;
  }
  const commandsText = block.slice(start + COMMAND_BLOCK_START.length, end).trim();
  debugLog('protocol', '提取到 Commands 内容', summarizeValue(commandsText));
  return commandsText;
}

export function 解析命令块(replyText: string): 命令块提取结果 {
  const commandsText = 提取命令块(replyText);
  if (!commandsText) {
    debugLog('protocol', '未找到可解析的命令块');
    return {
      commandsText: null,
      commands: [],
      replyText,
    };
  }

  try {
    const parsed = JSON.parse(commandsText) as 状态命令[] | 状态命令;
    const commands = Array.isArray(parsed) ? parsed : [parsed];
    debugLog('protocol', '命令块 JSON 解析成功', {
      count: commands.length,
      firstType: commands[0]?.type ?? null,
    });
    return {
      commandsText,
      commands,
      replyText,
    };
  } catch (error) {
    debugError('protocol', '命令块 JSON 解析失败', error);
    throw error;
  }
}
