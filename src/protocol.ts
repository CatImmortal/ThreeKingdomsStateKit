import type { 状态命令 } from './commands';
import { debugError, debugLog } from './debug';

export const UPDATE_VARIABLE_START = '<UpdateVariable>';
export const UPDATE_VARIABLE_END = '</UpdateVariable>';
export const ANALYSIS_START = '<Analysis>';
export const ANALYSIS_END = '</Analysis>';
export const COMMAND_BLOCK_START = '<Commands>';
export const COMMAND_BLOCK_END = '</Commands>';
export const PLAYER_OPTIONS_START = '<PlayerOptions>';
export const PLAYER_OPTIONS_END = '</PlayerOptions>';

export type 玩家选项 = {
  text: string;
};

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
  if (start < 0 || end < 0 || end < start) {
    return null;
  }
  return replyText.slice(start + UPDATE_VARIABLE_START.length, end).trim();
}

export function 提取玩家选项块(replyText: string): string | null {
  const start = replyText.indexOf(PLAYER_OPTIONS_START);
  const end = replyText.indexOf(PLAYER_OPTIONS_END);
  if (start < 0 || end < 0 || end < start) {
    return null;
  }
  return replyText.slice(start + PLAYER_OPTIONS_START.length, end).trim();
}

export function 提取命令块(replyText: string): string | null {
  const block = 提取更新块(replyText);
  if (!block) {
    return null;
  }
  const start = block.indexOf(COMMAND_BLOCK_START);
  const end = block.indexOf(COMMAND_BLOCK_END);
  if (start < 0 || end < 0 || end < start) {
    return null;
  }
  return block.slice(start + COMMAND_BLOCK_START.length, end).trim();
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

export function 移除命令协议块(replyText: string): string {
  return String(replyText || '').replace(/\s*<UpdateVariable>[\s\S]*?<\/UpdateVariable>\s*/gi, '\n').trim();
}

export function 移除玩家选项块(replyText: string): string {
  return String(replyText || '').replace(/\s*<PlayerOptions>[\s\S]*?<\/PlayerOptions>\s*/gi, '\n').trim();
}

export function 解析玩家选项块(replyText: string): 玩家选项[] {
  const optionsText = 提取玩家选项块(replyText);
  if (!optionsText) {
    debugLog('protocol', '未找到可解析的玩家选项块');
    return [];
  }
  try {
    const parsed = JSON.parse(optionsText) as 玩家选项[] | 玩家选项;
    const list = Array.isArray(parsed) ? parsed : [parsed];
    const options = list
      .filter(item => _.isPlainObject(item))
      .map(item => ({ text: String(item.text || '').trim() }))
      .filter(item => Boolean(item.text));
    debugLog('protocol', '玩家选项块 JSON 解析成功', {
      count: options.length,
      preview: options.slice(0, 3),
    });
    return options;
  } catch (error) {
    debugError('protocol', '玩家选项块 JSON 解析失败，已忽略该块', error);
    return [];
  }
}
