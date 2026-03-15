import { type 状态命令, 解析命令输入 } from './commands';
import { recomputeNPC, recompute主角, recompute全局 } from './recompute';
import { debugError, debugInfo, debugLog, summarizeState, summarizeValue } from './debug';
import {
  createNPC,
  create任务,
  create商品条目,
  create世界,
  create主角,
  create势力,
  create城池,
  create军队,
  create政策,
  type NPC,
  type 商品条目,
  type 状态总表,
  type 任务,
  type 势力,
  type 城池,
  type 军队,
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

function 获取目标势力(state: 状态总表, 势力名称: string): 势力 {
  return 断言存在(state.势力[势力名称], `势力不存在: ${势力名称}`);
}

function 断言未改名(定位名称: string, 数据名称: string | undefined, 类型: string): void {
  if (数据名称 !== undefined && 数据名称 !== 定位名称) {
    throw new Error(`${类型} 不允许改名: ${定位名称} -> ${数据名称}`);
  }
}

function 应用势力更新(state: 状态总表, command: Extract<状态命令, { type: 'UpdateFaction' }>): void {
  const current = state.势力[command.名称];
  if (!current && command.createIfMissing === false) {
    throw new Error(`势力不存在: ${command.名称}`);
  }
  断言未改名(command.名称, command.changes.名称, '势力');
  state.势力[command.名称] = create势力(合并对象(_.cloneDeep(current ?? create势力({ 名称: command.名称 })), command.changes as Partial<势力>));
}

function 应用城池更新(state: 状态总表, command: Extract<状态命令, { type: 'UpsertCity' }>): void {
  const faction = 获取目标势力(state, command.势力名称);
  const current = faction.城池[command.名称];
  if (!current && command.createIfMissing === false) {
    throw new Error(`城池不存在: ${command.名称}`);
  }
  断言未改名(command.名称, command.data.名称, '城池');
  const next: 城池 = create城池(合并对象(_.cloneDeep(current ?? create城池({ 名称: command.名称 })), command.data));
  faction.城池[command.名称] = next;
}

function 应用城池设施追加(state: 状态总表, command: Extract<状态命令, { type: 'AddCityFacility' }>): void {
  const faction = 获取目标势力(state, command.势力名称);
  const current = 断言存在(faction.城池[command.名称], `城池不存在: ${command.名称}`);
  const set = new Set([...(current.设施 || []), String(command.facility || '')].filter(Boolean));
  faction.城池[command.名称] = create城池({ ...current, 设施: [...set] });
}

function 应用城池设施移除(state: 状态总表, command: Extract<状态命令, { type: 'RemoveCityFacility' }>): void {
  const faction = 获取目标势力(state, command.势力名称);
  const current = 断言存在(faction.城池[command.名称], `城池不存在: ${command.名称}`);
  faction.城池[command.名称] = create城池({
    ...current,
    设施: (current.设施 || []).filter(item => item !== command.facility),
  });
}

function 应用军队更新(state: 状态总表, command: Extract<状态命令, { type: 'UpsertArmy' }>): void {
  const faction = 获取目标势力(state, command.势力名称);
  const current = faction.军队[command.名称];
  if (!current && command.createIfMissing === false) {
    throw new Error(`军队不存在: ${command.名称}`);
  }
  断言未改名(command.名称, command.data.名称, '军队');
  const next: 军队 = create军队(合并对象(_.cloneDeep(current ?? create军队({ 名称: command.名称 })), command.data));
  faction.军队[command.名称] = next;
}

function 应用外交更新(state: 状态总表, command: Extract<状态命令, { type: 'UpdateDiplomacy' }>): void {
  const faction = 获取目标势力(state, command.名称);
  faction.外交 = {
    ...faction.外交,
    ..._.mapValues(command.changes, value => Math.max(0, Math.min(100, 数值(value)))),
  };
}

function 应用政策更新(state: 状态总表, command: Extract<状态命令, { type: 'UpdatePolicy' }>): void {
  const faction = 获取目标势力(state, command.名称);
  faction.政策 = create政策(合并对象(_.cloneDeep(faction.政策), command.changes));
}

function 应用NPC更新(state: 状态总表, command: Extract<状态命令, { type: 'UpsertNpc' }>): void {
  const current = state.NPC[command.名称];
  if (!current && command.createIfMissing === false) {
    throw new Error(`NPC 不存在: ${command.名称}`);
  }
  断言未改名(command.名称, command.data.名称, 'NPC');
  const next = createNPC(合并对象(_.cloneDeep(current ?? createNPC({ 名称: command.名称 })), command.data));
  state.NPC[command.名称] = recomputeNPC(next);
}

function 应用NPC关系更新(state: 状态总表, command: Extract<状态命令, { type: 'UpdateNpcRelation' }>): void {
  const current = 断言存在(state.NPC[command.名称], `NPC 不存在: ${command.名称}`);
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
  state.NPC[command.名称] = recomputeNPC(createNPC(next));
}

function 应用任务更新(state: 状态总表, command: Extract<状态命令, { type: 'UpsertQuest' }>): void {
  const current = state.任务[command.名称];
  if (!current && command.createIfMissing === false) {
    throw new Error(`任务不存在: ${command.名称}`);
  }
  断言未改名(command.名称, command.data.名称, '任务');
  const next = create任务(合并对象(_.cloneDeep(current ?? create任务({ 名称: command.名称 })), command.data));
  state.任务[command.名称] = next;
}

function 应用任务状态(state: 状态总表, command: Extract<状态命令, { type: 'UpdateQuestState' }>): void {
  const current = 断言存在(state.任务[command.名称], `任务不存在: ${command.名称}`);
  const next: 任务 = _.cloneDeep(current);
  next.状态 = command.状态;
  if (command.目标) {
    for (const [targetName, patch] of Object.entries(command.目标)) {
      next.目标[targetName] = {
        ...(next.目标[targetName] ?? { 类型: '主要', 状态: '未完成', 描述: '', 积分: 0, 其他奖励: '' }),
        ...patch,
      };
    }
  }
  state.任务[command.名称] = create任务(next);
}

function 应用商品更新(state: 状态总表, command: Extract<状态命令, { type: 'UpsertShopItem' }>): void {
  const current = state.商城[command.名称];
  if (!current && command.createIfMissing === false) {
    throw new Error(`商品不存在: ${command.名称}`);
  }
  断言未改名(command.名称, command.data.物品?.名称, '商品');
  const next: 商品条目 = create商品条目(合并对象(_.cloneDeep(current ?? create商品条目({ 物品: { 名称: command.名称, 品质: '凡品', 类型: '消耗品', 描述: '' } })), command.data));
  state.商城[command.名称] = next;
}

export function 执行命令(state: 状态总表, commandInput: string | 状态命令 | 状态命令[]): 执行结果 {
  debugInfo('executor', '开始执行命令', {
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
        名称: '名称' in command ? command.名称 : undefined,
        势力名称: '势力名称' in command ? command.势力名称 : undefined,
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
        case 'UpdateFaction':
          应用势力更新(next, command);
          break;
        case 'UpsertCity':
          应用城池更新(next, command);
          break;
        case 'AddCityFacility':
          应用城池设施追加(next, command);
          break;
        case 'RemoveCityFacility':
          应用城池设施移除(next, command);
          break;
        case 'RemoveCity':
          delete 获取目标势力(next, command.势力名称).城池[command.名称];
          break;
        case 'UpsertArmy':
          应用军队更新(next, command);
          break;
        case 'RemoveArmy':
          delete 获取目标势力(next, command.势力名称).军队[command.名称];
          break;
        case 'UpdateDiplomacy':
          应用外交更新(next, command);
          break;
        case 'UpdatePolicy':
          应用政策更新(next, command);
          break;
        case 'UpsertNpc':
          应用NPC更新(next, command);
          break;
        case 'UpdateNpcRelation':
          应用NPC关系更新(next, command);
          break;
        case 'RemoveNpc':
          delete next.NPC[command.名称];
          break;
        case 'UpsertQuest':
          应用任务更新(next, command);
          break;
        case 'UpdateQuestState':
          应用任务状态(next, command);
          break;
        case 'RemoveQuest':
          delete next.任务[command.名称];
          break;
        case 'UpsertShopItem':
          应用商品更新(next, command);
          break;
        case 'RemoveShopItem':
          delete next.商城[command.名称];
          break;
      }
      debugLog('executor', '单条命令执行后状态摘要', {
        index,
        type: command.type,
        state: summarizeState(next),
      });
    }

    const finalState = recompute全局(next);
    debugInfo('executor', '命令执行完成', {
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
  debugInfo('executor', '开始执行并保存命令', { messageId });
  const result = 执行命令(state, commandInput);
  const savedState = await 保存状态(result.state, messageId);
  debugInfo('executor', '执行并保存命令完成', {
    messageId,
    applied: result.applied.length,
    state: summarizeState(savedState),
  });
  return {
    ...result,
    state: savedState,
  };
}
