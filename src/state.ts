import {
  type 剧本,
  type 品质,
  type 武将性格,
  type 武将状态,
  type 美人位份,
  type 美人性格,
  type 美人状态,
  type 任务状态,
  type 任务目标状态,
  type 任务目标类型,
  type 任务类型,
  type 商品分类,
  type 武技类型,
  type 动作类型,
  type 属性等级,
  type 武技等级,
  type 物品品质,
  type 物品类型,
  type 势力规模,
  type 城池等级,
  type 基础兵种,
  type 军队等级,
  type 军队装备等级,
  type 阵型,
  枚举,
  限制数值,
  数值,
  计算加值,
} from './rules';

export type 六维 = {
  武力: number;
  智力: number;
  统率: number;
  政治: number;
  魅力: number;
  体质: number;
  _武力加值?: number;
  _智力加值?: number;
  _统率加值?: number;
  _政治加值?: number;
  _魅力加值?: number;
  _体质加值?: number;
  _武力等级?: 属性等级;
  _智力等级?: 属性等级;
  _统率等级?: 属性等级;
  _政治等级?: 属性等级;
  _魅力等级?: 属性等级;
  _体质等级?: 属性等级;
};

export type 装备条目 = {
  伤害骰: string;
  先攻加值: number;
  攻击加值: number;
  防御DC加值: number;
  伤害减免: number;
  其他效果: string;
};

export type 物品条目 = {
  名称: string;
  品质: 物品品质;
  类型: 物品类型;
  描述: string;
  装备条目?: 装备条目 | null;
};

export type 物品栏条目 = {
  物品: 物品条目;
  数量: number;
};

export type 装备栏位 = 物品条目 | '无';

export type 装备栏 = {
  主武器: 装备栏位;
  副武器: 装备栏位;
  护甲: 装备栏位;
  坐骑: 装备栏位;
  饰品1: 装备栏位;
  饰品2: 装备栏位;
  饰品3: 装备栏位;
};

export type 状态记录 = Record<string, { 效果: string; 剩余: string }>;

export type 武技条目 = {
  名称: string;
  等级: 武技等级;
  类型: 武技类型;
  效果: string;
  熟练度?: number;
  体力消耗?: number;
  _动作类型?: 动作类型;
};

export type 专长条目 = {
  名称: string;
  等级: 属性等级;
  效果: string;
};

export type 角色战斗数据 = {
  六维: 六维;
  当前生命值: number;
  当前体力值: number;
  生命上限加成值: number;
  体力上限加成值: number;
  装备: 装备栏;
  武技: Record<string, 武技条目>;
  专长: Record<string, 专长条目>;
  状态: 状态记录;
  _生命上限基础值?: number;
  _体力上限基础值?: number;
  _生命值上限?: number;
  _体力值上限?: number;
  _伤势?: string;
  _伤势减值?: number;
  _先攻基础值?: number;
  _攻击基础值?: number;
  _伤害基础值?: number;
  _防御DC基础值?: number;
  _伤害减免基础值?: number;
};

export type 兵种适性表 = Record<基础兵种, number>;

export type 主角 = 角色战斗数据 & {
  物品栏: Record<string, 物品栏条目>;
  所属势力: string;
  兵种适性: 兵种适性表;
  声望: number;
  金钱: number;
  积分: number;
  官职: string;
  爵位: string;
  后宫和谐度: number;
  _声望称号?: string;
  _和谐等级?: string;
};

export type 城池 = {
  名称: string;
  等级: 城池等级;
  城防: number;
  人口: number;
  农业: number;
  商业: number;
  民心: number;
  治安: number;
  繁荣度: number;
  太守: string;
  设施: string[];
  _城防上限?: number;
  _驻军上限?: number;
  _防御系数?: number;
  _城池防御力?: number;
  _月税收?: number;
  _月产粮?: number;
  _指令槽?: number;
};

export type 军队 = {
  名称: string;
  兵种: 基础兵种;
  等级: 军队等级;
  兵力: number;
  士气: number;
  疲惫: number;
  装备等级: 军队装备等级;
  统属将领: string;
  驻扎地: string;
  训练进度: number;
  阵型: 阵型;
  _士气等级?: string;
  _疲惫等级?: string;
  _阵型攻击修正?: number;
  _阵型防御修正?: number;
  _统率系数?: number;
  _综合战力?: number;
};

export type 政策 = {
  当前研究: string;
  研究进度: number;
  富国: number;
  强兵: number;
  霸道: number;
  王道: number;
};

export type 势力 = {
  名称: string;
  主公: string;
  规模: 势力规模;
  正统性: number;
  情报网: number;
  金钱: number;
  粮草: number;
  城池: Record<string, 城池>;
  军队: Record<string, 军队>;
  外交: Record<string, number>;
  政策: 政策;
  _外交等级?: Record<string, string>;
  _月总税收?: number;
  _月总产粮?: number;
  _总兵力?: number;
  _总战力?: number;
  _月军饷估算?: number;
  _月粮草消耗估算?: number;
};

export type 武将信息 = {
  野心值: number;
  性格: 武将性格;
  官职: string;
  当前状态: 武将状态;
  状态描述: string;
  势力: string;
  忠诚: number;
  是否已招募: boolean;
  兵种适性: 兵种适性表;
  特技: Record<string, string>;
  _忠诚等级?: string;
};

export type 美人属性 = {
  依赖度: number;
  敏感度: number;
  贞洁度: number;
  位份: 美人位份;
  性格: 美人性格;
  当前状态: 美人状态;
  _依赖等级?: string;
  _敏感等级?: string;
  _贞洁等级?: string;
  _好感等级?: string;
};

export type NPC = {
  名称: string;
  品质: 品质;
  阵营: string;
  定位: string;
  所在地: string;
  好感: number;
  简述: string;
  羁绊: Record<string, string>;
  角色数据?: 角色战斗数据;
  武将信息?: 武将信息;
  美人属性?: 美人属性;
  _交情等级?: string;
};

export type 任务目标 = {
  类型: 任务目标类型;
  状态: 任务目标状态;
  描述: string;
  积分: number;
  其他奖励: string;
};

export type 任务 = {
  名称: string;
  类型: 任务类型;
  状态: 任务状态;
  时限: string;
  目标: Record<string, 任务目标>;
};

export type 商品条目 = {
  物品: 物品条目;
  分类: 商品分类;
  价格: number;
};

export type 世界 = {
  当前时间: string;
  当前地点: string;
  当前剧本: 剧本;
  天气: string;
  近期事件: Array<{
    事件名: string;
    简述: string;
    日期: string;
  }>;
};

export type 势力集合 = Record<string, 势力>;

export type 状态总表 = {
  meta: {
    schemaVersion: string;
    scriptVersion: string;
    updatedAt: string;
  };
  世界: 世界;
  主角: 主角;
  势力: 势力集合;
  NPC: Record<string, NPC>;
  任务: Record<string, 任务>;
  商城: Record<string, 商品条目>;
};

export function create六维(data: Partial<六维> = {}): 六维 {
  return {
    武力: 限制数值(data.武力, 0, 120),
    智力: 限制数值(data.智力, 0, 120),
    统率: 限制数值(data.统率, 0, 120),
    政治: 限制数值(data.政治, 0, 120),
    魅力: 限制数值(data.魅力, 0, 120),
    体质: 限制数值(data.体质, 0, 120),
  };
}

export function create装备条目(data: Partial<装备条目> = {}): 装备条目 {
  return {
    伤害骰: String(data.伤害骰 || ''),
    先攻加值: 数值(data.先攻加值),
    攻击加值: 数值(data.攻击加值),
    防御DC加值: 数值(data.防御DC加值),
    伤害减免: 数值(data.伤害减免),
    其他效果: String(data.其他效果 || ''),
  };
}

export function create物品条目(data: Partial<物品条目> = {}): 物品条目 {
  const 类型 = 枚举.物品类型.includes(data.类型 as 物品类型) ? (data.类型 as 物品类型) : '消耗品';
  const 是装备类型 = ['武器', '护甲', '坐骑', '饰品'].includes(类型);
  return {
    名称: String(data.名称 || ''),
    品质: 枚举.物品品质.includes(data.品质 as 物品品质) ? (data.品质 as 物品品质) : '凡品',
    类型,
    描述: String(data.描述 || ''),
    装备条目: 是装备类型 ? create装备条目(data.装备条目 || {}) : null,
  };
}

export function create装备栏(data: Partial<装备栏> = {}): 装备栏 {
  const toSlot = (value: 装备栏位 | undefined): 装备栏位 => (value && value !== '无' ? create物品条目(value) : '无');
  return {
    主武器: toSlot(data.主武器),
    副武器: toSlot(data.副武器),
    护甲: toSlot(data.护甲),
    坐骑: toSlot(data.坐骑),
    饰品1: toSlot(data.饰品1),
    饰品2: toSlot(data.饰品2),
    饰品3: toSlot(data.饰品3),
  };
}

export function create状态记录(data: 状态记录 = {}): 状态记录 {
  return _.mapValues(data, item => ({
    效果: String(item?.效果 || ''),
    剩余: String(item?.剩余 || '永久'),
  }));
}

export function create武技条目(data: Partial<武技条目> = {}, { 完整 = true } = {}): 武技条目 {
  return {
    名称: String(data.名称 || ''),
    等级: 枚举.武技等级.includes(data.等级 as 武技等级) ? (data.等级 as 武技等级) : '入门',
    类型: 枚举.武技类型.includes(data.类型 as 武技类型) ? (data.类型 as 武技类型) : '攻击',
    效果: String(data.效果 || ''),
    ...(完整 ? { 熟练度: 限制数值(data.熟练度, 0, 100), 体力消耗: 数值(data.体力消耗) } : {}),
  };
}

export function create专长条目(data: Partial<专长条目> = {}): 专长条目 {
  return {
    名称: String(data.名称 || ''),
    等级: 枚举.属性等级.includes(data.等级 as 属性等级) ? (data.等级 as 属性等级) : '普通',
    效果: String(data.效果 || ''),
  };
}

export function create角色战斗数据(data: Partial<角色战斗数据> = {}, { 完整 = false } = {}): 角色战斗数据 {
  const 六维 = create六维(data.六维);
  const 生命上限加成值 = 数值(data.生命上限加成值);
  const 体力上限加成值 = 数值(data.体力上限加成值);
  const 基础生命上限 = 计算加值(六维.体质) * 5;
  const 基础体力上限 = 计算加值(六维.体质) * 8;
  const 生命上限 = Math.max(0, 基础生命上限 + 生命上限加成值);
  const 体力上限 = Math.max(0, 基础体力上限 + 体力上限加成值);

  return {
    六维,
    当前生命值: 数值(data.当前生命值, 生命上限),
    当前体力值: 数值(data.当前体力值, 体力上限),
    生命上限加成值,
    体力上限加成值,
    装备: create装备栏(data.装备),
    武技: _.mapValues(data.武技 || {}, item => create武技条目(item, { 完整 })),
    专长: _.mapValues(data.专长 || {}, item => create专长条目(item)),
    状态: create状态记录(data.状态),
  };
}

export function create城池(data: Partial<城池> = {}): 城池 {
  return {
    名称: String(data.名称 || ''),
    等级: 枚举.城池等级.includes(data.等级 as 城池等级) ? (data.等级 as 城池等级) : '村落',
    城防: Math.max(0, 数值(data.城防)),
    人口: Math.max(0, 数值(data.人口)),
    农业: 限制数值(data.农业, 0, 100),
    商业: 限制数值(data.商业, 0, 100),
    民心: 限制数值(data.民心, 0, 100),
    治安: 限制数值(data.治安, 0, 100),
    繁荣度: 限制数值(data.繁荣度, 0, 100),
    太守: String(data.太守 || '无'),
    设施: Array.isArray(data.设施) ? data.设施.map(item => String(item || '')) : [],
  };
}

export function create兵种适性表(data: Partial<兵种适性表> = {}): 兵种适性表 {
  return Object.fromEntries(枚举.基础兵种.map(兵种 => [兵种, 限制数值(数值(data[兵种], 40), 0, 100)])) as 兵种适性表;
}

export function create军队(data: Partial<军队> = {}): 军队 {
  return {
    名称: String(data.名称 || ''),
    兵种: 枚举.基础兵种.includes(data.兵种 as 基础兵种) ? (data.兵种 as 基础兵种) : '刀盾兵',
    等级: 枚举.军队等级.includes(data.等级 as 军队等级) ? (data.等级 as 军队等级) : '新兵',
    兵力: Math.max(0, 数值(data.兵力)),
    士气: 限制数值(data.士气, 0, 100),
    疲惫: 限制数值(data.疲惫, 0, 100),
    装备等级: 枚举.军队装备等级.includes(data.装备等级 as 军队装备等级) ? (data.装备等级 as 军队装备等级) : '普通',
    统属将领: String(data.统属将领 || ''),
    驻扎地: String(data.驻扎地 || ''),
    训练进度: Math.max(0, 数值(data.训练进度)),
    阵型: 枚举.阵型.includes(data.阵型 as 阵型) ? (data.阵型 as 阵型) : '无',
  };
}

export function create政策(data: Partial<政策> = {}): 政策 {
  return {
    当前研究: String(data.当前研究 || '无'),
    研究进度: Math.max(0, 数值(data.研究进度)),
    富国: 限制数值(data.富国, 0, 5),
    强兵: 限制数值(data.强兵, 0, 5),
    霸道: 限制数值(data.霸道, 0, 5),
    王道: 限制数值(data.王道, 0, 5),
  };
}

export function create势力(data: Partial<势力> = {}): 势力 {
  return {
    名称: String(data.名称 || '无'),
    主公: String(data.主公 || '无'),
    规模: 枚举.势力规模.includes(data.规模 as 势力规模) ? (data.规模 as 势力规模) : '无',
    正统性: 限制数值(data.正统性, 0, 100),
    情报网: 限制数值(data.情报网, 0, 100),
    金钱: Math.max(0, 数值(data.金钱)),
    粮草: Math.max(0, 数值(data.粮草)),
    城池: _.mapValues(data.城池 || {}, item => create城池(item)),
    军队: _.mapValues(data.军队 || {}, item => create军队(item)),
    外交: _.mapValues(data.外交 || {}, value => 限制数值(value, 0, 100)),
    政策: create政策(data.政策),
  };
}

function 看起来像单势力对象(data: unknown): data is Partial<势力> {
  if (!_.isPlainObject(data)) {
    return false;
  }
  const record = data as Record<string, unknown>;
  return ['名称', '主公', '规模', '正统性', '情报网', '金钱', '粮草', '城池', '军队', '外交', '政策'].some(key => key in record);
}

export function create势力集合(data: Partial<势力集合> | Partial<势力> = {}): 势力集合 {
  if (看起来像单势力对象(data)) {
    const faction = create势力(data);
    const factionId = String(faction.名称 || 'default_faction').trim() || 'default_faction';
    return { [factionId]: faction };
  }
  return _.mapValues((data as Partial<势力集合>) || {}, item => create势力(item));
}

export function create武将信息(data: Partial<武将信息> = {}): 武将信息 {
  return {
    野心值: 限制数值(data.野心值, 0, 100),
    性格: 枚举.武将性格.includes(data.性格 as 武将性格) ? (data.性格 as 武将性格) : '义士',
    官职: String(data.官职 || '无'),
    当前状态: 枚举.武将状态.includes(data.当前状态 as 武将状态) ? (data.当前状态 as 武将状态) : '待命',
    状态描述: String(data.状态描述 || ''),
    势力: String(data.势力 || '无'),
    忠诚: 限制数值(数值(data.忠诚, 40), 0, 100),
    是否已招募: Boolean(data.是否已招募),
    兵种适性: create兵种适性表(data.兵种适性),
    特技: _.mapValues(data.特技 || {}, value => String(value || '')),
  };
}

export function create美人属性(data: Partial<美人属性> = {}): 美人属性 {
  return {
    依赖度: 限制数值(data.依赖度, 0, 100),
    敏感度: 限制数值(数值(data.敏感度, 20), 0, 100),
    贞洁度: 限制数值(数值(data.贞洁度, 40), 0, 100),
    位份: 枚举.美人位份.includes(data.位份 as 美人位份) ? (data.位份 as 美人位份) : '未纳入',
    性格: 枚举.美人性格.includes(data.性格 as 美人性格) ? (data.性格 as 美人性格) : '温柔',
    当前状态: 枚举.美人状态.includes(data.当前状态 as 美人状态) ? (data.当前状态 as 美人状态) : '正常',
  };
}

export function createNPC(data: Partial<NPC> = {}): NPC {
  return {
    名称: String(data.名称 || ''),
    品质: 枚举.品质.includes(data.品质 as 品质) ? (data.品质 as 品质) : 'N',
    阵营: String(data.阵营 || ''),
    定位: String(data.定位 || ''),
    所在地: String(data.所在地 || ''),
    好感: 限制数值(数值(data.好感, 30), 0, 100),
    简述: String(data.简述 || ''),
    羁绊: _.mapValues(data.羁绊 || {}, value => String(value || '')),
    角色数据: data.角色数据 ? create角色战斗数据(data.角色数据) : undefined,
    武将信息: data.武将信息 ? create武将信息(data.武将信息) : undefined,
    美人属性: data.美人属性 ? create美人属性(data.美人属性) : undefined,
  };
}

export function create任务目标(data: Partial<任务目标> = {}): 任务目标 {
  return {
    类型: 枚举.任务目标类型.includes(data.类型 as 任务目标类型) ? (data.类型 as 任务目标类型) : '主要',
    状态: 枚举.任务目标状态.includes(data.状态 as 任务目标状态) ? (data.状态 as 任务目标状态) : '未完成',
    描述: String(data.描述 || ''),
    积分: 数值(data.积分),
    其他奖励: String(data.其他奖励 || ''),
  };
}

export function create任务(data: Partial<任务> = {}): 任务 {
  return {
    名称: String(data.名称 || ''),
    类型: 枚举.任务类型.includes(data.类型 as 任务类型) ? (data.类型 as 任务类型) : '支线',
    状态: 枚举.任务状态.includes(data.状态 as 任务状态) ? (data.状态 as 任务状态) : '可接取',
    时限: String(data.时限 || '无'),
    目标: _.mapValues(data.目标 || {}, item => create任务目标(item)),
  };
}

export function create商品条目(data: Partial<商品条目> = {}): 商品条目 {
  return {
    物品: create物品条目(data.物品),
    分类: 枚举.商品分类.includes(data.分类 as 商品分类) ? (data.分类 as 商品分类) : '资源',
    价格: Math.max(0, 数值(data.价格)),
  };
}

export function create世界(data: Partial<世界> = {}): 世界 {
  return {
    当前时间: String(data.当前时间 || ''),
    当前地点: String(data.当前地点 || ''),
    当前剧本: 枚举.剧本.includes(data.当前剧本 as 剧本) ? (data.当前剧本 as 剧本) : 'S1黄巾起义',
    天气: String(data.天气 || '晴'),
    近期事件: Array.isArray(data.近期事件)
      ? data.近期事件.map(item => ({
          事件名: String(item?.事件名 || ''),
          简述: String(item?.简述 || ''),
          日期: String(item?.日期 || ''),
        }))
      : [],
  };
}

export function create主角(data: Partial<主角> = {}): 主角 {
  return {
    ...create角色战斗数据(data, { 完整: true }),
    物品栏: _.mapValues(data.物品栏 || {}, item => ({
      物品: create物品条目(item?.物品),
      数量: Math.max(0, 数值(item?.数量, 1)),
    })),
    所属势力: String(data.所属势力 || '无'),
    兵种适性: create兵种适性表(data.兵种适性),
    声望: 限制数值(data.声望, 0, 100),
    金钱: Math.max(0, 数值(data.金钱)),
    积分: Math.max(0, 数值(data.积分)),
    官职: String(data.官职 || '无'),
    爵位: String(data.爵位 || '无'),
    后宫和谐度: 限制数值(数值(data.后宫和谐度, 60), 0, 100),
  };
}

export function create初始状态(seed: Partial<状态总表> & { 势力?: Partial<势力集合> | Partial<势力> } = {}): 状态总表 {
  return {
    meta: {
      schemaVersion: 'three-kingdoms-v1',
      scriptVersion: 'draft-ts',
      updatedAt: '',
    },
    世界: create世界(seed.世界),
    主角: create主角(seed.主角),
    势力: create势力集合(seed.势力),
    NPC: _.mapValues(seed.NPC || {}, item => createNPC(item)),
    任务: _.mapValues(seed.任务 || {}, item => create任务(item)),
    商城: _.mapValues(seed.商城 || {}, item => create商品条目(item)),
  };
}
