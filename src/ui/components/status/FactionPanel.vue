<template>
  <div v-if="currentFaction" class="tk-panel-page-grid cols-2">
    <section class="tk-panel-card">
      <div class="tk-panel-card-title">势力总览</div>
      <div class="tk-panel-inline-note">当前展示势力：{{ currentFaction.名称 || '未命名势力' }}</div>
      <div class="tk-panel-kv-grid">
        <div v-for="item in summaryItems" :key="item.label" class="tk-panel-kv" :class="{ 'is-accent': item.accent }"><span class="tk-panel-k">{{ item.label }}</span><span class="tk-panel-v">{{ item.value }}</span></div>
      </div>
    </section>
    <section class="tk-panel-card">
      <div class="tk-panel-card-title">外交态势</div>
      <div class="tk-panel-kv-grid compact">
        <div v-for="item in diplomacyItems" :key="item.label" class="tk-panel-kv"><span class="tk-panel-k">{{ item.label }}</span><span class="tk-panel-v">{{ item.value }}</span></div>
        <div v-if="diplomacyItems.length === 0" class="tk-panel-empty">暂无外交数据</div>
      </div>
    </section>
    <section class="tk-panel-card cols-span-2">
      <div class="tk-panel-card-title">城池摘要</div>
      <div class="tk-panel-list">
        <div v-for="[id, city] in cities" :key="id" class="tk-panel-list-item">
          <div class="tk-panel-list-title">{{ city.名称 || '未命名城池' }}</div>
          <div class="tk-panel-list-meta">{{ city.等级 }} / 太守:{{ city.太守 || '无' }}</div>
          <div class="tk-panel-list-desc">税收:{{ city._月税收 ?? 0 }} · 产粮:{{ city._月产粮 ?? 0 }}</div>
        </div>
        <div v-if="cities.length === 0" class="tk-panel-empty">暂无城池数据</div>
      </div>
    </section>
  </div>
  <section v-else class="tk-panel-card"><div class="tk-panel-card-title">势力</div><div class="tk-panel-empty">当前没有势力数据</div></section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { 状态总表 } from '../../../state';
const props = defineProps<{ state: 状态总表 }>();
const currentFactionEntry = computed(() => Object.entries(props.state.势力 || {})[0] ?? null);
const currentFaction = computed(() => currentFactionEntry.value?.[1] ?? null);
const resolveFactionName = (factionId: string) => props.state.势力?.[factionId]?.名称 || '未命名势力';
const diplomacyItems = computed(() => Object.entries(currentFaction.value?.外交 || {}).slice(0, 8).map(([factionId, value]) => ({ label: resolveFactionName(factionId), value: `${value} / ${currentFaction.value?._外交等级?.[factionId] || '未知'}` })));
const cities = computed(() => Object.entries(currentFaction.value?.城池 || {}).slice(0, 8));
const summaryItems = computed(() => currentFaction.value ? [
  { label: '名称', value: currentFaction.value.名称 || '无', accent: true },
  { label: '规模', value: currentFaction.value.规模 || '无', accent: true },
  { label: '正统性', value: currentFaction.value.正统性 },
  { label: '情报网', value: currentFaction.value.情报网 },
  { label: '金钱', value: currentFaction.value.金钱 },
  { label: '粮草', value: currentFaction.value.粮草 },
  { label: '总兵力', value: currentFaction.value._总兵力 ?? 0 },
  { label: '总战力', value: currentFaction.value._总战力 ?? 0 },
  { label: '月税收', value: currentFaction.value._月总税收 ?? 0 },
  { label: '月产粮', value: currentFaction.value._月总产粮 ?? 0 },
  { label: '月军饷', value: currentFaction.value._月军饷估算 ?? 0 },
  { label: '月耗粮', value: currentFaction.value._月粮草消耗估算 ?? 0 },
] : []);
</script>
