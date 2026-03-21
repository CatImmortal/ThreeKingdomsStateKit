import {
  create世界,
  create势力,
  create势力集合,
  create军队战,
  create特殊动作条目,
  type 六维,
  type 状态总表,
  type 战斗数据,
  type 美人属性,
  type 武技条目,
  type NPC,
  type 主角,
  type 城池,
  type 军队,
  type 势力,
  type 势力集合,
  type 军队战,
  type 参战军队引用,
} from './state';
import {
  MAX_RECENT_EVENTS,
  交情等级,
  依赖等级,
  和谐等级,
  声望称号,
  好感等级,
  忠诚等级,
  敏感等级,
  数值,
  汇总装备加值,
  计算伤势,
  计算加值,
  属性等级,
  贞洁等级,
  城池基础,
  外交等级,
  士气等级,
  士气系数,
  疲惫等级,
  疲惫系数,
  统率系数,
  兵种适性修正,
  动作类型列表,
  军饷基数,
  军队装备系数,
  等级系数,
  阵型数据,
} from './rules';
import { 是否主角统军 } from './commander';

export function recompute六维(stats: 六维): 六维 {
  const next = _.cloneDeep(stats);
  next._武力加值 = 计算加值(next.武力);
  next._智力加值 = 计算加值(next.智力);
  next._统率加值 = 计算加值(next.统率);
  next._政治加值 = 计算加值(next.政治);
  next._魅力加值 = 计算加值(next.魅力);
  next._体质加值 = 计算加值(next.体质);
  next._武力等级 = 属性等级(next.武力);
  next._智力等级 = 属性等级(next.智力);
  next._统率等级 = 属性等级(next.统率);
  next._政治等级 = 属性等级(next.政治);
  next._魅力等级 = 属性等级(next.魅力);
  next._体质等级 = 属性等级(next.体质);
  return next;
}

export function 计算武技动作类型(type: 武技条目['类型']): 武技条目['_动作类型'] {
  if (type === '攻击') return 动作类型列表[0];
  if (type === '反击') return 动作类型列表[2];
  return 动作类型列表[1];
}

export function recompute武技条目(data: 武技条目): 武技条目 {
  const next = _.cloneDeep(data);
  next._动作类型 = 计算武技动作类型(next.类型);
  return next;
}

export function recompute战斗数据(data: 战斗数据, 六维数据: 六维): 战斗数据 {
  const next = _.cloneDeep(data);
  next.武技 = _.mapValues(next.武技 || {}, item => recompute武技条目(item));
  next.特殊动作 = _.mapValues(next.特殊动作 || {}, item => create特殊动作条目(item));

  const 基础生命上限 = (六维数据._体质加值 ?? 0) * 5;
  const 基础体力上限 = (六维数据._体质加值 ?? 0) * 8;
  const 生命上限 = Math.max(0, 基础生命上限 + 数值(next.生命上限加成值));
  const 体力上限 = Math.max(0, 基础体力上限 + 数值(next.体力上限加成值));
  next.当前生命值 = _.clamp(数值(next.当前生命值), 0, 生命上限);
  next.当前体力值 = _.clamp(数值(next.当前体力值), 0, 体力上限);
  next._生命上限基础值 = 基础生命上限;
  next._体力上限基础值 = 基础体力上限;
  next._生命值上限 = 生命上限;
  next._体力值上限 = 体力上限;

  const 伤势 = 计算伤势(next.当前生命值, 生命上限);
  next._伤势 = 伤势._伤势;
  next._伤势减值 = 伤势._伤势减值;

  const 装备汇总 = 汇总装备加值(next.装备);
  next._先攻基础值 = Math.floor((六维数据._武力加值 ?? 0) / 4) + 装备汇总.先攻;
  next._攻击基础值 = (六维数据._武力加值 ?? 0) + 装备汇总.攻击;
  next._伤害基础值 = 六维数据._武力加值 ?? 0;
  next._防御DC基础值 = 40 + Math.floor((六维数据._武力加值 ?? 0) * 0.8) + 装备汇总.防御DC;
  next._伤害减免基础值 = 装备汇总.减免;

  return next;
}

export function recompute主角战斗数据(data: 主角): 主角 {
  const next = _.cloneDeep(data);
  next.六维 = recompute六维(next.六维);
  next.战斗数据 = recompute战斗数据(next.战斗数据, next.六维);
  return next;
}

export function recompute美人属性(data: 美人属性, npc好感?: number): 美人属性 {
  const next = _.cloneDeep(data);
  next._依赖等级 = 依赖等级(next.依赖度);
  next._敏感等级 = 敏感等级(next.敏感度);
  next._贞洁等级 = 贞洁等级(next.贞洁度);
  next._好感等级 = 好感等级(数值(npc好感));
  return next;
}

export function recomputeNPC(data: NPC): NPC {
  const next = _.cloneDeep(data);
  next.六维 = recompute六维(next.六维);
  if (next.战斗数据) {
    next.战斗数据 = recompute战斗数据(next.战斗数据, next.六维);
  }
  if (next.武将信息) {
    next.武将信息 = _.cloneDeep(next.武将信息);
    next.武将信息._忠诚等级 = 忠诚等级(next.武将信息.忠诚);
  }
  if (next.美人属性) {
    next.美人属性 = recompute美人属性(next.美人属性, next.好感);
  }

  delete next._交情等级;
  if (!next.美人属性) {
    next._交情等级 = 交情等级(next.好感);
  }

  return next;
}

export function recompute主角(data: 主角): 主角 {
  const next = recompute主角战斗数据(data);
  if (next.战斗数据._伤势 === '濒死') {
    next.战斗数据._防御DC基础值 = 30;
  }
  next.物品栏 = _.pickBy(next.物品栏 || {}, ({ 数量 }) => Math.max(0, 数值(数量)) > 0);
  next._声望称号 = 声望称号(next.声望);
  next._和谐等级 = 和谐等级(next.后宫和谐度);
  return next;
}

export function recompute城池(data: 城池): 城池 {
  const next = _.cloneDeep(data);
  const base = 城池基础[next.等级] ?? 城池基础.村落;
  const 官府数量 = (next.设施 || []).filter(item => item === '官府').length;
  next.城防 = _.clamp(数值(next.城防), 0, base.城防上限);
  next._城防上限 = base.城防上限;
  next._驻军上限 = base.驻军上限;
  next._防御系数 = base.防御系数;
  next._城池防御力 = Math.floor(next.城防 * base.防御系数);
  next._月税收 = Math.floor(base.税收 * (1 + next.商业 / 100) * (1 + next.民心 / 200));
  next._月产粮 = Math.floor(base.产粮 * (1 + next.农业 / 100) * (1 + next.民心 / 200));
  next._指令槽 = base.指令槽 + Math.min(官府数量, 2);
  return next;
}

export function recompute军队(data: 军队, state?: Pick<状态总表, 'NPC' | '主角'>): 军队 {
  const next = _.cloneDeep(data);
  next._士气等级 = 士气等级(next.士气);
  next._疲惫等级 = 疲惫等级(next.疲惫);
  const 阵型 = 阵型数据[next.阵型] ?? 阵型数据.无;
  next._阵型攻击修正 = 阵型.攻击;
  next._阵型防御修正 = 阵型.防御;

  const 将领名 = String(next.统属将领 || '').trim();
  const 主角统军 = 是否主角统军(将领名);
  const 将领统率加值 = 主角统军
    ? state?.主角?.六维._统率加值 ?? 0
    : 将领名
      ? state?.NPC?.[将领名]?.六维._统率加值 ?? 0
      : 0;
  const 兵种适性值 = 主角统军
    ? state?.主角?.兵种适性?.[next.兵种] ?? 40
    : 将领名
      ? state?.NPC?.[将领名]?.武将信息?.兵种适性?.[next.兵种] ?? 40
      : 40;
  const 统率系数值 = Math.round(统率系数(将领统率加值) * 100) / 100;
  const 兵种适性加成 = 兵种适性修正(兵种适性值);
  next._统率系数 = 统率系数值;
  next._综合战力 = Math.floor(
    next.兵力 *
      (等级系数[next.等级] ?? 0.8) *
      (军队装备系数[next.装备等级] ?? 1.0) *
      士气系数(next.士气) *
      疲惫系数(next.疲惫) *
      统率系数值 *
      (1 + 兵种适性加成),
  );
  return next;
}

export function recompute势力(data: 势力, state?: Pick<状态总表, 'NPC' | '主角'>): 势力 {
  const next = _.cloneDeep(data);
  next.城池 = _.mapValues(next.城池 || {}, item => recompute城池(item));
  next.军队 = _.mapValues(next.军队 || {}, item => recompute军队(item, state));
  next._外交等级 = _.mapValues(next.外交 || {}, value => 外交等级(value));

  const 城池列表 = Object.values(next.城池 || {});
  next._月总税收 = _.sumBy(城池列表, item => item._月税收 ?? 0);
  next._月总产粮 = _.sumBy(城池列表, item => item._月产粮 ?? 0);

  const 军队列表 = Object.values(next.军队 || {});
  next._总兵力 = _.sumBy(军队列表, item => item.兵力 ?? 0);
  next._总战力 = _.sumBy(军队列表, item => item._综合战力 ?? 0);
  next._月军饷估算 = _.sumBy(军队列表, item => Math.ceil((item.兵力 ?? 0) / 1000) * (军饷基数[item.等级] ?? 40));
  next._月粮草消耗估算 = _.sumBy(军队列表, item => Math.ceil((item.兵力 ?? 0) / 1000) * 10);
  return next;
}

export function recompute势力集合(data: 势力集合, state?: Pick<状态总表, 'NPC' | '主角'>): 势力集合 {
  return _.mapValues(data || {}, faction => recompute势力(create势力(faction), state));
}

function 查找参战军队总值(
  refs: Record<string, 参战军队引用>,
  势力集合: 状态总表['势力'],
  field: '_综合战力' | '兵力',
): number {
  return Object.values(refs).reduce((sum, ref) => {
    if (ref.状态 !== '参战') return sum;
    const faction = 势力集合[ref.势力名称];
    const army = faction?.军队?.[ref.名称];
    if (!army) return sum;
    return sum + (field === '兵力' ? army.兵力 ?? 0 : army._综合战力 ?? 0);
  }, 0);
}

export function recompute军队战(data: 军队战, state: Pick<状态总表, '势力'>): 军队战 {
  const next = _.cloneDeep(data);
  next._攻方总兵力 = 查找参战军队总值(next.攻方军队, state.势力, '兵力');
  next._守方总兵力 = 查找参战军队总值(next.守方军队, state.势力, '兵力');
  next._攻方总战力 = 查找参战军队总值(next.攻方军队, state.势力, '_综合战力');
  next._守方总战力 = 查找参战军队总值(next.守方军队, state.势力, '_综合战力');
  return next;
}

export function recompute全局(state: 状态总表): 状态总表 {
  const next = _.cloneDeep(state);
  next.世界 = create世界(next.世界);
  next.世界.近期事件 = next.世界.近期事件.slice(-MAX_RECENT_EVENTS);
  next.主角 = recompute主角(next.主角);
  next.NPC = _.mapValues(next.NPC || {}, npc => recomputeNPC(npc));
  next.势力 = recompute势力集合(create势力集合(next.势力), { NPC: next.NPC, 主角: next.主角 });
  next.任务 = _.pickBy(next.任务 || {}, task => ['可接取', '进行中', '可提交'].includes(task.状态));
  next.军队战 = next.军队战 ? recompute军队战(create军队战(next.军队战), { 势力: next.势力 }) : null;
  next.meta.updatedAt = new Date().toISOString();
  return next;
}
