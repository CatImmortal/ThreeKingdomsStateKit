import {
  create世界,
  type 六维,
  type 状态总表,
  type 角色战斗数据,
  type 美人属性,
  type NPC,
  type 主角,
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
  贞洁等级,
} from './rules';

export function recompute六维(stats: 六维): 六维 {
  const next = _.cloneDeep(stats);
  next._武力加值 = 计算加值(next.武力);
  next._智力加值 = 计算加值(next.智力);
  next._统率加值 = 计算加值(next.统率);
  next._政治加值 = 计算加值(next.政治);
  next._魅力加值 = 计算加值(next.魅力);
  next._体质加值 = 计算加值(next.体质);
  return next;
}

export function recompute角色战斗数据(data: 角色战斗数据): 角色战斗数据 {
  const next = _.cloneDeep(data);
  next.六维 = recompute六维(next.六维);

  const 生命上限 = (next.六维._体质加值 ?? 0) * 5;
  const 体力上限 = (next.六维._体质加值 ?? 0) * 8;
  next.当前生命值 = _.clamp(数值(next.当前生命值), 0, 生命上限);
  next.当前体力值 = _.clamp(数值(next.当前体力值), 0, 体力上限);
  next._生命上限 = 生命上限;
  next._体力上限 = 体力上限;

  const 伤势 = 计算伤势(next.当前生命值, 生命上限);
  next._伤势 = 伤势._伤势;
  next._战斗减值 = 伤势._战斗减值;

  const 装备汇总 = 汇总装备加值(next.装备);
  next._先攻值 = Math.floor((next.六维._武力加值 ?? 0) / 4) + 装备汇总.先攻 + (next._战斗减值 ?? 0);
  next._攻击基础值 = (next.六维._武力加值 ?? 0) + 装备汇总.攻击 + (next._战斗减值 ?? 0);
  next._伤害基础值 = (next.六维._武力加值 ?? 0) + (next._战斗减值 ?? 0);
  next._防御DC = 40 + Math.floor((next.六维._武力加值 ?? 0) * 0.75) + 装备汇总.防御DC + (next._战斗减值 ?? 0);
  next._伤害减免 = 装备汇总.减免;

  return next;
}

export function recompute美人属性(data: 美人属性): 美人属性 {
  const next = _.cloneDeep(data);
  next._依赖等级 = 依赖等级(next.依赖度);
  next._敏感等级 = 敏感等级(next.敏感度);
  next._贞洁等级 = 贞洁等级(next.贞洁度);
  return next;
}

export function recomputeNPC(data: NPC): NPC {
  const next = _.cloneDeep(data);
  if (next.角色数据) {
    next.角色数据 = recompute角色战斗数据(next.角色数据);
  }
  if (next.美人属性) {
    next.美人属性 = recompute美人属性(next.美人属性);
  }

  delete next._忠诚等级;
  delete next._好感等级;
  delete next._交情等级;

  if (next.武将信息) {
    next._忠诚等级 = 忠诚等级(next.好感);
  } else if (next.美人属性) {
    next._好感等级 = 好感等级(next.好感);
  } else {
    next._交情等级 = 交情等级(next.好感);
  }

  return next;
}

export function recompute主角(data: 主角): 主角 {
  const next = recompute角色战斗数据(data) as 主角;
  next.物品栏 = _.pickBy(next.物品栏 || {}, ({ 数量 }) => Math.max(0, 数值(数量)) > 0);
  next._声望称号 = 声望称号(next.声望);
  next._和谐等级 = 和谐等级(next.后宫和谐度);
  return next;
}

export function recompute全局(state: 状态总表): 状态总表 {
  const next = _.cloneDeep(state);
  next.世界 = create世界(next.世界);
  next.世界.近期事件 = next.世界.近期事件.slice(-MAX_RECENT_EVENTS);
  next.主角 = recompute主角(next.主角);
  next.NPC = _.mapValues(next.NPC || {}, npc => recomputeNPC(npc));
  next.任务 = _.pickBy(next.任务 || {}, task => ['可接取', '进行中', '可提交'].includes(task.状态));
  next.meta.updatedAt = new Date().toISOString();
  return next;
}
