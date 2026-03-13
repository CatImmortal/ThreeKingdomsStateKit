// ===== MVU Schema · 三国霸主系统 =====
import { z } from 'zod';
import _ from 'lodash';
import { registerMvuSchema } from 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';

// ===== 辅助函数 =====

function 计算加值(属性值) {
  if (属性值 <= 20) return Math.floor(属性值 * 0.3);
  if (属性值 <= 40) return Math.floor(属性值 * 0.4);
  if (属性值 <= 60) return Math.floor(属性值 * 0.5);
  if (属性值 <= 80) return Math.floor(属性值 * 0.6);
  if (属性值 <= 90) return Math.floor(属性值 * 0.7);
  if (属性值 <= 95) return Math.floor(属性值 * 0.8);
  if (属性值 <= 99) return Math.floor(属性值 * 0.9);
  return 属性值;
}

function 计算伤势(当前, 上限) {
  if (上限 <= 0) return { _伤势: '完好', _战斗减值: 0 };
  if (当前 <= 0) return { _伤势: '濒死', _战斗减值: -999 };
  const pct = 当前 / 上限 * 100;
  if (pct <= 25) return { _伤势: '重伤', _战斗减值: -15 };
  if (pct <= 50) return { _伤势: '中伤', _战斗减值: -10 };
  if (pct <= 75) return { _伤势: '轻伤', _战斗减值: -5 };
  return { _伤势: '完好', _战斗减值: 0 };
}

function 汇总装备加值(装备) {
  let 先攻 = 0, 攻击 = 0, 防御DC = 0, 减免 = 0;
  for (const slot of Object.values(装备)) {
    if (slot === '无') continue;
    先攻 += slot.先攻加值 || 0;
    攻击 += slot.攻击加值 || 0;
    防御DC += slot.防御DC加值 || 0;
    减免 += slot.伤害减免 || 0;
  }
  return { 先攻, 攻击, 防御DC, 减免 };
}

function 角色数据Transform(data) {
  const 体质加值 = data.六维._体质加值;
  const 生命上限 = 体质加值 * 5;
  const 体力上限 = 体质加值 * 8;
  data.当前生命值 = _.clamp(data.当前生命值, 0, 生命上限);
  data.当前体力值 = _.clamp(data.当前体力值, 0, 体力上限);
  data._生命上限 = 生命上限;
  data._体力上限 = 体力上限;

  const 伤势 = 计算伤势(data.当前生命值, 生命上限);
  data._伤势 = 伤势._伤势;
  data._战斗减值 = 伤势._战斗减值;

  const 装备汇总 = 汇总装备加值(data.装备);
  data._先攻值 = Math.floor(data.六维._武力加值 / 4) + 装备汇总.先攻 + data._战斗减值;
  data._攻击基础值 = data.六维._武力加值 + 装备汇总.攻击 + data._战斗减值;
  data._伤害基础值 = data.六维._武力加值 + data._战斗减值;
  data._防御DC = 40 + Math.floor(data.六维._武力加值 * 0.75) + 装备汇总.防御DC + data._战斗减值;
  data._伤害减免 = 装备汇总.减免;

  return data;
}

// ===== 等级标签映射 =====

function 声望称号(v) {
  if (v <= 12) return '无名小卒';
  if (v <= 25) return '略有名气';
  if (v <= 37) return '小有名气';
  if (v <= 50) return '名声在外';
  if (v <= 62) return '威名远播';
  if (v <= 75) return '天下闻名';
  if (v <= 87) return '名震华夏';
  return '千古留名';
}

function 忠诚等级(v) {
  if (v <= 19) return '叛离';
  if (v <= 39) return '动摇';
  if (v <= 59) return '普通';
  if (v <= 79) return '忠诚';
  return '死忠';
}

function 好感等级(v) {
  if (v <= 19) return '厌恶';
  if (v <= 39) return '普通';
  if (v <= 59) return '好感';
  if (v <= 79) return '挚爱';
  return '沉溺';
}

function 交情等级(v) {
  if (v <= 19) return '厌恶';
  if (v <= 39) return '普通';
  if (v <= 59) return '友善';
  if (v <= 79) return '信赖';
  return '挚友';
}

function 外交等级(v) {
  if (v <= 14) return '死敌';
  if (v <= 29) return '敌对';
  if (v <= 44) return '敌视';
  if (v <= 59) return '中立';
  if (v <= 74) return '友善';
  if (v <= 89) return '同盟';
  return '附庸';
}

function 士气等级(v) {
  if (v <= 19) return '崩溃';
  if (v <= 39) return '低落';
  if (v <= 59) return '普通';
  if (v <= 79) return '高昂';
  return '狂热';
}

function 疲惫等级(v) {
  if (v <= 19) return '精力充沛';
  if (v <= 39) return '轻度疲惫';
  if (v <= 59) return '中度疲惫';
  if (v <= 79) return '重度疲惫';
  return '精疲力竭';
}

function 依赖等级(v) {
  if (v <= 19) return '无依赖';
  if (v <= 39) return '轻微依赖';
  if (v <= 59) return '中等依赖';
  if (v <= 79) return '严重依赖';
  return '完全依赖';
}

function 敏感等级(v) {
  if (v <= 19) return '迟钝';
  if (v <= 39) return '普通';
  if (v <= 59) return '敏感';
  if (v <= 79) return '高度敏感';
  return '超敏感';
}

function 贞洁等级(v) {
  if (v <= 19) return '放荡';
  if (v <= 39) return '开放';
  if (v <= 59) return '普通';
  if (v <= 79) return '保守';
  return '贞烈';
}

function 和谐等级(v) {
  if (v <= 39) return '混乱';
  if (v <= 59) return '紧张';
  if (v <= 79) return '平稳';
  return '和睦';
}

// ===== 数值映射表 =====

const 城池基础 = {
  '村落': { 税收: 5, 产粮: 30, 城防上限: 20, 驻军上限: 500, 防御系数: 0.3, 指令槽: 1 },
  '县城': { 税收: 20, 产粮: 100, 城防上限: 50, 驻军上限: 3000, 防御系数: 0.6, 指令槽: 2 },
  '郡城': { 税收: 60, 产粮: 250, 城防上限: 70, 驻军上限: 8000, 防御系数: 0.8, 指令槽: 3 },
  '州城': { 税收: 150, 产粮: 500, 城防上限: 85, 驻军上限: 20000, 防御系数: 1.0, 指令槽: 4 },
  '雄城': { 税收: 300, 产粮: 800, 城防上限: 95, 驻军上限: 40000, 防御系数: 1.3, 指令槽: 5 },
  '帝都': { 税收: 500, 产粮: 1200, 城防上限: 100, 驻军上限: 80000, 防御系数: 1.6, 指令槽: 6 },
};

const 等级系数 = { '新兵': 0.6, '普通': 0.8, '老兵': 1.0, '精锐': 1.3, '特殊兵种': 1.8 };
const 军队装备系数 = { '简陋': 0.7, '普通': 0.85, '精良': 1.0, '上等': 1.15, '精锐': 1.3 };
const 军饷基数 = { '新兵': 25, '普通': 40, '老兵': 65, '精锐': 100, '特殊兵种': 250 };

const 阵型数据 = {
  '无':     { 攻击: 1.0,  防御: 1.0  },
  '锋矢阵': { 攻击: 1.15, 防御: 0.9  },
  '鹤翼阵': { 攻击: 1.10, 防御: 1.0  },
  '鱼鳞阵': { 攻击: 0.95, 防御: 1.15 },
  '方圆阵': { 攻击: 1.0,  防御: 1.10 },
  '长蛇阵': { 攻击: 1.05, 防御: 0.95 },
  '雁行阵': { 攻击: 1.10, 防御: 0.95 },
  '偃月阵': { 攻击: 1.05, 防御: 1.05 },
};

function 士气系数(v) {
  if (v <= 19) return 0.3;
  if (v <= 39) return 0.6;
  if (v <= 59) return 0.8;
  if (v <= 79) return 1.0;
  return 1.2;
}

function 疲惫系数(v) {
  if (v <= 19) return 1.0;
  if (v <= 39) return 0.9;
  if (v <= 59) return 0.75;
  if (v <= 79) return 0.6;
  return 0.4;
}

function 统率系数(v) {
  if (v <= 30) return 1 + v / 100;
  return 1.3 + (v - 30) / 60;
}

// ===== 基础类型 =====

const 品质枚举 = z.enum(['N', 'R', 'SR', 'SSR', 'UR']);
const 装备品质枚举 = z.enum(['凡品', '良品', '上品', '极品', '传说', '神话']);

const 装备条目 = z.object({
  名称: z.string(),
  品质: 装备品质枚举,
  类型: z.string().describe('武器类型/护甲类型/坐骑类型/饰品类型'),
  先攻加值: z.coerce.number().prefault(0),
  攻击加值: z.coerce.number().prefault(0),
  防御DC加值: z.coerce.number().prefault(0),
  伤害减免: z.coerce.number().prefault(0),
  效果: z.string().describe('伤害骰/特殊能力等').prefault(''),
});

const 装备栏位 = 装备条目.or(z.literal('无')).prefault('无');

const 装备栏 = z.object({
  主武器: 装备栏位,
  副武器: 装备栏位,
  护甲: 装备栏位,
  坐骑: 装备栏位,
  饰品1: 装备栏位,
  饰品2: 装备栏位,
  饰品3: 装备栏位,
});

const 六维 = z.object({
  武力: z.coerce.number().transform(v => _.clamp(v, 0, 120)),
  智力: z.coerce.number().transform(v => _.clamp(v, 0, 120)),
  统率: z.coerce.number().transform(v => _.clamp(v, 0, 120)),
  政治: z.coerce.number().transform(v => _.clamp(v, 0, 120)),
  魅力: z.coerce.number().transform(v => _.clamp(v, 0, 120)),
  体质: z.coerce.number().transform(v => _.clamp(v, 0, 120)),
}).transform(data => ({
  ...data,
  _武力加值: 计算加值(data.武力),
  _智力加值: 计算加值(data.智力),
  _统率加值: 计算加值(data.统率),
  _政治加值: 计算加值(data.政治),
  _魅力加值: 计算加值(data.魅力),
  _体质加值: 计算加值(data.体质),
}));

const 状态记录 = z.record(
  z.string().describe('状态名'),
  z.object({
    效果: z.string(),
    剩余: z.string().prefault('永久'),
  })
).prefault({});

const 武技条目_完整 = z.object({
  等级: z.enum(['入门', '精通', '大成', '绝学', '神技']),
  类型: z.enum(['攻击', '防御', '辅助', '反击']),
  熟练度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
  体力消耗: z.coerce.number(),
  效果: z.string(),
});

const 武技条目_简化 = z.object({
  等级: z.enum(['入门', '精通', '大成', '绝学', '神技']),
  类型: z.enum(['攻击', '防御', '辅助', '反击']),
  效果: z.string(),
});

const 专长条目_完整 = z.object({
  等级: z.string(),
  加值: z.coerce.number(),
  效果: z.string(),
});

const 专长条目_简化 = z.object({
  等级: z.string(),
  效果: z.string(),
});

// NPC角色数据（纯战斗面板）
const 角色数据 = z.object({
  六维: 六维,
  当前生命值: z.coerce.number(),
  当前体力值: z.coerce.number(),
  装备: 装备栏,
  武技: z.record(z.string().describe('武技名'), 武技条目_简化),
  专长: z.record(z.string().describe('专长名'), 专长条目_简化),
  状态: 状态记录,
}).transform(角色数据Transform);

// 武将信息（含特技）
const 武将信息 = z.object({
  野心值: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
  性格: z.enum(['义士', '利己', '野心家', '愚忠', '傲气', '感恩']),
  官职: z.string().prefault('无'),
  当前状态: z.enum(['待命', '驻守', '随军', '执行指令', '受伤', '被俘', '阵亡']).prefault('待命'),
  状态描述: z.string().prefault(''),
  驻扎地: z.string().prefault('无'),
  特技: z.record(z.string().describe('特技名'), z.string().describe('效果描述')).prefault({}),
});

// 美人属性
const 美人属性 = z.object({
  依赖度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
  敏感度: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
  贞洁度: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
  位份: z.enum(['未纳入', '通房', '侍妾', '姬妾', '侧妃', '正妻', '禁脔']).prefault('未纳入'),
  性格: z.enum(['温柔', '贞烈', '高冷', '娇蛮', '多情', '病娇', '善妒']),
  当前状态: z.enum(['正常', '怀孕', '产后', '生病', '被囚', '失踪']).prefault('正常'),
}).transform(data => ({
  ...data,
  _依赖等级: 依赖等级(data.依赖度),
  _敏感等级: 敏感等级(data.敏感度),
  _贞洁等级: 贞洁等级(data.贞洁度),
}));

// 任务目标
const 任务目标 = z.object({
  类型: z.enum(['主要', '次要', '隐藏']).prefault('主要'),
  状态: z.enum(['未发现', '未完成', '已完成']).prefault('未完成'),
  积分: z.coerce.number().prefault(0),
  其他奖励: z.string().prefault(''),
});

// 商品条目
const 商品条目 = z.object({
  分类: z.string().describe('装备/武技书/消耗品/坐骑/饰品/特殊'),
  价格: z.coerce.number().describe('积分价格'),
  描述: z.string(),
});

// ===== 主 Schema =====

export const Schema = z.object({

  // ======== 世界 ========
  世界: z.object({
    当前时间: z.string().describe('格式: XXX年X月 时辰'),
    当前地点: z.string(),
    当前剧本: z.enum(['S1黄巾起义', 'S2讨伐董卓']),
    天气: z.string().prefault('晴'),
    近期事件: z.array(
      z.object({
        事件名: z.string(),
        简述: z.string(),
        日期: z.string(),
      })
    ),
  }),

  // ======== 主角 ========
  主角: z.object({
    // --- 与角色数据共用的战斗字段 ---
    六维: 六维,
    当前生命值: z.coerce.number(),
    当前体力值: z.coerce.number(),
    装备: 装备栏,
    状态: 状态记录,
    // --- 主角用完整版武技/专长 ---
    武技: z.record(z.string().describe('武技名'), 武技条目_完整),
    专长: z.record(z.string().describe('专长名'), 专长条目_完整),
    // --- 主角专属字段 ---
    物品栏: z.record(
      z.string().describe('物品名'),
      z.object({
        品质: 装备品质枚举.or(z.literal('无')).prefault('无'),
        描述: z.string(),
        数量: z.coerce.number().prefault(1),
      })
    ),
    声望: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
    金钱: z.coerce.number().transform(v => Math.max(v, 0)),
    积分: z.coerce.number().transform(v => Math.max(v, 0)),
    官职: z.string().prefault('无'),
    爵位: z.string().prefault('无'),
    后宫和谐度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(100),
  }),

  // ======== 势力 ========
  势力: z.object({
    名称: z.string().prefault('无'),
    规模: z.enum(['无', '草莽', '县级', '郡级', '州级', '霸主', '帝国']).prefault('无'),
    正统性: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    情报网: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    金钱: z.coerce.number().transform(v => Math.max(v, 0)).prefault(0),
    粮草: z.coerce.number().transform(v => Math.max(v, 0)).prefault(0),

    城池: z.record(
      z.string().describe('城池名'),
      z.object({
        等级: z.enum(['村落', '县城', '郡城', '州城', '雄城', '帝都']),
        城防: z.coerce.number().transform(v => Math.max(v, 0)),
        人口: z.coerce.number().transform(v => Math.max(v, 0)),
        农业: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
        商业: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
        民心: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
        治安: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
        繁荣度: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
        太守: z.string().prefault('无'),
        设施: z.array(z.string()).prefault([]),
      }).transform(data => {
        const base = 城池基础[data.等级];
        data.城防 = _.clamp(data.城防, 0, base.城防上限);
        const 官府数量 = data.设施.filter(s => s === '官府').length;
        data._城防上限 = base.城防上限;
        data._驻军上限 = base.驻军上限;
        data._防御系数 = base.防御系数;
        data._城池防御力 = Math.floor(data.城防 * base.防御系数);
        data._月税收 = Math.floor(base.税收 * (1 + data.商业 / 100) * (1 + data.民心 / 200));
        data._月产粮 = Math.floor(base.产粮 * (1 + data.农业 / 100) * (1 + data.民心 / 200));
        data._指令槽 = base.指令槽 + Math.min(官府数量, 2);
        return data;
      })
    ),

    军队: z.record(
      z.string().describe('部队名'),
      z.object({
        兵种: z.string(),
        等级: z.enum(['新兵', '普通', '老兵', '精锐', '特殊兵种']),
        兵力: z.coerce.number().transform(v => Math.max(v, 0)),
        士气: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
        疲惫: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
        装备等级: z.enum(['简陋', '普通', '精良', '上等', '精锐']),
        统属将领: z.string(),
        驻扎地: z.string(),
        训练进度: z.coerce.number().prefault(0).describe('当前等级训练已投入月数'),
        阵型: z.enum(['无', '锋矢阵', '鹤翼阵', '鱼鳞阵', '方圆阵', '长蛇阵', '雁行阵', '偃月阵']).prefault('无'),
      }).transform(data => {
        data._士气等级 = 士气等级(data.士气);
        data._疲惫等级 = 疲惫等级(data.疲惫);
        const 阵型 = 阵型数据[data.阵型] || 阵型数据['无'];
        data._阵型攻击修正 = 阵型.攻击;
        data._阵型防御修正 = 阵型.防御;
        return data;
      })
    ),

    外交: z.record(
      z.string().describe('势力名'),
      z.coerce.number().transform(v => _.clamp(v, 0, 100))
    ).describe('势力名→关系值'),

    政策: z.object({
      当前研究: z.string().prefault('无'),
      研究进度: z.coerce.number().prefault(0),
      富国: z.coerce.number().transform(v => _.clamp(v, 0, 5)).prefault(0),
      强兵: z.coerce.number().transform(v => _.clamp(v, 0, 5)).prefault(0),
      霸道: z.coerce.number().transform(v => _.clamp(v, 0, 5)).prefault(0),
      王道: z.coerce.number().transform(v => _.clamp(v, 0, 5)).prefault(0),
    }),
  }),

  // ======== NPC ========
  NPC: z.record(
    z.string().describe('NPC名'),
    z.object({
      品质: 品质枚举,
      阵营: z.string(),
      定位: z.string(),
      好感: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
      简述: z.string().prefault(''),
      羁绊: z.record(
        z.string().describe('NPC名'),
        z.string().describe('关系描述')
      ).prefault({}),
      角色数据: 角色数据.optional(),
      武将信息: 武将信息.optional(),
      美人属性: 美人属性.optional(),
    })
  ),

  // ======== 任务 ========
  任务: z.record(
    z.string().describe('任务名'),
    z.object({
      类型: z.enum(['主线', '支线', '隐藏', '史诗', '成就', '委托']),
      状态: z.enum(['可接取', '进行中', '可提交', '已完成', '已失败', '已过期']),
      时限: z.string().prefault('无'),
      目标: z.record(
        z.string().describe('目标描述'),
        任务目标
      ),
    })
  ),

  // ======== 商城 ========
  商城: z.record(
    z.string().describe('商品名'),
    商品条目
  ),

}).transform(data => {
  // ===== 顶层 transform：跨模块计算 =====

  // A. 近期事件：保留最近5条
  if (Array.isArray(data.世界.近期事件)) {
    data.世界.近期事件 = data.世界.近期事件.slice(-5);
  }

  // B. 主角派生值（原 主角.transform）
  角色数据Transform(data.主角);
  data.主角._声望称号 = 声望称号(data.主角.声望);
  data.主角._和谐等级 = 和谐等级(data.主角.后宫和谐度);

  // C. 物品栏：数量≤0 自动移除
  data.主角.物品栏 = _.pickBy(data.主角.物品栏, ({ 数量 }) => 数量 > 0);

  // D. NPC：等级标签 + 阵亡武将自动移除
  const 阵亡NPC = [];
  for (const [name, npc] of Object.entries(data.NPC)) {
    if (npc.武将信息 && npc.武将信息.当前状态 === '阵亡') {
      阵亡NPC.push(name);
      continue;
    }
    if (npc.武将信息) {
      npc._忠诚等级 = 忠诚等级(npc.好感);
    } else if (npc.美人属性) {
      npc._好感等级 = 好感等级(npc.好感);
    } else {
      npc._交情等级 = 交情等级(npc.好感);
    }
  }
  for (const name of 阵亡NPC) delete data.NPC[name];

  // E. 任务：非活跃状态自动移除
  for (const [name, task] of Object.entries(data.任务)) {
    if (!['可接取', '进行中', '可提交'].includes(task.状态)) {
      delete data.任务[name];
    }
  }

  // 1. 外交关系等级标签
  if (data.势力.外交) {
    data.势力._外交等级 = _.mapValues(data.势力.外交, v => 外交等级(v));
  }

  // 2. 势力月收入汇总
  const 城池列表 = Object.values(data.势力.城池 || {});
  if (城池列表.length > 0) {
    data.势力._月总税收 = _.sumBy(城池列表, '_月税收');
    data.势力._月总产粮 = _.sumBy(城池列表, '_月产粮');
  }

  // 3. 军队综合战力 + 月维护估算
  const 军队列表 = Object.entries(data.势力.军队 || {});
  if (军队列表.length > 0) {
    let 总军饷 = 0;
    let 总粮草 = 0;

    for (const [名称, 部队] of 军队列表) {
      const 将领名 = 部队.统属将领;
      let 将领统率加值 = 0;

      if (将领名 && data.NPC[将领名] && data.NPC[将领名].角色数据) {
        将领统率加值 = data.NPC[将领名].角色数据.六维._统率加值;
      }

      const 统率系数值 = Math.round(统率系数(将领统率加值) * 100) / 100;

      部队._统率系数 = 统率系数值;
      部队._综合战力 = Math.floor(
        部队.兵力
        * (等级系数[部队.等级] || 0.8)
        * (军队装备系数[部队.装备等级] || 1.0)
        * 士气系数(部队.士气)
        * 疲惫系数(部队.疲惫)
        * 统率系数值
      );
      部队._攻击战力 = Math.floor(部队._综合战力 * 部队._阵型攻击修正);
      部队._防御战力 = Math.floor(部队._综合战力 * 部队._阵型防御修正);

      总军饷 += Math.ceil(部队.兵力 / 1000) * (军饷基数[部队.等级] || 40);
      总粮草 += Math.ceil(部队.兵力 / 1000) * 10;
    }

    data.势力._总兵力 = _.sumBy(军队列表.map(e => e[1]), '兵力');
    data.势力._总战力 = _.sumBy(军队列表.map(e => e[1]), '_综合战力');
    data.势力._月军饷估算 = 总军饷;
    data.势力._月粮草消耗估算 = 总粮草;
  }

  return data;
});

// ===== 注册 =====
$(() => {
  registerMvuSchema(Schema);
});