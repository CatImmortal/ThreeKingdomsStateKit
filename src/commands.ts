import type { NPC, 世界, 主角, 商品条目, 状态总表, 任务, 任务目标 } from './state';
import { 枚举, type 任务状态 } from './rules';

export type 基础字段<T> = {
  [K in keyof T as K extends `_${string}` ? never : K]: T[K];
};

export type 世界更新 = Partial<基础字段<世界>>;
export type 主角更新 = Partial<基础字段<主角>>;
export type NPC更新 = Partial<基础字段<NPC>>;
export type 任务更新 = Partial<基础字段<任务>>;
export type 商品更新 = Partial<基础字段<商品条目>>;
export type 任务目标更新 = Partial<基础字段<任务目标>>;

export type 世界事件输入 = {
  事件名: string;
  简述: string;
  日期: string;
};

export type 状态命令 =
  | {
      type: 'UpdateWorld';
      changes: 世界更新;
    }
  | {
      type: 'AppendRecentEvent';
      event: 世界事件输入;
    }
  | {
      type: 'UpdatePlayerBase';
      changes: 主角更新;
    }
  | {
      type: 'AdjustPlayerResource';
      mode?: 'delta' | 'set';
      changes: Partial<
        Pick<主角, '当前生命值' | '当前体力值' | '声望' | '金钱' | '积分' | '后宫和谐度'>
      >;
    }
  | {
      type: 'UpsertNpc';
      id: string;
      data: NPC更新;
      createIfMissing?: boolean;
    }
  | {
      type: 'UpdateNpcRelation';
      id: string;
      mode?: 'delta' | 'set';
      好感?: number;
      羁绊?: Record<string, string>;
    }
  | {
      type: 'RemoveNpc';
      id: string;
    }
  | {
      type: 'UpsertQuest';
      id: string;
      data: 任务更新;
      createIfMissing?: boolean;
    }
  | {
      type: 'UpdateQuestState';
      id: string;
      状态: 任务状态;
      目标?: Record<string, 任务目标更新>;
    }
  | {
      type: 'RemoveQuest';
      id: string;
    }
  | {
      type: 'UpsertShopItem';
      id: string;
      data: 商品更新;
      createIfMissing?: boolean;
    }
  | {
      type: 'RemoveShopItem';
      id: string;
    };

export type 命令输入 = string | 状态命令 | 状态命令[];

type PlainObject = Record<string, unknown>;

const 命令字段白名单 = {
  UpdateWorld: ['type', 'changes'],
  AppendRecentEvent: ['type', 'event'],
  UpdatePlayerBase: ['type', 'changes'],
  AdjustPlayerResource: ['type', 'mode', 'changes'],
  UpsertNpc: ['type', 'id', 'data', 'createIfMissing'],
  UpdateNpcRelation: ['type', 'id', 'mode', '好感', '羁绊'],
  RemoveNpc: ['type', 'id'],
  UpsertQuest: ['type', 'id', 'data', 'createIfMissing'],
  UpdateQuestState: ['type', 'id', '状态', '目标'],
  RemoveQuest: ['type', 'id'],
  UpsertShopItem: ['type', 'id', 'data', 'createIfMissing'],
  RemoveShopItem: ['type', 'id'],
} as const;

const 世界字段 = ['当前时间', '当前地点', '当前剧本', '天气', '近期事件'] as const;
const 主角资源字段 = ['当前生命值', '当前体力值', '声望', '金钱', '积分', '后宫和谐度'] as const;
const 六维字段 = ['武力', '智力', '统率', '政治', '魅力', '体质'] as const;
const 装备条目字段 = ['名称', '品质', '类型', '先攻加值', '攻击加值', '防御DC加值', '伤害减免', '效果'] as const;
const 装备栏字段 = ['主武器', '副武器', '护甲', '坐骑', '饰品1', '饰品2', '饰品3'] as const;
const 武技条目字段 = ['等级', '类型', '效果', '熟练度', '体力消耗'] as const;
const 专长条目字段 = ['等级', '效果'] as const;
const 主角字段 = ['六维', '当前生命值', '当前体力值', '装备', '武技', '专长', '状态', '物品栏', '声望', '金钱', '积分', '官职', '爵位', '后宫和谐度'] as const;
const 物品栏字段 = ['品质', '描述', '数量'] as const;
const NPC字段 = ['名称', '品质', '阵营', '定位', '好感', '简述', '羁绊', '角色数据', '武将信息', '美人属性'] as const;
const 武将信息字段 = ['野心值', '性格', '官职', '当前状态', '状态描述', '驻扎地', '特技'] as const;
const 美人属性字段 = ['依赖度', '敏感度', '贞洁度', '位份', '性格', '当前状态'] as const;
const 任务字段 = ['类型', '状态', '时限', '目标'] as const;
const 任务目标字段 = ['类型', '状态', '积分', '其他奖励'] as const;
const 商品字段 = ['名称', '分类', '价格', '描述'] as const;

function isPlainObject(value: unknown): value is PlainObject {
  return _.isPlainObject(value);
}

function 断言(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function 断言对象(value: unknown, path: string): asserts value is PlainObject {
  断言(isPlainObject(value), `${path} 必须是对象`);
}

function 断言非空对象(value: unknown, path: string): asserts value is PlainObject {
  断言对象(value, path);
  断言(Object.keys(value).length > 0, `${path} 至少包含一个字段`);
}

function 断言字符串(value: unknown, path: string) {
  断言(typeof value === 'string', `${path} 必须是字符串`);
}

function 断言数字(value: unknown, path: string) {
  断言(typeof value === 'number' && Number.isFinite(value), `${path} 必须是有限数字`);
}

function 断言布尔(value: unknown, path: string) {
  断言(typeof value === 'boolean', `${path} 必须是布尔值`);
}

function 断言枚举值(value: unknown, enumValues: readonly string[], path: string) {
  断言(typeof value === 'string' && enumValues.includes(value), `${path} 必须是以下值之一: ${enumValues.join(' / ')}`);
}

function 断言字段白名单(target: PlainObject, allowedKeys: readonly string[], path: string): void {
  for (const key of Object.keys(target)) {
    断言(allowedKeys.includes(key), `${path}.${key} 不是允许的字段`);
  }
}

export function 断言无下划线字段(value: unknown, path = 'root'): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => 断言无下划线字段(item, `${path}[${index}]`));
    return;
  }
  if (!isPlainObject(value)) {
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    if (key.startsWith('_')) {
      throw new Error(`命令包含只读字段: ${path}.${key}`);
    }
    断言无下划线字段(child, `${path}.${key}`);
  }
}

function 校验字符串映射(value: unknown, path: string): void {
  断言对象(value, path);
  for (const [key, item] of Object.entries(value)) {
    断言字符串(key, `${path} 键名`);
    断言字符串(item, `${path}.${key}`);
  }
}

function 校验世界事件输入(value: unknown, path: string): void {
  断言对象(value, path);
  断言字段白名单(value, ['事件名', '简述', '日期'], path);
  断言字符串(value.事件名, `${path}.事件名`);
  断言字符串(value.简述, `${path}.简述`);
  断言字符串(value.日期, `${path}.日期`);
}

function 校验六维(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 六维字段, path);
  for (const [key, item] of Object.entries(value)) {
    断言数字(item, `${path}.${key}`);
  }
}

function 校验装备条目(value: unknown, path: string): void {
  断言对象(value, path);
  断言字段白名单(value, 装备条目字段, path);
  if (value.名称 !== undefined) 断言字符串(value.名称, `${path}.名称`);
  if (value.品质 !== undefined) 断言枚举值(value.品质, 枚举.装备品质, `${path}.品质`);
  if (value.类型 !== undefined) 断言字符串(value.类型, `${path}.类型`);
  for (const key of ['先攻加值', '攻击加值', '防御DC加值', '伤害减免'] as const) {
    if (value[key] !== undefined) 断言数字(value[key], `${path}.${key}`);
  }
  if (value.效果 !== undefined) 断言字符串(value.效果, `${path}.效果`);
}

function 校验装备栏位(value: unknown, path: string): void {
  if (value === '无') {
    return;
  }
  校验装备条目(value, path);
}

function 校验装备栏(value: unknown, path: string): void {
  断言对象(value, path);
  断言字段白名单(value, 装备栏字段, path);
  for (const [key, item] of Object.entries(value)) {
    校验装备栏位(item, `${path}.${key}`);
  }
}

function 校验武技条目(value: unknown, path: string): void {
  断言对象(value, path);
  断言字段白名单(value, 武技条目字段, path);
  if (value.等级 !== undefined) 断言枚举值(value.等级, 枚举.武技等级, `${path}.等级`);
  if (value.类型 !== undefined) 断言枚举值(value.类型, 枚举.武技类型, `${path}.类型`);
  if (value.效果 !== undefined) 断言字符串(value.效果, `${path}.效果`);
  if (value.熟练度 !== undefined) 断言数字(value.熟练度, `${path}.熟练度`);
  if (value.体力消耗 !== undefined) 断言数字(value.体力消耗, `${path}.体力消耗`);
}

function 校验专长条目(value: unknown, path: string): void {
  断言对象(value, path);
  断言字段白名单(value, 专长条目字段, path);
  if (value.等级 !== undefined) 断言字符串(value.等级, `${path}.等级`);
  if (value.效果 !== undefined) 断言字符串(value.效果, `${path}.效果`);
}

function 校验状态记录(value: unknown, path: string): void {
  断言对象(value, path);
  for (const [key, item] of Object.entries(value)) {
    断言字符串(key, `${path} 键名`);
    断言对象(item, `${path}.${key}`);
    断言字段白名单(item, ['效果', '剩余'], `${path}.${key}`);
    if (item.效果 !== undefined) 断言字符串(item.效果, `${path}.${key}.效果`);
    if (item.剩余 !== undefined) 断言字符串(item.剩余, `${path}.${key}.剩余`);
  }
}

function 校验武技映射(value: unknown, path: string): void {
  断言对象(value, path);
  for (const [key, item] of Object.entries(value)) {
    断言字符串(key, `${path} 键名`);
    校验武技条目(item, `${path}.${key}`);
  }
}

function 校验专长映射(value: unknown, path: string): void {
  断言对象(value, path);
  for (const [key, item] of Object.entries(value)) {
    断言字符串(key, `${path} 键名`);
    校验专长条目(item, `${path}.${key}`);
  }
}

function 校验角色战斗数据(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, ['六维', '当前生命值', '当前体力值', '装备', '武技', '专长', '状态'], path);
  if (value.六维 !== undefined) 校验六维(value.六维, `${path}.六维`);
  if (value.当前生命值 !== undefined) 断言数字(value.当前生命值, `${path}.当前生命值`);
  if (value.当前体力值 !== undefined) 断言数字(value.当前体力值, `${path}.当前体力值`);
  if (value.装备 !== undefined) 校验装备栏(value.装备, `${path}.装备`);
  if (value.武技 !== undefined) 校验武技映射(value.武技, `${path}.武技`);
  if (value.专长 !== undefined) 校验专长映射(value.专长, `${path}.专长`);
  if (value.状态 !== undefined) 校验状态记录(value.状态, `${path}.状态`);
}

function 校验物品栏(value: unknown, path: string): void {
  断言对象(value, path);
  for (const [key, item] of Object.entries(value)) {
    断言字符串(key, `${path} 键名`);
    断言对象(item, `${path}.${key}`);
    断言字段白名单(item, 物品栏字段, `${path}.${key}`);
    if (item.品质 !== undefined) {
      断言(typeof item.品质 === 'string' && [...枚举.装备品质, '无'].includes(item.品质), `${path}.${key}.品质 必须是合法装备品质或 无`);
    }
    if (item.描述 !== undefined) 断言字符串(item.描述, `${path}.${key}.描述`);
    if (item.数量 !== undefined) 断言数字(item.数量, `${path}.${key}.数量`);
  }
}

function 校验武将信息(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 武将信息字段, path);
  if (value.野心值 !== undefined) 断言数字(value.野心值, `${path}.野心值`);
  if (value.性格 !== undefined) 断言枚举值(value.性格, 枚举.武将性格, `${path}.性格`);
  if (value.官职 !== undefined) 断言字符串(value.官职, `${path}.官职`);
  if (value.当前状态 !== undefined) 断言枚举值(value.当前状态, 枚举.武将状态, `${path}.当前状态`);
  if (value.状态描述 !== undefined) 断言字符串(value.状态描述, `${path}.状态描述`);
  if (value.驻扎地 !== undefined) 断言字符串(value.驻扎地, `${path}.驻扎地`);
  if (value.特技 !== undefined) 校验字符串映射(value.特技, `${path}.特技`);
}

function 校验美人属性(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 美人属性字段, path);
  for (const key of ['依赖度', '敏感度', '贞洁度'] as const) {
    if (value[key] !== undefined) 断言数字(value[key], `${path}.${key}`);
  }
  if (value.位份 !== undefined) 断言枚举值(value.位份, 枚举.美人位份, `${path}.位份`);
  if (value.性格 !== undefined) 断言枚举值(value.性格, 枚举.美人性格, `${path}.性格`);
  if (value.当前状态 !== undefined) 断言枚举值(value.当前状态, 枚举.美人状态, `${path}.当前状态`);
}

function 校验任务目标更新(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 任务目标字段, path);
  if (value.类型 !== undefined) 断言枚举值(value.类型, 枚举.任务目标类型, `${path}.类型`);
  if (value.状态 !== undefined) 断言枚举值(value.状态, 枚举.任务目标状态, `${path}.状态`);
  if (value.积分 !== undefined) 断言数字(value.积分, `${path}.积分`);
  if (value.其他奖励 !== undefined) 断言字符串(value.其他奖励, `${path}.其他奖励`);
}

function 校验任务目标映射(value: unknown, path: string): void {
  断言对象(value, path);
  for (const [key, item] of Object.entries(value)) {
    断言字符串(key, `${path} 键名`);
    校验任务目标更新(item, `${path}.${key}`);
  }
}

function 校验商品条目(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 商品字段, path);
  if (value.名称 !== undefined) 断言字符串(value.名称, `${path}.名称`);
  if (value.分类 !== undefined) 断言字符串(value.分类, `${path}.分类`);
  if (value.价格 !== undefined) 断言数字(value.价格, `${path}.价格`);
  if (value.描述 !== undefined) 断言字符串(value.描述, `${path}.描述`);
}

function 校验世界更新(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 世界字段, path);
  if (value.当前时间 !== undefined) 断言字符串(value.当前时间, `${path}.当前时间`);
  if (value.当前地点 !== undefined) 断言字符串(value.当前地点, `${path}.当前地点`);
  if (value.当前剧本 !== undefined) 断言枚举值(value.当前剧本, 枚举.剧本, `${path}.当前剧本`);
  if (value.天气 !== undefined) 断言字符串(value.天气, `${path}.天气`);
  if (value.近期事件 !== undefined) {
    断言(Array.isArray(value.近期事件), `${path}.近期事件 必须是数组`);
    value.近期事件.forEach((item, index) => 校验世界事件输入(item, `${path}.近期事件[${index}]`));
  }
}

function 校验主角更新(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 主角字段, path);
  if (value.六维 !== undefined) 校验六维(value.六维, `${path}.六维`);
  if (value.当前生命值 !== undefined) 断言数字(value.当前生命值, `${path}.当前生命值`);
  if (value.当前体力值 !== undefined) 断言数字(value.当前体力值, `${path}.当前体力值`);
  if (value.装备 !== undefined) 校验装备栏(value.装备, `${path}.装备`);
  if (value.武技 !== undefined) 校验武技映射(value.武技, `${path}.武技`);
  if (value.专长 !== undefined) 校验专长映射(value.专长, `${path}.专长`);
  if (value.状态 !== undefined) 校验状态记录(value.状态, `${path}.状态`);
  if (value.物品栏 !== undefined) 校验物品栏(value.物品栏, `${path}.物品栏`);
  if (value.声望 !== undefined) 断言数字(value.声望, `${path}.声望`);
  if (value.金钱 !== undefined) 断言数字(value.金钱, `${path}.金钱`);
  if (value.积分 !== undefined) 断言数字(value.积分, `${path}.积分`);
  if (value.官职 !== undefined) 断言字符串(value.官职, `${path}.官职`);
  if (value.爵位 !== undefined) 断言字符串(value.爵位, `${path}.爵位`);
  if (value.后宫和谐度 !== undefined) 断言数字(value.后宫和谐度, `${path}.后宫和谐度`);
}

function 校验NPC更新(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, NPC字段, path);
  if (value.名称 !== undefined) 断言字符串(value.名称, `${path}.名称`);
  if (value.品质 !== undefined) 断言枚举值(value.品质, 枚举.品质, `${path}.品质`);
  if (value.阵营 !== undefined) 断言字符串(value.阵营, `${path}.阵营`);
  if (value.定位 !== undefined) 断言字符串(value.定位, `${path}.定位`);
  if (value.好感 !== undefined) 断言数字(value.好感, `${path}.好感`);
  if (value.简述 !== undefined) 断言字符串(value.简述, `${path}.简述`);
  if (value.羁绊 !== undefined) 校验字符串映射(value.羁绊, `${path}.羁绊`);
  if (value.角色数据 !== undefined) 校验角色战斗数据(value.角色数据, `${path}.角色数据`);
  if (value.武将信息 !== undefined) 校验武将信息(value.武将信息, `${path}.武将信息`);
  if (value.美人属性 !== undefined) 校验美人属性(value.美人属性, `${path}.美人属性`);
}

function 校验任务更新(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 任务字段, path);
  if (value.类型 !== undefined) 断言枚举值(value.类型, 枚举.任务类型, `${path}.类型`);
  if (value.状态 !== undefined) 断言枚举值(value.状态, 枚举.任务状态, `${path}.状态`);
  if (value.时限 !== undefined) 断言字符串(value.时限, `${path}.时限`);
  if (value.目标 !== undefined) 校验任务目标映射(value.目标, `${path}.目标`);
}

function 校验资源变化(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 主角资源字段, path);
  for (const [key, item] of Object.entries(value)) {
    断言数字(item, `${path}.${key}`);
  }
}

export function 解析命令输入(input: 命令输入): 状态命令[] {
  if (typeof input === 'string') {
    const parsed = JSON.parse(input) as unknown;
    return 解析命令输入(parsed as 状态命令[]);
  }
  const list: 状态命令[] = Array.isArray(input) ? input : [input];
  list.forEach((command, index) => 校验命令(command, index));
  return list;
}

export function 校验命令(command: 状态命令, index = 0): void {
  const path = `commands[${index}]`;
  断言对象(command, path);
  断言(typeof command.type === 'string', `${path}.type 必须是字符串`);
  断言(command.type in 命令字段白名单, `${path}.type 不是有效命令类型: ${String(command.type)}`);
  const allowedKeys = 命令字段白名单[command.type as keyof typeof 命令字段白名单];
  断言字段白名单(command, allowedKeys, path);
  断言无下划线字段(command, path);

  switch (command.type) {
    case 'UpdateWorld':
      校验世界更新(command.changes, `${path}.changes`);
      return;
    case 'AppendRecentEvent':
      校验世界事件输入(command.event, `${path}.event`);
      return;
    case 'UpdatePlayerBase':
      校验主角更新(command.changes, `${path}.changes`);
      return;
    case 'AdjustPlayerResource':
      if (command.mode !== undefined) {
        断言枚举值(command.mode, ['delta', 'set'], `${path}.mode`);
      }
      校验资源变化(command.changes, `${path}.changes`);
      return;
    case 'UpsertNpc':
      断言字符串(command.id, `${path}.id`);
      if (command.createIfMissing !== undefined) {
        断言布尔(command.createIfMissing, `${path}.createIfMissing`);
      }
      校验NPC更新(command.data, `${path}.data`);
      return;
    case 'UpdateNpcRelation':
      断言字符串(command.id, `${path}.id`);
      if (command.mode !== undefined) {
        断言枚举值(command.mode, ['delta', 'set'], `${path}.mode`);
      }
      断言(command.好感 !== undefined || command.羁绊 !== undefined, `${path} 至少要提供 好感 或 羁绊`);
      if (command.好感 !== undefined) 断言数字(command.好感, `${path}.好感`);
      if (command.羁绊 !== undefined) 校验字符串映射(command.羁绊, `${path}.羁绊`);
      return;
    case 'RemoveNpc':
      断言字符串(command.id, `${path}.id`);
      return;
    case 'UpsertQuest':
      断言字符串(command.id, `${path}.id`);
      if (command.createIfMissing !== undefined) {
        断言布尔(command.createIfMissing, `${path}.createIfMissing`);
      }
      校验任务更新(command.data, `${path}.data`);
      return;
    case 'UpdateQuestState':
      断言字符串(command.id, `${path}.id`);
      断言枚举值(command.状态, 枚举.任务状态, `${path}.状态`);
      if (command.目标 !== undefined) {
        校验任务目标映射(command.目标, `${path}.目标`);
      }
      return;
    case 'RemoveQuest':
      断言字符串(command.id, `${path}.id`);
      return;
    case 'UpsertShopItem':
      断言字符串(command.id, `${path}.id`);
      if (command.createIfMissing !== undefined) {
        断言布尔(command.createIfMissing, `${path}.createIfMissing`);
      }
      校验商品条目(command.data, `${path}.data`);
      return;
    case 'RemoveShopItem':
      断言字符串(command.id, `${path}.id`);
      return;
  }
}

export function 创建命令执行快照(state: 状态总表): 状态总表 {
  return _.cloneDeep(state);
}
