<template>
  <div>
    <div class="tk-subtabs">
      <button v-for="tab in tabs" :key="tab.key" type="button" class="tk-subtab-label" :class="{ 'is-active': activeTab === tab.key }" @click="activeTab = tab.key">{{ tab.label }}</button>
    </div>
    <div v-if="activeTab === 'attrs'" class="tk-panel-page-grid cols-2">
      <section class="tk-panel-card">
        <div class="tk-panel-card-title">主角面板</div>
        <div class="tk-panel-bar-row"><div class="tk-panel-bar-label">生命</div><div class="tk-panel-bar"><span class="tk-panel-bar-fill is-hp" :style="{ width: ratio(player.当前生命值, player._生命值上限) }"></span></div><div class="tk-panel-bar-value">{{ player.当前生命值 }} / {{ player._生命值上限 ?? 0 }}</div></div>
        <div class="tk-panel-bar-row"><div class="tk-panel-bar-label">体力</div><div class="tk-panel-bar"><span class="tk-panel-bar-fill is-sp" :style="{ width: ratio(player.当前体力值, player._体力值上限) }"></span></div><div class="tk-panel-bar-value">{{ player.当前体力值 }} / {{ player._体力值上限 ?? 0 }}</div></div>
        <BoundedBar label="声望" :value="player.声望" :max="100" color-class="is-gold" />
        <div class="tk-panel-inline-note">伤势：<span :style="伤势文本样式(player._伤势)">{{ player._伤势 || '完好' }}</span>　减值：{{ player._伤势减值 ?? 0 }}</div>
        <div class="tk-panel-kv-grid" style="margin-top: 18px;">
          <div v-for="item in resourceItems" :key="item.label" class="tk-panel-kv" :class="{ 'is-accent': item.accent }"><span class="tk-panel-k">{{ item.label }}</span><span class="tk-panel-v">{{ item.value }}</span></div>
        </div>
      </section>
      <section class="tk-panel-card">
        <div class="tk-panel-card-title">六维与战斗</div>
        <RadarChart :stats="player.六维" />
        <div class="tk-panel-kv-grid compact">
          <div v-for="item in battleItems" :key="item.label" class="tk-panel-kv"><span class="tk-panel-k">{{ item.label }}</span><span class="tk-panel-v">{{ item.value }}</span></div>
        </div>
      </section>
      <section class="tk-panel-card">
        <div class="tk-panel-card-title">兵种适性</div>
        <AptitudeRadarChart :aptitude="player.兵种适性" />
      </section>
    </div>
    <section v-else class="tk-panel-card">
      <div class="tk-panel-card-title">{{ currentTitle }}</div>
      <div v-if="currentListKey === 'bag'" class="tk-panel-page-grid" style="grid-template-columns: repeat(6, minmax(0, 1fr));">
        <div v-for="item in currentList" :key="item.title + item.meta" class="tk-panel-kv" :style="bagCellStyle(item)">
          <span class="tk-panel-k" :style="物品品质文本样式(item.meta)">{{ item.meta }}</span>
          <span class="tk-panel-v">{{ item.title }}</span>
          <span class="tk-panel-inline-note" style="margin-top: 6px;">数量 × {{ item.quantity ?? 0 }}</span>
          <span class="tk-panel-inline-note" style="margin-top: 6px; line-height: 1.45;">{{ item.desc }}</span>
        </div>
        <div v-if="currentList.length === 0" class="tk-panel-empty" style="grid-column: 1 / -1;">{{ currentEmpty }}</div>
      </div>
      <div v-else class="tk-panel-list">
        <div v-for="item in currentList" :key="item.title + item.meta" class="tk-panel-list-item">
          <div class="tk-panel-list-title">{{ item.title }}</div>
          <div v-if="item.meta" class="tk-panel-list-meta">
            <template v-if="currentListKey === 'equip'">
              <span :style="物品品质文本样式(item.metaPrimary)">{{ item.metaPrimary }}</span>
              <span v-if="item.metaSuffix"> / {{ item.metaSuffix }}</span>
            </template>
            <template v-else-if="currentListKey === 'skills'">
              <span :style="武技等级文本样式(item.metaPrimary)">{{ item.metaPrimary }}</span>
              <span v-if="item.metaSuffix"> / {{ item.metaSuffix }}</span>
            </template>
            <template v-else-if="currentListKey === 'perks'">
              <span :style="属性等级文本样式(item.meta)">{{ item.meta }}</span>
            </template>
            <template v-else>{{ item.meta }}</template>
          </div>
          <template v-if="currentListKey === 'consorts' || currentListKey === 'generals'">
            <div style="margin-top: 8px;">
              <BoundedBar v-for="bar in item.bars || []" :key="bar.label" :label="bar.label" :value="bar.value" :max="100" :color-class="bar.colorClass" />
            </div>
            <div class="tk-panel-kv-grid compact" style="margin-top: 8px;">
              <div v-for="detail in item.details || []" :key="detail.label" class="tk-panel-kv"><span class="tk-panel-k">{{ detail.label }}</span><span class="tk-panel-v">{{ detail.value }}</span></div>
            </div>
            <div v-if="item.desc" class="tk-panel-list-desc">{{ item.desc }}</div>
            <div class="tk-panel-actions">
              <button type="button" class="tk-panel-action-btn" @click="openNpcDetailWindow(item.npcName || item.title)">查看详情</button>
            </div>
          </template>
          <div v-else-if="item.desc" class="tk-panel-list-desc">{{ item.desc }}</div>
        </div>
        <div v-if="currentList.length === 0" class="tk-panel-empty">{{ currentEmpty }}</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { 状态总表 } from '../../../state';
import { openNpcDetailWindow } from '../../store';
import AptitudeRadarChart from './AptitudeRadarChart.vue';
import BoundedBar from './BoundedBar.vue';
import RadarChart from './RadarChart.vue';
import { 品质文本样式, 属性等级文本样式, 伤势文本样式, 物品品质文本样式, 武技等级文本样式 } from './qualityStyles';

const props = defineProps<{ state: 状态总表 }>();
const player = computed(() => props.state.主角);
const tabs = [
  { key: 'attrs', label: '属性' },
  { key: 'equip', label: '装备' },
  { key: 'bag', label: '背包' },
  { key: 'skills', label: '武技' },
  { key: 'perks', label: '专长' },
  { key: 'consorts', label: '后宫' },
  { key: 'generals', label: '武将' },
] as const;
const activeTab = ref<(typeof tabs)[number]['key']>('attrs');
type 列表项 = {
  title: string;
  meta: string;
  desc: string;
  details?: Array<{ label: string; value: string | number }>;
  bars?: Array<{ label: string; value: number; colorClass: string }>;
  npcName?: string;
  quality?: string;
  quantity?: number;
  metaPrimary?: string;
  metaSuffix?: string;
};
const 后宫项列表 = computed<列表项[]>(() => Object.entries(props.state.NPC || {}).filter(([, npc]) => Boolean(npc.美人属性?.位份 && npc.美人属性.位份 !== '未纳入')).map(([, npc]) => ({
  title: npc.名称 || '未命名角色',
  meta: '',
  desc: npc.简述 || '无',
  npcName: npc.名称 || '未命名角色',
  bars: [
    { label: `好感\n（${npc.美人属性?._好感等级 || String(npc.好感 ?? 0)}）`, value: npc.好感 ?? 0, colorClass: 'is-gold' },
    { label: `依赖度\n（${npc.美人属性?._依赖等级 || '无'}）`, value: npc.美人属性?.依赖度 ?? 0, colorClass: 'is-purple' },
    { label: `敏感度\n（${npc.美人属性?._敏感等级 || '无'}）`, value: npc.美人属性?.敏感度 ?? 0, colorClass: 'is-rose' },
    { label: `贞洁度\n（${npc.美人属性?._贞洁等级 || '无'}）`, value: npc.美人属性?.贞洁度 ?? 0, colorClass: 'is-cyan' },
  ],
  details: [
    { label: '位份', value: npc.美人属性?.位份 || '未纳入' },
    { label: '性格', value: npc.美人属性?.性格 || '无' },
    { label: '当前状态', value: npc.美人属性?.当前状态 || '正常' },
  ],
})));
const resourceItems = computed(() => [
  { label: '官职', value: player.value.官职 || '无', accent: true },
  { label: '爵位', value: player.value.爵位 || '无', accent: true },
  { label: '声望称号', value: player.value._声望称号 || '无' },
  ...(后宫项列表.value.length >= 2 ? [{ label: '和谐等级', value: player.value._和谐等级 || '无' }] : []),
  { label: '金钱', value: player.value.金钱 },
  { label: '积分', value: player.value.积分 },
]);
const battleItems = computed(() => [
  { label: '先攻', value: player.value._先攻基础值 ?? 0 },
  { label: '攻击', value: player.value._攻击基础值 ?? 0 },
  { label: '伤害', value: player.value._伤害基础值 ?? 0 },
  { label: '防御DC', value: player.value._防御DC基础值 ?? 0 },
  { label: '伤害减免', value: player.value._伤害减免基础值 ?? 0 },
]);
const 武将项列表 = computed<列表项[]>(() => Object.entries(props.state.NPC || {}).filter(([, npc]) => Boolean(npc.武将信息?.是否已招募)).map(([, npc]) => ({
  title: npc.名称 || '未命名角色',
  meta: '',
  desc: `${npc.所在地 || '未知地点'} · ${npc.简述 || '无'}`,
  npcName: npc.名称 || '未命名角色',
  bars: [
    { label: `好感\n（${npc._交情等级 || String(npc.好感 ?? 0)}）`, value: npc.好感 ?? 0, colorClass: 'is-gold' },
    { label: `忠诚\n（${npc.武将信息?._忠诚等级 || '无'}）`, value: npc.武将信息?.忠诚 ?? 0, colorClass: 'is-cyan' },
    { label: '野心\n（数值）', value: npc.武将信息?.野心值 ?? 0, colorClass: 'is-rose' },
  ],
  details: [
    { label: '官职', value: npc.武将信息?.官职 || '无' },
    { label: '当前状态', value: npc.武将信息?.当前状态 || '待命' },
  ],
})));
type ListTabKey = 'equip' | 'bag' | 'skills' | 'perks' | 'consorts' | 'generals';
const lists = computed<Record<ListTabKey, 列表项[]>>(() => ({
  equip: Object.entries(player.value.装备 || {}).map(([slot, item]) => !item || item === '无'
    ? ({ title: slot, meta: '未装备', desc: '' })
    : ({ title: `${slot} · ${item.名称}`, meta: `${item.品质} / ${item.类型}`, metaPrimary: item.品质, metaSuffix: item.类型, desc: item.描述 || item.装备条目?.其他效果 || '无' })),
  bag: Object.entries(player.value.物品栏 || {}).map(([, item]) => ({ title: item.物品?.名称 || '未命名物品', meta: item.物品?.品质 || '凡品', desc: item.物品?.描述 || '无', quality: item.物品?.品质 || '凡品', quantity: item.数量 ?? 0 })),
  skills: Object.entries(player.value.武技 || {}).map(([, skill]) => ({ title: skill.名称 || '未命名武技', meta: `${skill.等级} / ${skill.类型}`, metaPrimary: skill.等级, metaSuffix: skill.类型, desc: `熟练度：${skill.熟练度 ?? 0}　体力消耗：${skill.体力消耗 ?? 0}${skill.效果 ? `\n${skill.效果}` : ''}` })),
  perks: Object.entries(player.value.专长 || {}).map(([, perk]) => ({ title: perk.名称 || '未命名专长', meta: perk.等级 || '未定级', desc: perk.效果 || '无' })),
  consorts: 后宫项列表.value,
  generals: 武将项列表.value,
}));
const titles: Record<ListTabKey, string> = { equip: '装备栏', bag: '背包', skills: '武技栏', perks: '专长栏', consorts: '后宫列表', generals: '已招募武将' };
const empties: Record<ListTabKey, string> = { equip: '暂无装备', bag: '暂无物品', skills: '暂无武技', perks: '暂无专长', consorts: '暂无后宫成员', generals: '暂无已招募武将' };
const currentListKey = computed<ListTabKey>(() => (activeTab.value === 'attrs' ? 'equip' : activeTab.value) as ListTabKey);
const currentTitle = computed(() => titles[currentListKey.value]);
const currentEmpty = computed(() => empties[currentListKey.value] || '暂无内容');
const currentList = computed(() => lists.value[currentListKey.value] || []);
const ratio = (current: number, max?: number) => `${Math.max(0, Math.min(100, Math.round((current / Math.max(max || 100, 1)) * 100)))}%`;

function bagCellStyle(item: 列表项): string {
  const styles: Record<string, string> = {
    凡品: 'border-color:rgba(148,163,184,.45);background:linear-gradient(180deg,rgba(71,85,105,.18),rgba(15,23,42,.18));',
    良品: 'border-color:rgba(74,222,128,.48);background:linear-gradient(180deg,rgba(34,197,94,.18),rgba(20,83,45,.18));',
    上品: 'border-color:rgba(96,165,250,.48);background:linear-gradient(180deg,rgba(59,130,246,.18),rgba(30,64,175,.18));',
    极品: 'border-color:rgba(192,132,252,.48);background:linear-gradient(180deg,rgba(168,85,247,.18),rgba(91,33,182,.18));',
    传说: 'border-color:rgba(251,191,36,.55);background:linear-gradient(180deg,rgba(245,158,11,.22),rgba(146,64,14,.18));',
    神话: 'border-color:rgba(250,204,21,.6);background:linear-gradient(180deg,rgba(234,179,8,.24),rgba(133,77,14,.2));',
  };
  return `min-height:112px;display:flex;flex-direction:column;justify-content:space-between;gap:6px;cursor:default;${styles[item.quality || '凡品'] || styles.凡品}`;
}
</script>
