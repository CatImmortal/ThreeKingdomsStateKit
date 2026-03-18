import { type NPC, type 军队战, type 状态总表 } from './state';

function 隐藏伤势减值<T extends { _伤势减值?: number }>(data: T): T {
  const next = _.cloneDeep(data);
  delete next._伤势减值;
  return next;
}

function 构建注入主角(state: 状态总表): 状态总表['主角'] {
  return {
    ..._.cloneDeep(state.主角),
    战斗数据: 隐藏伤势减值(state.主角.战斗数据),
  };
}

function 构建注入NPC集合(state: 状态总表, limit = MAX_CONTEXT_NPCS): Record<string, NPC> {
  return Object.fromEntries(
    Object.entries(选择当前地点相关NPC(state, limit)).map(([名称, npc]) => [
      名称,
      {
        ..._.cloneDeep(npc),
        ...(npc.战斗数据 ? { 战斗数据: 隐藏伤势减值(npc.战斗数据) } : {}),
      },
    ]),
  );
}

export const MAX_CONTEXT_NPCS = 8;
export const MAX_CONTEXT_QUESTS = 8;
export const MAX_CONTEXT_SHOP_ITEMS = 12;

export type 注入视图 = {
  世界: 状态总表['世界'];
  主角: 状态总表['主角'];
  势力: 状态总表['势力'];
  当前地点相关NPC: Record<string, NPC>;
  进行中任务: 状态总表['任务'];
  商城: 状态总表['商城'];
  军队战?: Record<string, 军队战>;
};

function 是否当前地点相关(npc: NPC, 当前地点: string): boolean {
  if (!当前地点) {
    return true;
  }
  if (npc.所在地 === 当前地点) {
    return true;
  }
  return String(npc.定位 || '').includes(当前地点) || String(npc.简述 || '').includes(当前地点);
}

export function 选择当前地点相关NPC(state: 状态总表, limit = MAX_CONTEXT_NPCS): Record<string, NPC> {
  const 当前地点 = state.世界.当前地点;
  const entries = Object.entries(state.NPC || {});
  const matched = entries.filter(([, npc]) => 是否当前地点相关(npc, 当前地点));
  const selected = (matched.length > 0 ? matched : entries).slice(0, limit);
  return Object.fromEntries(selected);
}

export function 选择进行中任务(state: 状态总表, limit = MAX_CONTEXT_QUESTS): 状态总表['任务'] {
  const selected = Object.entries(state.任务 || {}).filter(([, task]) => ['进行中', '可接取', '可提交'].includes(task.状态));
  return Object.fromEntries(selected.slice(0, limit));
}

export function 选择商城条目(state: 状态总表, limit = MAX_CONTEXT_SHOP_ITEMS): 状态总表['商城'] {
  return Object.fromEntries(Object.entries(state.商城 || {}).slice(0, limit));
}

export function 选择活跃军队战(state: 状态总表): Record<string, 军队战> | undefined {
  const active = state.军队战 || {};
  if (Object.keys(active).length === 0) return undefined;
  return active;
}

export function 构建注入视图(state: 状态总表): 注入视图 {
  const activeBattles = 选择活跃军队战(state);
  return {
    世界: _.cloneDeep(state.世界),
    主角: 构建注入主角(state),
    势力: _.cloneDeep(state.势力),
    当前地点相关NPC: 构建注入NPC集合(state),
    进行中任务: _.cloneDeep(选择进行中任务(state)),
    商城: _.cloneDeep(选择商城条目(state)),
    ...(activeBattles ? { 军队战: _.cloneDeep(activeBattles) } : {}),
  };
}

export function 构建注入文本(state: 状态总表, space = 2): string {
  return [
    '[三国霸主系统状态]',
    '以下状态为只读上下文；下划线字段代表只读派生字段，AI 不可直接修改。',
    JSON.stringify(构建注入视图(state), null, space),
  ].join('\n');
}

export function 构建宏注入文本(state: 状态总表, space = 2): string {
  return 构建注入文本(state, space);
}
