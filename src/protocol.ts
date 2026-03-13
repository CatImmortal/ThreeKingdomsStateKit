import type { 状态命令 } from './commands';

export const COMMAND_BLOCK_START = '<SgCommandsStart>';
export const COMMAND_BLOCK_END = '<SgCommandsEnd>';

export type 命令块提取结果 = {
  commandsText: string | null;
  commands: 状态命令[];
  replyText: string;
};

export function 包装命令块(commands: 状态命令[] | 状态命令, space = 2): string {
  const list = Array.isArray(commands) ? commands : [commands];
  return [COMMAND_BLOCK_START, JSON.stringify(list, null, space), COMMAND_BLOCK_END].join('\n');
}

export function 提取命令块(replyText: string): string | null {
  const start = replyText.indexOf(COMMAND_BLOCK_START);
  const end = replyText.indexOf(COMMAND_BLOCK_END);
  if (start < 0 || end < 0 || end < start) {
    return null;
  }
  return replyText.slice(start + COMMAND_BLOCK_START.length, end).trim();
}

export function 移除命令块(replyText: string): string {
  const pattern = new RegExp(`${_.escapeRegExp(COMMAND_BLOCK_START)}[\\s\\S]*?${_.escapeRegExp(COMMAND_BLOCK_END)}`, 'g');
  return replyText.replace(pattern, '').trim();
}

export function 解析命令块(replyText: string): 命令块提取结果 {
  const commandsText = 提取命令块(replyText);
  if (!commandsText) {
    return {
      commandsText: null,
      commands: [],
      replyText,
    };
  }

  const parsed = JSON.parse(commandsText) as 状态命令[] | 状态命令;
  return {
    commandsText,
    commands: Array.isArray(parsed) ? parsed : [parsed],
    replyText: 移除命令块(replyText),
  };
}
