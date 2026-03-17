import type { NPC, 世界, 主角, 商品条目, 状态总表, 任务, 任务目标, 势力, 城池, 军队, 政策 } from './state';
import { 枚举, type 任务状态 } from './rules';
import { debugError, debugLog, summarizeValue } from './debug';

export type 基础字段<T> = {
  [K in keyof T as K extends `_${string}` ? never : K]: T[K];
};

export type 世界更新 = Partial<基础字段<世界>>;
export type 主角更新 = Partial<基础字段<主角>>;
export type NPC更新 = Partial<基础字段<NPC>>;
export type 势力更新 = Partial<基础字段<势力>>;
export type 城池更新 = Partial<基础字段<城池>>;
export type 军队更新 = Partial<基础字段<军队>>;
export type 政策更新 = Partial<基础字段<政策>>;
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
      changes: Partial<{
        当前生命值: number;
        当前体力值: number;
        声望: number;
        金钱: number;
        积分: number;
        后宫和谐度: number;
      }>;
    }
  | {
      type: 'UpdateFaction';
      名称: string;
      changes: 势力更新;
      createIfMissing?: boolean;
    }
  | {
      type: 'UpsertCity';
      势力名称: string;
      名称: string;
      data: 城池更新;
      createIfMissing?: boolean;
    }
  | {
      type: 'AddCityFacility';
      势力名称: string;
      名称: string;
      facility: string;
    }
  | {
      type: 'RemoveCityFacility';
      势力名称: string;
      名称: string;
      facility: string;
    }
  | {
      type: 'RemoveCity';
      势力名称: string;
      名称: string;
    }
  | {
      type: 'UpsertArmy';
      势力名称: string;
      名称: string;
      data: 军队更新;
      createIfMissing?: boolean;
    }
  | {
      type: 'RemoveArmy';
      势力名称: string;
      名称: string;
    }
  | {
      type: 'UpdateDiplomacy';
      名称: string;
      changes: Record<string, number>;
    }
  | {
      type: 'UpdatePolicy';
      名称: string;
      changes: 政策更新;
    }
  | {
      type: 'UpsertNpc';
      名称: string;
      data: NPC更新;
      createIfMissing?: boolean;
    }
  | {
      type: 'UpdateNpcRelation';
      名称: string;
      mode?: 'delta' | 'set';
      好感?: number;
      羁绊?: Record<string, string>;
    }
  | {
      type: 'RemoveNpc';
      名称: string;
    }
  | {
      type: 'UpsertQuest';
      名称: string;
      data: 任务更新;
      createIfMissing?: boolean;
    }
  | {
      type: 'UpdateQuestState';
      名称: string;
      状态: 任务状态;
      目标?: Record<string, 任务目标更新>;
    }
  | {
      type: 'RemoveQuest';
      名称: string;
    }
  | {
      type: 'UpsertShopItem';
      名称: string;
      data: 商品更新;
      createIfMissing?: boolean;
    }
  | {
      type: 'RemoveShopItem';
      名称: string;
    };

export type 命令输入 = string | 状态命令 | 状态命令[];

type PlainObject = Record<string, unknown>;

const 命令字段白名单 = {
  UpdateWorld: ['type', 'changes'],
  AppendRecentEvent: ['type', 'event'],
  UpdatePlayerBase: ['type', 'changes'],
  AdjustPlayerResource: ['type', 'mode', 'changes'],
  UpdateFaction: ['type', '名称', 'changes', 'createIfMissing'],
  UpsertCity: ['type', '势力名称', '名称', 'data', 'createIfMissing'],
  AddCityFacility: ['type', '势力名称', '名称', 'facility'],
  RemoveCityFacility: ['type', '势力名称', '名称', 'facility'],
  RemoveCity: ['type', '势力名称', '名称'],
  UpsertArmy: ['type', '势力名称', '名称', 'data', 'createIfMissing'],
  RemoveArmy: ['type', '势力名称', '名称'],
  UpdateDiplomacy: ['type', '名称', 'changes'],
  UpdatePolicy: ['type', '名称', 'changes'],
  UpsertNpc: ['type', '名称', 'data', 'createIfMissing'],
  UpdateNpcRelation: ['type', '名称', 'mode', '好感', '羁绊'],
  RemoveNpc: ['type', '名称'],
  UpsertQuest: ['type', '名称', 'data', 'createIfMissing'],
  UpdateQuestState: ['type', '名称', '状态', '目标'],
  RemoveQuest: ['type', '名称'],
  UpsertShopItem: ['type', '名称', 'data', 'createIfMissing'],
  RemoveShopItem: ['type', '名称'],
} as const;

const 世界字段 = ['当前时间', '当前地点', '当前剧本', '天气', '近期事件'] as const;
const 主角资源字段 = ['当前生命值', '当前体力值', '声望', '金钱', '积分', '后宫和谐度'] as const;
const 主角顶层资源字段 = ['声望', '金钱', '积分', '后宫和谐度'] as const;
const 六维字段 = ['武力', '智力', '统率', '政治', '魅力', '体质'] as const;
const 装备条目字段 = ['伤害骰', '先攻加值', '攻击加值', '防御DC加值', '伤害减免', '其他效果'] as const;
const 物品条目字段 = ['名称', '品质', '类型', '描述', '装备条目'] as const;
const 装备栏字段 = ['主武器', '副武器', '护甲', '坐骑', '饰品1', '饰品2', '饰品3'] as const;
const 武技条目字段 = ['名称', '等级', '类型', '效果', '熟练度', '体力消耗'] as const;
const 专长条目字段 = ['名称', '等级', '效果'] as const;
const 角色战斗字段 = ['当前生命值', '当前体力值', '生命上限加成值', '体力上限加成值', '装备', '武技', '专长', '状态'] as const;
const 主角字段 = ['六维', '战斗数据', '物品栏', '所属势力', '兵种适性', '声望', '金钱', '积分', '官职', '爵位', '后宫和谐度'] as const;
const 物品栏字段 = ['物品', '数量'] as const;
const 势力字段 = ['名称', '主公', '规模', '正统性', '情报网', '金钱', '粮草', '城池', '军队', '外交', '政策'] as const;
const 城池字段 = ['名称', '等级', '城防', '人口', '农业', '商业', '民心', '治安', '繁荣度', '太守', '设施'] as const;
const 军队字段 = ['名称', '兵种', '等级', '兵力', '士气', '疲惫', '装备等级', '统属将领', '驻扎地', '训练进度', '阵型'] as const;
const 政策字段 = ['当前研究', '研究进度', '富国', '强兵', '霸道', '王道'] as const;
const NPC字段 = ['名称', '品质', '阵营', '定位', '所在地', '好感', '简述', '羁绊', '六维', '战斗数据', '武将信息', '美人属性'] as const;
const 武将信息字段 = ['野心值', '性格', '官职', '当前状态', '状态描述', '势力', '忠诚', '是否已招募', '兵种适性', '特技'] as const;
const 兵种适性字段 = ['刀盾兵', '枪矛兵', '弓弩兵', '骑兵', '水军'] as const;
const 美人属性字段 = ['依赖度', '敏感度', '贞洁度', '位份', '性格', '当前状态'] as const;
const 任务字段 = ['名称', '类型', '状态', '时限', '目标'] as const;
const 任务目标字段 = ['类型', '状态', '描述', '积分', '其他奖励'] as const;
const 商品字段 = ['物品', '分类', '价格'] as const;

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

function 校验数字映射(value: unknown, path: string): void {
  断言对象(value, path);
  for (const [key, item] of Object.entries(value)) {
    断言字符串(key, `${path} 键名`);
    断言数字(item, `${path}.${key}`);
  }
}

function 校验名称一致性(定位名称: string, data: unknown, path: string): void {
  断言对象(data, path);
  断言字符串(定位名称, `${path} 对应名称`);
  if (data.名称 !== undefined) {
    断言(data.名称 === 定位名称, `${path}.名称 不允许改名，必须与定位名称一致`);
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
  if (value.伤害骰 !== undefined) 断言字符串(value.伤害骰, `${path}.伤害骰`);
  for (const key of ['先攻加值', '攻击加值', '防御DC加值', '伤害减免'] as const) {
    if (value[key] !== undefined) 断言数字(value[key], `${path}.${key}`);
  }
  if (value.其他效果 !== undefined) 断言字符串(value.其他效果, `${path}.其他效果`);
}

function 校验物品条目(value: unknown, path: string): void {
  断言对象(value, path);
  断言字段白名单(value, 物品条目字段, path);
  if (value.名称 !== undefined) 断言字符串(value.名称, `${path}.名称`);
  if (value.品质 !== undefined) 断言枚举值(value.品质, 枚举.物品品质, `${path}.品质`);
  if (value.类型 !== undefined) 断言枚举值(value.类型, 枚举.物品类型, `${path}.类型`);
  if (value.描述 !== undefined) 断言字符串(value.描述, `${path}.描述`);
  if (value.装备条目 !== undefined && value.装备条目 !== null) 校验装备条目(value.装备条目, `${path}.装备条目`);
}

function 校验装备栏位(value: unknown, path: string): void {
  if (value === '无') {
    return;
  }
  校验物品条目(value, path);
  const item = value as PlainObject;
  断言(item.装备条目 && isPlainObject(item.装备条目), `${path}.装备条目 必须存在且为对象`);
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
  if (value.名称 !== undefined) 断言字符串(value.名称, `${path}.名称`);
  if (value.等级 !== undefined) 断言枚举值(value.等级, 枚举.武技等级, `${path}.等级`);
  if (value.类型 !== undefined) 断言枚举值(value.类型, 枚举.武技类型, `${path}.类型`);
  if (value.效果 !== undefined) 断言字符串(value.效果, `${path}.效果`);
  if (value.熟练度 !== undefined) 断言数字(value.熟练度, `${path}.熟练度`);
  if (value.体力消耗 !== undefined) 断言数字(value.体力消耗, `${path}.体力消耗`);
}

function 校验专长条目(value: unknown, path: string): void {
  断言对象(value, path);
  断言字段白名单(value, 专长条目字段, path);
  if (value.名称 !== undefined) 断言字符串(value.名称, `${path}.名称`);
  if (value.等级 !== undefined) 断言枚举值(value.等级, 枚举.属性等级, `${path}.等级`);
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

function 校验战斗数据(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 角色战斗字段, path);
  if (value.当前生命值 !== undefined) 断言数字(value.当前生命值, `${path}.当前生命值`);
  if (value.当前体力值 !== undefined) 断言数字(value.当前体力值, `${path}.当前体力值`);
  if (value.生命上限加成值 !== undefined) 断言数字(value.生命上限加成值, `${path}.生命上限加成值`);
  if (value.体力上限加成值 !== undefined) 断言数字(value.体力上限加成值, `${path}.体力上限加成值`);
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
    if (item.物品 !== undefined) 校验物品条目(item.物品, `${path}.${key}.物品`);
    if (item.数量 !== undefined) 断言数字(item.数量, `${path}.${key}.数量`);
  }
}

function 校验兵种适性表(value: unknown, path: string): void {
  断言对象(value, path);
  断言字段白名单(value, 兵种适性字段, path);
  for (const [key, item] of Object.entries(value)) {
    断言枚举值(key, 枚举.基础兵种, `${path} 键名`);
    断言数字(item, `${path}.${key}`);
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
  if (value.势力 !== undefined) 断言字符串(value.势力, `${path}.势力`);
  if (value.忠诚 !== undefined) 断言数字(value.忠诚, `${path}.忠诚`);
  if (value.是否已招募 !== undefined) 断言布尔(value.是否已招募, `${path}.是否已招募`);
  if (value.兵种适性 !== undefined) 校验兵种适性表(value.兵种适性, `${path}.兵种适性`);
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
  if (value.描述 !== undefined) 断言字符串(value.描述, `${path}.描述`);
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
  if (value.物品 !== undefined) 校验物品条目(value.物品, `${path}.物品`);
  if (value.分类 !== undefined) 断言枚举值(value.分类, 枚举.商品分类, `${path}.分类`);
  if (value.价格 !== undefined) 断言数字(value.价格, `${path}.价格`);
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
  if (value.战斗数据 !== undefined) 校验战斗数据(value.战斗数据, `${path}.战斗数据`);
  if (value.物品栏 !== undefined) 校验物品栏(value.物品栏, `${path}.物品栏`);
  if (value.所属势力 !== undefined) 断言字符串(value.所属势力, `${path}.所属势力`);
  if (value.兵种适性 !== undefined) 校验兵种适性表(value.兵种适性, `${path}.兵种适性`);
  if (value.声望 !== undefined) 断言数字(value.声望, `${path}.声望`);
  if (value.金钱 !== undefined) 断言数字(value.金钱, `${path}.金钱`);
  if (value.积分 !== undefined) 断言数字(value.积分, `${path}.积分`);
  if (value.官职 !== undefined) 断言字符串(value.官职, `${path}.官职`);
  if (value.爵位 !== undefined) 断言字符串(value.爵位, `${path}.爵位`);
  if (value.后宫和谐度 !== undefined) 断言数字(value.后宫和谐度, `${path}.后宫和谐度`);
}

function 校验城池更新(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 城池字段, path);
  if (value.名称 !== undefined) 断言字符串(value.名称, `${path}.名称`);
  if (value.等级 !== undefined) 断言枚举值(value.等级, 枚举.城池等级, `${path}.等级`);
  for (const key of ['城防', '人口', '农业', '商业', '民心', '治安', '繁荣度'] as const) {
    if (value[key] !== undefined) 断言数字(value[key], `${path}.${key}`);
  }
  if (value.太守 !== undefined) 断言字符串(value.太守, `${path}.太守`);
  if (value.设施 !== undefined) {
    断言(Array.isArray(value.设施), `${path}.设施 必须是数组`);
    value.设施.forEach((item, index) => 断言字符串(item, `${path}.设施[${index}]`));
  }
}

function 校验军队更新(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 军队字段, path);
  if (value.名称 !== undefined) 断言字符串(value.名称, `${path}.名称`);
  if (value.兵种 !== undefined) 断言枚举值(value.兵种, 枚举.基础兵种, `${path}.兵种`);
  if (value.等级 !== undefined) 断言枚举值(value.等级, 枚举.军队等级, `${path}.等级`);
  for (const key of ['兵力', '士气', '疲惫', '训练进度'] as const) {
    if (value[key] !== undefined) 断言数字(value[key], `${path}.${key}`);
  }
  if (value.装备等级 !== undefined) 断言枚举值(value.装备等级, 枚举.军队装备等级, `${path}.装备等级`);
  if (value.统属将领 !== undefined) 断言字符串(value.统属将领, `${path}.统属将领`);
  if (value.驻扎地 !== undefined) 断言字符串(value.驻扎地, `${path}.驻扎地`);
  if (value.阵型 !== undefined) 断言枚举值(value.阵型, 枚举.阵型, `${path}.阵型`);
}

function 校验政策更新(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 政策字段, path);
  if (value.当前研究 !== undefined) 断言字符串(value.当前研究, `${path}.当前研究`);
  for (const key of ['研究进度', '富国', '强兵', '霸道', '王道'] as const) {
    if (value[key] !== undefined) 断言数字(value[key], `${path}.${key}`);
  }
}

function 校验势力更新(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 势力字段, path);
  if (value.名称 !== undefined) 断言字符串(value.名称, `${path}.名称`);
  if (value.主公 !== undefined) 断言字符串(value.主公, `${path}.主公`);
  if (value.规模 !== undefined) 断言枚举值(value.规模, 枚举.势力规模, `${path}.规模`);
  for (const key of ['正统性', '情报网', '金钱', '粮草'] as const) {
    if (value[key] !== undefined) 断言数字(value[key], `${path}.${key}`);
  }
  if (value.城池 !== undefined) {
    断言对象(value.城池, `${path}.城池`);
    for (const [key, item] of Object.entries(value.城池)) {
      断言字符串(key, `${path}.城池 键名`);
      校验城池更新(item, `${path}.城池.${key}`);
    }
  }
  if (value.军队 !== undefined) {
    断言对象(value.军队, `${path}.军队`);
    for (const [key, item] of Object.entries(value.军队)) {
      断言字符串(key, `${path}.军队 键名`);
      校验军队更新(item, `${path}.军队.${key}`);
    }
  }
  if (value.外交 !== undefined) {
    校验数字映射(value.外交, `${path}.外交`);
  }
  if (value.政策 !== undefined) 校验政策更新(value.政策, `${path}.政策`);
}

function 校验NPC更新(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, NPC字段, path);
  if (value.名称 !== undefined) 断言字符串(value.名称, `${path}.名称`);
  if (value.品质 !== undefined) 断言枚举值(value.品质, 枚举.品质, `${path}.品质`);
  if (value.阵营 !== undefined) 断言字符串(value.阵营, `${path}.阵营`);
  if (value.定位 !== undefined) 断言字符串(value.定位, `${path}.定位`);
  if (value.所在地 !== undefined) 断言字符串(value.所在地, `${path}.所在地`);
  if (value.好感 !== undefined) 断言数字(value.好感, `${path}.好感`);
  if (value.简述 !== undefined) 断言字符串(value.简述, `${path}.简述`);
  if (value.羁绊 !== undefined) 校验字符串映射(value.羁绊, `${path}.羁绊`);
  if (value.六维 !== undefined) 校验六维(value.六维, `${path}.六维`);
  if (value.战斗数据 !== undefined) 校验战斗数据(value.战斗数据, `${path}.战斗数据`);
  if (value.武将信息 !== undefined) 校验武将信息(value.武将信息, `${path}.武将信息`);
  if (value.美人属性 !== undefined) 校验美人属性(value.美人属性, `${path}.美人属性`);
}

function 校验任务更新(value: unknown, path: string): void {
  断言非空对象(value, path);
  断言字段白名单(value, 任务字段, path);
  if (value.名称 !== undefined) 断言字符串(value.名称, `${path}.名称`);
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
  debugLog('commands', '开始解析命令输入', {
    inputType: typeof input === 'string' ? 'string' : Array.isArray(input) ? 'array' : 'object',
    summary: summarizeValue(input),
  });
  try {
    if (typeof input === 'string') {
      const parsed = JSON.parse(input) as unknown;
      debugLog('commands', '字符串命令 JSON 解析成功', summarizeValue(parsed));
      return 解析命令输入(parsed as 状态命令[]);
    }
    const list: 状态命令[] = Array.isArray(input) ? input : [input];
    debugLog('commands', '开始逐条校验命令', { count: list.length });
    list.forEach((command, index) => 校验命令(command, index));
    debugLog('commands', '命令输入校验完成', {
      count: list.length,
      types: list.map(command => command.type),
    });
    return list;
  } catch (error) {
    debugError('commands', '解析命令输入失败', error);
    throw error;
  }
}

export function 校验命令(command: 状态命令, index = 0): void {
  const path = `commands[${index}]`;
  debugLog('commands', '校验单条命令', {
    index,
    type: _.isPlainObject(command) ? (command as { type?: unknown }).type ?? null : null,
    summary: summarizeValue(command),
  });
  断言对象(command, path);
  断言(typeof command.type === 'string', `${path}.type 必须是字符串`);
  断言(command.type in 命令字段白名单, `${path}.type 不是有效命令类型: ${String(command.type)}`);
  const allowedKeys = 命令字段白名单[command.type as keyof typeof 命令字段白名单];
  断言字段白名单(command, allowedKeys, path);
  断言无下划线字段(command, path);

  try {
    switch (command.type) {
      case 'UpdateWorld':
        debugLog('commands', '校验 UpdateWorld', { index });
        校验世界更新(command.changes, `${path}.changes`);
        return;
      case 'AppendRecentEvent':
        debugLog('commands', '校验 AppendRecentEvent', { index });
        校验世界事件输入(command.event, `${path}.event`);
        return;
      case 'UpdatePlayerBase':
        debugLog('commands', '校验 UpdatePlayerBase', { index });
        校验主角更新(command.changes, `${path}.changes`);
        return;
      case 'AdjustPlayerResource':
        debugLog('commands', '校验 AdjustPlayerResource', { index });
        if (command.mode !== undefined) {
          断言枚举值(command.mode, ['delta', 'set'], `${path}.mode`);
        }
        校验资源变化(command.changes, `${path}.changes`);
        return;
      case 'UpdateFaction':
        debugLog('commands', '校验 UpdateFaction', { index, 名称: command.名称 });
        断言字符串(command.名称, `${path}.名称`);
        if (command.createIfMissing !== undefined) {
          断言布尔(command.createIfMissing, `${path}.createIfMissing`);
        }
        校验势力更新(command.changes, `${path}.changes`);
        校验名称一致性(command.名称, command.changes, `${path}.changes`);
        return;
      case 'UpsertCity':
        debugLog('commands', '校验 UpsertCity', { index, 势力名称: command.势力名称, 名称: command.名称 });
        断言字符串(command.势力名称, `${path}.势力名称`);
        断言字符串(command.名称, `${path}.名称`);
        if (command.createIfMissing !== undefined) {
          断言布尔(command.createIfMissing, `${path}.createIfMissing`);
        }
        校验城池更新(command.data, `${path}.data`);
        校验名称一致性(command.名称, command.data, `${path}.data`);
        return;
      case 'AddCityFacility':
        debugLog('commands', '校验 AddCityFacility', { index, 势力名称: command.势力名称, 名称: command.名称 });
        断言字符串(command.势力名称, `${path}.势力名称`);
        断言字符串(command.名称, `${path}.名称`);
        断言字符串(command.facility, `${path}.facility`);
        return;
      case 'RemoveCityFacility':
        debugLog('commands', '校验 RemoveCityFacility', { index, 势力名称: command.势力名称, 名称: command.名称 });
        断言字符串(command.势力名称, `${path}.势力名称`);
        断言字符串(command.名称, `${path}.名称`);
        断言字符串(command.facility, `${path}.facility`);
        return;
      case 'RemoveCity':
        debugLog('commands', '校验 RemoveCity', { index, 势力名称: command.势力名称, 名称: command.名称 });
        断言字符串(command.势力名称, `${path}.势力名称`);
        断言字符串(command.名称, `${path}.名称`);
        return;
      case 'UpsertArmy':
        debugLog('commands', '校验 UpsertArmy', { index, 势力名称: command.势力名称, 名称: command.名称 });
        断言字符串(command.势力名称, `${path}.势力名称`);
        断言字符串(command.名称, `${path}.名称`);
        if (command.createIfMissing !== undefined) {
          断言布尔(command.createIfMissing, `${path}.createIfMissing`);
        }
        校验军队更新(command.data, `${path}.data`);
        校验名称一致性(command.名称, command.data, `${path}.data`);
        return;
      case 'RemoveArmy':
        debugLog('commands', '校验 RemoveArmy', { index, 势力名称: command.势力名称, 名称: command.名称 });
        断言字符串(command.势力名称, `${path}.势力名称`);
        断言字符串(command.名称, `${path}.名称`);
        return;
      case 'UpdateDiplomacy':
        debugLog('commands', '校验 UpdateDiplomacy', { index, 名称: command.名称 });
        断言字符串(command.名称, `${path}.名称`);
        校验数字映射(command.changes, `${path}.changes`);
        return;
      case 'UpdatePolicy':
        debugLog('commands', '校验 UpdatePolicy', { index, 名称: command.名称 });
        断言字符串(command.名称, `${path}.名称`);
        校验政策更新(command.changes, `${path}.changes`);
        return;
      case 'UpsertNpc':
        debugLog('commands', '校验 UpsertNpc', { index, 名称: command.名称 });
        断言字符串(command.名称, `${path}.名称`);
        if (command.createIfMissing !== undefined) {
          断言布尔(command.createIfMissing, `${path}.createIfMissing`);
        }
        校验NPC更新(command.data, `${path}.data`);
        校验名称一致性(command.名称, command.data, `${path}.data`);
        return;
      case 'UpdateNpcRelation':
        debugLog('commands', '校验 UpdateNpcRelation', { index, 名称: command.名称 });
        断言字符串(command.名称, `${path}.名称`);
        if (command.mode !== undefined) {
          断言枚举值(command.mode, ['delta', 'set'], `${path}.mode`);
        }
        断言(command.好感 !== undefined || command.羁绊 !== undefined, `${path} 至少要提供 好感 或 羁绊`);
        if (command.好感 !== undefined) 断言数字(command.好感, `${path}.好感`);
        if (command.羁绊 !== undefined) 校验字符串映射(command.羁绊, `${path}.羁绊`);
        return;
      case 'RemoveNpc':
        debugLog('commands', '校验 RemoveNpc', { index, 名称: command.名称 });
        断言字符串(command.名称, `${path}.名称`);
        return;
      case 'UpsertQuest':
        debugLog('commands', '校验 UpsertQuest', { index, 名称: command.名称 });
        断言字符串(command.名称, `${path}.名称`);
        if (command.createIfMissing !== undefined) {
          断言布尔(command.createIfMissing, `${path}.createIfMissing`);
        }
        校验任务更新(command.data, `${path}.data`);
        校验名称一致性(command.名称, command.data, `${path}.data`);
        return;
      case 'UpdateQuestState':
        debugLog('commands', '校验 UpdateQuestState', { index, 名称: command.名称 });
        断言字符串(command.名称, `${path}.名称`);
        断言枚举值(command.状态, 枚举.任务状态, `${path}.状态`);
        if (command.目标 !== undefined) {
          校验任务目标映射(command.目标, `${path}.目标`);
        }
        return;
      case 'RemoveQuest':
        debugLog('commands', '校验 RemoveQuest', { index, 名称: command.名称 });
        断言字符串(command.名称, `${path}.名称`);
        return;
      case 'UpsertShopItem':
        debugLog('commands', '校验 UpsertShopItem', { index, 名称: command.名称 });
        断言字符串(command.名称, `${path}.名称`);
        if (command.createIfMissing !== undefined) {
          断言布尔(command.createIfMissing, `${path}.createIfMissing`);
        }
        校验商品条目(command.data, `${path}.data`);
        校验名称一致性(command.名称, command.data, `${path}.data`);
        return;
      case 'RemoveShopItem':
        debugLog('commands', '校验 RemoveShopItem', { index, 名称: command.名称 });
        断言字符串(command.名称, `${path}.名称`);
        return;
    }
  } catch (error) {
    debugError('commands', `命令校验失败: ${path}`, error);
    throw error;
  }
}

export function 创建命令执行快照(state: 状态总表): 状态总表 {
  return _.cloneDeep(state);
}
