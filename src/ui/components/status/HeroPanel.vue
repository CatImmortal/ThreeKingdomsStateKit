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
        <div class="tk-panel-inline-note">伤势：{{ player._伤势 || '完好' }}　减值：{{ player._伤势减值 ?? 0 }}</div>
        <div class="tk-panel-kv-grid">
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
      <div class="tk-panel-list">
        <div v-for="item in currentList" :key="item.title + item.meta" class="tk-panel-list-item">
          <div class="tk-panel-list-title">{{ item.title }}</div>
          <div class="tk-panel-list-meta">{{ item.meta }}</div>
          <div v-if="item.desc" class="tk-panel-list-desc">{{ item.desc }}</div>
        </div>
        <div v-if="currentList.length === 0" class="tk-panel-empty">{{ currentEmpty }}</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { 状态总表 } from '../../../state';
import AptitudeRadarChart from './AptitudeRadarChart.vue';
import BoundedBar from './BoundedBar.vue';
import RadarChart from './RadarChart.vue';

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
const 后宫项列表 = computed(() => Object.entries(props.state.NPC || {}).filter(([, npc]) => Boolean(npc.美人属性?.是否已攻略)).map(([, npc]) => ({ title: npc.名称 || '未命名角色', meta: `${npc.美人属性?.位份 || '未纳入'} / ${npc.美人属性?._依赖等级 || npc.美人属性?.依赖度 || 0}`, desc: `${npc.美人属性?.当前状态 || '正常'} · ${npc.简述 || '无'}` })));
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
const 武将项列表 = computed(() => Object.entries(props.state.NPC || {}).filter(([, npc]) => Boolean(npc.武将信息?.是否已招募)).map(([, npc]) => ({ title: npc.名称 || '未命名角色', meta: `${npc.武将信息?.官职 || '无官职'} / ${npc.武将信息?.当前状态 || '待命'}`, desc: `${npc.所在地 || '未知地点'} · ${npc.简述 || '无'}` })));
const formatAptitude = (aptitude?: Record<string, number>) => Object.entries(aptitude || {}).map(([兵种, 数值]) => `${兵种}:${数值}`).join(' / ') || '无';
const lists = computed(() => ({
  equip: Object.entries(player.value.装备 || {}).map(([slot, item]) => !item || item === '无' ? ({ title: slot, meta: '未装备', desc: '' }) : ({ title: `${slot} · ${item.名称}`, meta: `${item.品质} / ${item.类型}`, desc: item.描述 || item.其他效果 || '无' })),
  bag: Object.entries(player.value.物品栏 || {}).map(([, item]) => ({ title: item.名称 || '未命名物品', meta: `${item.品质} / 数量:${item.数量}`, desc: item.描述 || '无' })),
  skills: Object.entries(player.value.武技 || {}).map(([, skill]) => ({ title: skill.名称 || '未命名武技', meta: `${skill.等级} / ${skill.类型}`, desc: `熟练度：${skill.熟练度 ?? 0}　体力消耗：${skill.体力消耗 ?? 0}${skill.效果 ? `\n${skill.效果}` : ''}` })),
  perks: Object.entries(player.value.专长 || {}).map(([, perk]) => ({ title: perk.名称 || '未命名专长', meta: perk.等级 || '未定级', desc: perk.效果 || '无' })),
  consorts: 后宫项列表.value,
  generals: 武将项列表.value,
}));
type ListTabKey = 'equip' | 'bag' | 'skills' | 'perks' | 'consorts' | 'generals';
const titles: Record<ListTabKey, string> = { equip: '装备栏', bag: '背包', skills: '武技栏', perks: '专长栏', consorts: '后宫列表', generals: '已招募武将' };
const empties: Record<ListTabKey, string> = { equip: '暂无装备', bag: '暂无物品', skills: '暂无武技', perks: '暂无专长', consorts: '暂无后宫成员', generals: '暂无已招募武将' };
const currentListKey = computed<ListTabKey>(() => (activeTab.value === 'attrs' ? 'equip' : activeTab.value) as ListTabKey);
const currentTitle = computed(() => titles[currentListKey.value]);
const currentEmpty = computed(() => empties[currentListKey.value] || '暂无内容');
const currentList = computed(() => lists.value[currentListKey.value] || []);
const ratio = (current: number, max?: number) => `${Math.max(0, Math.min(100, Math.round((current / Math.max(max || 100, 1)) * 100)))}%`;
</script>
