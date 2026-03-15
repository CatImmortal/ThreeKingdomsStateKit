import type { 装备栏 } from './state';

export const MAX_RECENT_EVENTS = 5;

export const 枚举 = {
  品质: ['N', 'R', 'SR', 'SSR', 'UR'],
  装备品质: ['凡品', '良品', '上品', '极品', '传说', '神话'],
  属性等级: ['低下', '普通', '优秀', '一流', '超一流', '当世巅峰', '传说', '神话'],
  武技等级: ['入门', '精通', '大成', '绝学', '神技'],
  武技类型: ['攻击', '防御', '辅助', '反击'],
  剧本: ['S1黄巾起义', 'S2讨伐董卓'],
  武将性格: ['义士', '利己', '野心家', '愚忠', '傲气', '感恩'],
  武将状态: ['待命', '驻守', '随军', '执行指令', '受伤', '被俘', '阵亡'],
  美人位份: ['未纳入', '通房', '侍妾', '姬妾', '侧妃', '正妻', '禁脔'],
  美人性格: ['温柔', '贞烈', '高冷', '娇蛮', '多情', '病娇', '善妒'],
  美人状态: ['正常', '怀孕', '产后', '生病', '被囚', '失踪'],
  任务类型: ['主线', '支线', '隐藏', '史诗', '成就', '委托'],
  商品分类: ['装备', '技能书', '消耗品', '资源', '限时稀有'],
  任务状态: ['可接取', '进行中', '可提交', '已完成', '已失败', '已过期'],
  任务目标类型: ['主要', '次要', '隐藏'],
  任务目标状态: ['未发现', '未完成', '已完成'],
  势力规模: ['无', '草莽', '县级', '郡级', '州级', '霸主', '帝国'],
  城池等级: ['村落', '县城', '郡城', '州城', '雄城', '帝都'],
  基础兵种: ['刀盾兵', '枪矛兵', '弓弩兵', '骑兵', '水军'],
  军队等级: ['新兵', '普通', '老兵', '精锐', '特殊兵种'],
  军队装备等级: ['简陋', '普通', '精良', '上等', '精锐'],
  阵型: ['无', '锋矢阵', '鹤翼阵', '鱼鳞阵', '方圆阵', '长蛇阵', '雁行阵', '偃月阵'],
} as const;

export const 城池基础 = {
  村落: { 税收: 5, 产粮: 30, 城防上限: 20, 驻军上限: 500, 防御系数: 0.3, 指令槽: 1 },
  县城: { 税收: 20, 产粮: 100, 城防上限: 50, 驻军上限: 3000, 防御系数: 0.6, 指令槽: 2 },
  郡城: { 税收: 60, 产粮: 250, 城防上限: 70, 驻军上限: 8000, 防御系数: 0.8, 指令槽: 3 },
  州城: { 税收: 150, 产粮: 500, 城防上限: 85, 驻军上限: 20000, 防御系数: 1.0, 指令槽: 4 },
  雄城: { 税收: 300, 产粮: 800, 城防上限: 95, 驻军上限: 40000, 防御系数: 1.3, 指令槽: 5 },
  帝都: { 税收: 500, 产粮: 1200, 城防上限: 100, 驻军上限: 80000, 防御系数: 1.6, 指令槽: 6 },
} as const;

export const 等级系数 = { 新兵: 0.6, 普通: 0.8, 老兵: 1.0, 精锐: 1.3, 特殊兵种: 1.8 } as const;
export const 军队装备系数 = { 简陋: 0.7, 普通: 0.85, 精良: 1.0, 上等: 1.15, 精锐: 1.3 } as const;
export const 军饷基数 = { 新兵: 25, 普通: 40, 老兵: 65, 精锐: 100, 特殊兵种: 250 } as const;
export const 阵型数据 = {
  无: { 攻击: 1.0, 防御: 1.0 },
  锋矢阵: { 攻击: 1.15, 防御: 0.9 },
  鹤翼阵: { 攻击: 1.1, 防御: 1.0 },
  鱼鳞阵: { 攻击: 0.95, 防御: 1.15 },
  方圆阵: { 攻击: 1.0, 防御: 1.1 },
  长蛇阵: { 攻击: 1.05, 防御: 0.95 },
  雁行阵: { 攻击: 1.1, 防御: 0.95 },
  偃月阵: { 攻击: 1.05, 防御: 1.05 },
} as const;

export type 品质 = (typeof 枚举.品质)[number];
export type 装备品质 = (typeof 枚举.装备品质)[number];
export type 属性等级 = (typeof 枚举.属性等级)[number];
export type 武技等级 = (typeof 枚举.武技等级)[number];
export type 武技类型 = (typeof 枚举.武技类型)[number];
export type 剧本 = (typeof 枚举.剧本)[number];
export type 武将性格 = (typeof 枚举.武将性格)[number];
export type 武将状态 = (typeof 枚举.武将状态)[number];
export type 美人位份 = (typeof 枚举.美人位份)[number];
export type 美人性格 = (typeof 枚举.美人性格)[number];
export type 美人状态 = (typeof 枚举.美人状态)[number];
export type 任务类型 = (typeof 枚举.任务类型)[number];
export type 商品分类 = (typeof 枚举.商品分类)[number];
export type 任务状态 = (typeof 枚举.任务状态)[number];
export type 任务目标类型 = (typeof 枚举.任务目标类型)[number];
export type 任务目标状态 = (typeof 枚举.任务目标状态)[number];
export type 势力规模 = (typeof 枚举.势力规模)[number];
export type 城池等级 = (typeof 枚举.城池等级)[number];
export type 基础兵种 = (typeof 枚举.基础兵种)[number];
export type 军队等级 = (typeof 枚举.军队等级)[number];
export type 军队装备等级 = (typeof 枚举.军队装备等级)[number];
export type 阵型 = (typeof 枚举.阵型)[number];

export function 数值(value: unknown, fallback = 0): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

export function 限制数值(value: unknown, min: number, max: number): number {
  return _.clamp(数值(value), min, max);
}

export function 计算加值(属性值: number): number {
  if (属性值 <= 20) return Math.floor(属性值 * 0.3);
  if (属性值 <= 40) return Math.floor(属性值 * 0.4);
  if (属性值 <= 60) return Math.floor(属性值 * 0.5);
  if (属性值 <= 80) return Math.floor(属性值 * 0.6);
  if (属性值 <= 90) return Math.floor(属性值 * 0.7);
  if (属性值 <= 95) return Math.floor(属性值 * 0.8);
  if (属性值 <= 99) return Math.floor(属性值 * 0.9);
  return 属性值;
}

export function 属性等级(v: number): 属性等级 {
  if (v <= 20) return '低下';
  if (v <= 40) return '普通';
  if (v <= 60) return '优秀';
  if (v <= 80) return '一流';
  if (v <= 90) return '超一流';
  if (v <= 95) return '当世巅峰';
  if (v <= 99) return '传说';
  return '神话';
}

export function 计算伤势(当前: number, 上限: number): { _伤势: string; _伤势减值: number } {
  if (上限 <= 0) return { _伤势: '完好', _伤势减值: 0 };
  if (当前 <= 0) return { _伤势: '濒死', _伤势减值: -999 };
  const pct = (当前 / 上限) * 100;
  if (pct <= 25) return { _伤势: '重伤', _伤势减值: -15 };
  if (pct <= 50) return { _伤势: '中伤', _伤势减值: -10 };
  if (pct <= 75) return { _伤势: '轻伤', _伤势减值: -5 };
  return { _伤势: '完好', _伤势减值: 0 };
}

export function 声望称号(v: number): string {
  if (v <= 12) return '无名小卒';
  if (v <= 25) return '略有名气';
  if (v <= 37) return '小有名气';
  if (v <= 50) return '名声在外';
  if (v <= 62) return '威名远播';
  if (v <= 75) return '天下闻名';
  if (v <= 87) return '名震华夏';
  return '千古留名';
}

export function 忠诚等级(v: number): string {
  if (v <= 19) return '叛离';
  if (v <= 39) return '动摇';
  if (v <= 59) return '普通';
  if (v <= 79) return '忠诚';
  return '死忠';
}

export function 好感等级(v: number): string {
  if (v <= 19) return '厌恶';
  if (v <= 39) return '普通';
  if (v <= 59) return '好感';
  if (v <= 79) return '挚爱';
  return '沉溺';
}

export function 交情等级(v: number): string {
  if (v <= 19) return '厌恶';
  if (v <= 39) return '普通';
  if (v <= 59) return '友善';
  if (v <= 79) return '信赖';
  return '挚友';
}

export function 外交等级(v: number): string {
  if (v <= 14) return '死敌';
  if (v <= 29) return '敌对';
  if (v <= 44) return '敌视';
  if (v <= 59) return '中立';
  if (v <= 74) return '友善';
  if (v <= 89) return '同盟';
  return '附庸';
}

export function 士气等级(v: number): string {
  if (v <= 19) return '崩溃';
  if (v <= 39) return '低落';
  if (v <= 59) return '普通';
  if (v <= 79) return '高昂';
  return '狂热';
}

export function 疲惫等级(v: number): string {
  if (v <= 19) return '精力充沛';
  if (v <= 39) return '轻度疲惫';
  if (v <= 59) return '中度疲惫';
  if (v <= 79) return '重度疲惫';
  return '精疲力竭';
}

export function 依赖等级(v: number): string {
  if (v <= 19) return '无依赖';
  if (v <= 39) return '轻微依赖';
  if (v <= 59) return '中等依赖';
  if (v <= 79) return '严重依赖';
  return '完全依赖';
}

export function 敏感等级(v: number): string {
  if (v <= 19) return '迟钝';
  if (v <= 39) return '普通';
  if (v <= 59) return '敏感';
  if (v <= 79) return '高度敏感';
  return '超敏感';
}

export function 贞洁等级(v: number): string {
  if (v <= 19) return '放荡';
  if (v <= 39) return '开放';
  if (v <= 59) return '普通';
  if (v <= 79) return '保守';
  return '贞烈';
}

export function 和谐等级(v: number): string {
  if (v <= 39) return '混乱';
  if (v <= 59) return '紧张';
  if (v <= 79) return '平稳';
  return '和睦';
}

export function 士气系数(v: number): number {
  if (v <= 19) return 0.3;
  if (v <= 39) return 0.6;
  if (v <= 59) return 0.8;
  if (v <= 79) return 1.0;
  return 1.2;
}

export function 疲惫系数(v: number): number {
  if (v <= 19) return 1.0;
  if (v <= 39) return 0.9;
  if (v <= 59) return 0.75;
  if (v <= 79) return 0.6;
  return 0.4;
}

export function 统率系数(v: number): number {
  if (v <= 30) return 1 + v / 100;
  return 1.3 + (v - 30) / 60;
}

export function 兵种适性修正(v: number): number {
  if (v <= 19) return -0.1;
  if (v <= 39) return 0;
  if (v <= 59) return 0.1;
  if (v <= 79) return 0.2;
  return 0.3;
}

export function 汇总装备加值(装备: 装备栏): {
  先攻: number;
  攻击: number;
  防御DC: number;
  减免: number;
} {
  const slots = Object.values(装备 || {});
  return slots.reduce(
    (acc, item) => {
      if (!item || item === '无') {
        return acc;
      }
      acc.先攻 += 数值(item.先攻加值);
      acc.攻击 += 数值(item.攻击加值);
      acc.防御DC += 数值(item.防御DC加值);
      acc.减免 += 数值(item.伤害减免);
      return acc;
    },
    { 先攻: 0, 攻击: 0, 防御DC: 0, 减免: 0 },
  );
}
