<template>
  <div>
    <div v-if="subTabs.length > 0" class="tk-subtabs">
      <button v-for="tab in subTabs" :key="tab.key" type="button" class="tk-subtab-label" :class="{ 'is-active': activeTab === tab.key }" @click="activeTab = tab.key">{{ tab.label }}</button>
    </div>

    <div v-if="currentFaction">
      <section v-if="activeTab === 'overview'" class="tk-panel-card">
        <div class="tk-panel-card-title">势力总览</div>
        <div class="tk-panel-inline-note">当前展示势力：{{ currentFaction.名称 || '未命名势力' }}</div>
        <div class="tk-panel-kv-grid">
          <div v-for="item in summaryItems" :key="item.label" class="tk-panel-kv" :class="{ 'is-accent': item.accent }"><span class="tk-panel-k">{{ item.label }}</span><span class="tk-panel-v">{{ item.value }}</span></div>
        </div>
      </section>

      <section v-else-if="activeTab === 'cities'" class="tk-panel-card">
        <div class="tk-panel-card-title">城池</div>
        <div class="tk-panel-list">
          <div v-for="[名称, city] in cities" :key="名称" class="tk-panel-list-item">
            <div class="tk-panel-list-title">{{ city.名称 || '未命名城池' }}</div>
            <div class="tk-panel-list-meta">{{ city.等级 }} / 太守:{{ city.太守 || '无' }}</div>
            <div class="tk-panel-list-desc">税收:{{ city._月税收 ?? 0 }} · 产粮:{{ city._月产粮 ?? 0 }}</div>
          </div>
          <div v-if="cities.length === 0" class="tk-panel-empty">暂无城池数据</div>
        </div>
      </section>

      <div v-else-if="activeTab === 'armies'">
        <ArmyPanel :state="state" />
      </div>

      <section v-else-if="activeTab === 'diplomacy'" class="tk-panel-card">
        <div class="tk-panel-card-title">外交态势</div>
        <div class="tk-panel-kv-grid compact">
          <div v-for="item in diplomacyItems" :key="item.label" class="tk-panel-kv"><span class="tk-panel-k">{{ item.label }}</span><span class="tk-panel-v">{{ item.value }}</span></div>
          <div v-if="diplomacyItems.length === 0" class="tk-panel-empty">暂无外交数据</div>
        </div>
      </section>

      <section v-else class="tk-panel-card">
        <div class="tk-panel-card-title">政策</div>
        <div class="tk-panel-kv-grid compact">
          <div v-for="item in policyItems" :key="item.label" class="tk-panel-kv"><span class="tk-panel-k">{{ item.label }}</span><span class="tk-panel-v">{{ item.value }}</span></div>
        </div>
      </section>
    </div>

    <section v-else class="tk-panel-card"><div class="tk-panel-card-title">势力</div><div class="tk-panel-empty">当前没有势力数据</div></section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { 状态总表 } from '../../../state';
import ArmyPanel from './ArmyPanel.vue';

const props = defineProps<{ state: 状态总表 }>();
const state = computed(() => props.state);
const currentFactionEntry = computed(() => Object.entries(props.state.势力 || {})[0] ?? null);
const currentFaction = computed(() => currentFactionEntry.value?.[1] ?? null);
const subTabs = [
  { key: 'overview', label: '总览' },
  { key: 'cities', label: '城池' },
  { key: 'armies', label: '军队' },
  { key: 'diplomacy', label: '外交' },
  { key: 'policy', label: '政策' },
] as const;
const activeTab = ref<(typeof subTabs)[number]['key']>('overview');

watch(currentFaction, value => {
  if (!value) {
    activeTab.value = 'overview';
  }
});

const resolveFactionName = (势力名称: string) => props.state.势力?.[势力名称]?.名称 || 势力名称 || '未命名势力';
const diplomacyItems = computed(() => Object.entries(currentFaction.value?.外交 || {}).slice(0, 8).map(([势力名称, value]) => ({ label: resolveFactionName(势力名称), value: `${value} / ${currentFaction.value?._外交等级?.[势力名称] || '未知'}` })));
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
const policyItems = computed(() => currentFaction.value ? [
  { label: '当前研究', value: currentFaction.value.政策?.当前研究 || '无' },
  { label: '研究进度', value: currentFaction.value.政策?.研究进度 ?? 0 },
  { label: '富国', value: currentFaction.value.政策?.富国 ?? 0 },
  { label: '强兵', value: currentFaction.value.政策?.强兵 ?? 0 },
  { label: '霸道', value: currentFaction.value.政策?.霸道 ?? 0 },
  { label: '王道', value: currentFaction.value.政策?.王道 ?? 0 },
] : []);
</script>
