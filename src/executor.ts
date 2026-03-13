import { type 状态命令, 解析命令输入 } from './commands';
import { recomputeNPC, recompute主角, recompute全局 } from './recompute';
import { debugError, debugLog, summarizeState, summarizeValue } from './debug';
import {
  createNPC,
  create任务,
  create商品条目,
  create世界,
  create主角,
  type NPC,
  type 商品条目,
  type 状态总表,
  type 任务,
} from './state';
import { MAX_RECENT_EVENTS, 数值 } from './rules';
import { 保存状态 } from './storage';

export type 执行结果 = {
  state: 状态总表;
  applied: 状态命令[];
};

const 主角资源字段 = ['当前生命值', '当前体力值', '声望', '金钱', '积分', '后宫和谐度'] as const;

function 合并对象<T extends Record<string, any>>(target: T, patch: Partial<T>): T {
  return _.mergeWith(target, patch, (_lhs, rhs) => (_.isArray(rhs) ? rhs : undefined));
}

function 断言存在<T>(value: T | undefined, message: string): T {
  if (!value) {
    throw new Error(message);
  }
  return value;
}

function 应用主角资源变更(state: 状态总表, command: Extract<状态命令, { type: 'AdjustPlayerResource' }>): void {
  const mode = command.mode ?? 'delta';
  for (const key of 主角资源字段) {
    const value = command.changes[key];
    if (value === undefined) continue;
    const current = 数值(state.主角[key]);
    (state.主角[key] as number) = mode === 'set' ? 数值(value) : current + 数值(value);
  }
  state.主角 = recompute主角(state.主角);
}

function 应用世界更新(state: 状态总表, command: Extract<状态命令, { type: 'UpdateWorld' }>): void {
  state.世界 = create世界(合并对象(_.cloneDeep(state.世界), command.changes));
}

function 应用近期事件(state: 状态总表, command: Extract<状态命令, { type: 'AppendRecentEvent' }>): void {
  state.世界.近期事件.push({
    事件名: String(command.event.事件名 || ''),
    简述: String(command.event.简述 || ''),
    日期: String(command.event.日期 || ''),
  });
  state.世界.近期事件 = state.世界.近期事件.slice(-MAX_RECENT_EVENTS);
}

function 应用主角基础更新(state: 状态总表, command: Extract<状态命令, { type: 'UpdatePlayerBase' }>): void {
  state.主角 = recompute主角(create主角(合并对象(_.cloneDeep(state.主角), command.changes)));
}

function 应用NPC更新(state: 状态总表, command: Extract<状态命令, { type: 'UpsertNpc' }>): void {
  const current = state.NPC[command.id];
  if (!current && command.createIfMissing === false) {
    throw new Error(`NPC 不存在: ${command.id}`);
  }
  const next = createNPC(合并对象(_.cloneDeep(current ?? createNPC()), command.data));
  state.NPC[command.id] = recomputeNPC(next);
}

function 应用NPC关系更新(state: 状态总表, command: Extract<状态命令, { type: 'UpdateNpcRelation' }>): void {
  const current = 断言存在(state.NPC[command.id], `NPC 不存在: ${command.id}`);
  const next: NPC = _.cloneDeep(current);
  if (command.好感 !== undefined) {
    next.好感 = (command.mode ?? 'delta') === 'set' ? 数值(command.好感) : next.好感 + 数值(command.好感);
  }
  if (command.羁绊) {
    next.羁绊 = {
      ...next.羁绊,
      ..._.mapValues(command.羁绊, value => String(value ?? '')),
    };
  }
  state.NPC[command.id] = recomputeNPC(createNPC(next));
}

function 应用任务更新(state: 状态总表, command: Extract<状态命令, { type: 'UpsertQuest' }>): void {
  const current = state.任务[command.id];
  if (!current && command.createIfMissing === false) {
    throw new Error(`任务不存在: ${command.id}`);
  }
  const next = create任务(合并对象(_.cloneDeep(current ?? create任务()), command.data));
  state.任务[command.id] = next;
}

function 应用任务状态(state: 状态总表, command: Extract<状态命令, { type: 'UpdateQuestState' }>): void {
  const current = 断言存在(state.任务[command.id], `任务不存在: ${command.id}`);
  const next: 任务 = _.cloneDeep(current);
  next.状态 = command.状态;
  if (command.目标) {
    for (const [targetId, patch] of Object.entries(command.目标)) {
      next.目标[targetId] = {
        ...(next.目标[targetId] ?? { 类型: '主要', 状态: '未完成', 描述: '', 积分: 0, 其他奖励: '' }),
        ...patch,
      };
    }
  }
  state.任务[command.id] = create任务(next);
}

function 应用商品更新(state: 状态总表, command: Extract<状态命令, { type: 'UpsertShopItem' }>): void {
  const current = state.商城[command.id];
  if (!current && command.createIfMissing === false) {
    throw new Error(`商品不存在: ${command.id}`);
  }
  const next: 商品条目 = create商品条目(合并对象(_.cloneDeep(current ?? create商品条目()), command.data));
  state.商城[command.id] = next;
}

export function 执行命令(state: 状态总表, commandInput: string | 状态命令 | 状态命令[]): 执行结果 {
  debugLog('executor', '开始执行命令', {
    input: summarizeValue(commandInput),
    before: summarizeState(state),
  });
  try {
    const commands = 解析命令输入(commandInput);
    const next = _.cloneDeep(state);

    for (const [index, command] of commands.entries()) {
      debugLog('executor', '执行单条命令', {
        index,
        type: command.type,
        id: 'id' in command ? command.id : undefined,
      });
      switch (command.type) {
        case 'UpdateWorld':
          应用世界更新(next, command);
          break;
        case 'AppendRecentEvent':
          应用近期事件(next, command);
          break;
        case 'UpdatePlayerBase':
          应用主角基础更新(next, command);
          break;
        case 'AdjustPlayerResource':
          应用主角资源变更(next, command);
          break;
        case 'UpsertNpc':
          应用NPC更新(next, command);
          break;
        case 'UpdateNpcRelation':
          应用NPC关系更新(next, command);
          break;
        case 'RemoveNpc':
          delete next.NPC[command.id];
          break;
        case 'UpsertQuest':
          应用任务更新(next, command);
          break;
        case 'UpdateQuestState':
          应用任务状态(next, command);
          break;
        case 'RemoveQuest':
          delete next.任务[command.id];
          break;
        case 'UpsertShopItem':
          应用商品更新(next, command);
          break;
        case 'RemoveShopItem':
          delete next.商城[command.id];
          break;
      }
      debugLog('executor', '单条命令执行后状态摘要', {
        index,
        type: command.type,
        state: summarizeState(next),
      });
    }

    const finalState = recompute全局(next);
    debugLog('executor', '命令执行完成', {
      applied: commands.length,
      after: summarizeState(finalState),
    });
    return {
      state: finalState,
      applied: commands,
    };
  } catch (error) {
    debugError('executor', '执行命令失败', error);
    throw error;
  }
}

export async function 执行并保存命令(
  state: 状态总表,
  commandInput: string | 状态命令 | 状态命令[],
  messageId: number,
): Promise<执行结果> {
  debugLog('executor', '开始执行并保存命令', { messageId });
  const result = 执行命令(state, commandInput);
  const savedState = await 保存状态(result.state, messageId);
  debugLog('executor', '执行并保存命令完成', {
    messageId,
    applied: result.applied.length,
    state: summarizeState(savedState),
  });
  return {
    ...result,
    state: savedState,
  };
}
