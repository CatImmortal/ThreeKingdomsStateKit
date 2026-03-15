<template>
  <div>
    <div v-if="factionTabs.length > 0" class="tk-subtabs">
      <button v-for="tab in factionTabs" :key="tab.key" type="button" class="tk-subtab-label" :class="{ 'is-active': activeFactionKey === tab.key }" @click="activeFactionKey = tab.key">{{ tab.label }}</button>
    </div>

    <div v-if="currentFaction">
      <div v-if="detailTabs.length > 0" class="tk-subtabs">
        <button v-for="tab in detailTabs" :key="tab.key" type="button" class="tk-subtab-label" :class="{ 'is-active': activeDetailTab === tab.key }" @click="activeDetailTab = tab.key">{{ tab.label }}</button>
      </div>

      <section v-if="activeDetailTab === 'overview'" class="tk-panel-card">
        <div class="tk-panel-card-title">势力总览</div>
        <div class="tk-panel-inline-note">当前展示势力：{{ currentFaction.名称 || '未命名势力' }}</div>
        <BoundedBar label="正统性" :value="currentFaction.正统性" :max="100" color-class="is-gold" />
        <BoundedBar label="情报网" :value="currentFaction.情报网" :max="100" color-class="is-cyan" />
        <div class="tk-panel-kv-grid">
          <div v-for="item in summaryItems" :key="item.label" class="tk-panel-kv" :class="{ 'is-accent': item.accent }"><span class="tk-panel-k">{{ item.label }}</span><span class="tk-panel-v">{{ item.value }}</span></div>
        </div>
      </section>

      <section v-else-if="activeDetailTab === 'cities'" class="tk-panel-card">
        <div class="tk-panel-card-title">城池</div>
        <div class="tk-panel-detail-list">
          <details v-for="[名称, city] in cities" :key="名称" class="tk-panel-detail">
            <summary><span>{{ city.名称 || '未命名城池' }}</span><span>{{ city.等级 }} / 太守:{{ city.太守 || '无' }}</span></summary>
            <div class="tk-panel-detail-body">
              <div class="tk-panel-page-grid cols-2" style="margin-top: 10px;">
                <section class="tk-panel-card">
                  <div class="tk-panel-card-title">基础信息</div>
                  <div class="tk-panel-kv-grid compact">
                    <div class="tk-panel-kv"><span class="tk-panel-k">名称</span><span class="tk-panel-v">{{ city.名称 || '未命名城池' }}</span></div>
                    <div class="tk-panel-kv"><span class="tk-panel-k">等级</span><span class="tk-panel-v">{{ city.等级 || '无' }}</span></div>
                    <div class="tk-panel-kv"><span class="tk-panel-k">太守</span><span class="tk-panel-v">{{ city.太守 || '无' }}</span></div>
                  </div>
                  <div class="tk-panel-inline-note">设施：{{ formatFacilities(city.设施) }}</div>
                </section>

                <section class="tk-panel-card">
                  <div class="tk-panel-card-title">城池雷达</div>
                  <CityRadarChart :city="city" />
                </section>

                <section class="tk-panel-card">
                  <div class="tk-panel-card-title">防务信息</div>
                  <div class="tk-panel-kv-grid compact">
                    <div class="tk-panel-kv"><span class="tk-panel-k">城防</span><span class="tk-panel-v">{{ city.城防 ?? 0 }}</span></div>
                    <div class="tk-panel-kv"><span class="tk-panel-k">城防上限</span><span class="tk-panel-v">{{ city._城防上限 ?? 0 }}</span></div>
                    <div class="tk-panel-kv"><span class="tk-panel-k">防御系数</span><span class="tk-panel-v">{{ city._防御系数 ?? 0 }}</span></div>
                    <div class="tk-panel-kv"><span class="tk-panel-k">城池防御力</span><span class="tk-panel-v">{{ city._城池防御力 ?? 0 }}</span></div>
                    <div class="tk-panel-kv"><span class="tk-panel-k">驻军上限</span><span class="tk-panel-v">{{ city._驻军上限 ?? 0 }}</span></div>
                  </div>
                </section>

                <section class="tk-panel-card">
                  <div class="tk-panel-card-title">产出信息</div>
                  <div class="tk-panel-kv-grid compact">
                    <div class="tk-panel-kv"><span class="tk-panel-k">月税收</span><span class="tk-panel-v">{{ city._月税收 ?? 0 }}</span></div>
                    <div class="tk-panel-kv"><span class="tk-panel-k">月产粮</span><span class="tk-panel-v">{{ city._月产粮 ?? 0 }}</span></div>
                    <div class="tk-panel-kv"><span class="tk-panel-k">指令槽</span><span class="tk-panel-v">{{ city._指令槽 ?? 0 }}</span></div>
                  </div>
                </section>
              </div>
            </div>
          </details>
          <div v-if="cities.length === 0" class="tk-panel-empty">暂无城池数据</div>
        </div>
      </section>

      <div v-else-if="activeDetailTab === 'armies'">
        <ArmyPanel :state="state" :faction="currentFaction" />
      </div>

      <section v-else-if="activeDetailTab === 'diplomacy'" class="tk-panel-card">
        <div class="tk-panel-card-title">外交态势</div>
        <div v-if="diplomacyItems.length > 0">
          <BoundedBar v-for="item in diplomacyItems" :key="item.label" :label="item.label" :value="item.numericValue" :max="100" color-class="is-cyan" />
        </div>
        <div v-else class="tk-panel-empty">暂无外交数据</div>
      </section>

      <section v-else class="tk-panel-card">
        <div class="tk-panel-card-title">政策</div>
        <div class="tk-panel-inline-note">当前研究：{{ currentFaction.政策?.当前研究 || '无' }}</div>
        <div>
          <BoundedBar label="富国" :value="currentFaction.政策?.富国 ?? 0" :max="5" color-class="is-gold" />
          <BoundedBar label="强兵" :value="currentFaction.政策?.强兵 ?? 0" :max="5" color-class="is-green" />
          <BoundedBar label="霸道" :value="currentFaction.政策?.霸道 ?? 0" :max="5" color-class="is-rose" />
          <BoundedBar label="王道" :value="currentFaction.政策?.王道 ?? 0" :max="5" color-class="is-purple" />
        </div>
        <div class="tk-panel-kv-grid">
          <div class="tk-panel-kv"><span class="tk-panel-k">研究进度</span><span class="tk-panel-v">{{ currentFaction.政策?.研究进度 ?? 0 }}</span></div>
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
import BoundedBar from './BoundedBar.vue';
import CityRadarChart from './CityRadarChart.vue';

const props = defineProps<{ state: 状态总表 }>();
const state = computed(() => props.state);
const factionEntries = computed(() => {
  const entries = Object.entries(props.state.势力 || {});
  const heroFaction = props.state.主角?.所属势力 || '';
  const heroIndex = entries.findIndex(([key, faction]) => key === heroFaction || faction.名称 === heroFaction);
  if (heroIndex <= 0) {
    return entries;
  }
  const [heroEntry] = entries.splice(heroIndex, 1);
  return [heroEntry, ...entries];
});
const factionTabs = computed(() => factionEntries.value.map(([key, faction]) => ({
  key,
  label: `${faction.名称 || '未命名势力'}/${faction.主公 || '无主公'}/${faction.规模 || '无规模'}`,
})));
const detailTabs = [
  { key: 'overview', label: '总览' },
  { key: 'cities', label: '城池' },
  { key: 'armies', label: '军队' },
  { key: 'diplomacy', label: '外交' },
  { key: 'policy', label: '政策' },
] as const;
const activeFactionKey = ref('');
const activeDetailTab = ref<(typeof detailTabs)[number]['key']>('overview');

watch(factionTabs, value => {
  const firstKey = value[0]?.key || '';
  if (!value.some(tab => tab.key === activeFactionKey.value)) {
    activeFactionKey.value = firstKey;
  }
}, { immediate: true });

watch(activeFactionKey, () => {
  activeDetailTab.value = 'overview';
});

const currentFactionEntry = computed(() => factionEntries.value.find(([key]) => key === activeFactionKey.value) ?? null);
const currentFaction = computed(() => currentFactionEntry.value?.[1] ?? null);
const resolveFactionName = (势力名称: string) => props.state.势力?.[势力名称]?.名称 || 势力名称 || '未命名势力';
const diplomacyItems = computed(() => Object.entries(currentFaction.value?.外交 || {}).slice(0, 8).map(([势力名称, value]) => ({
  label: `${resolveFactionName(势力名称)} / ${currentFaction.value?._外交等级?.[势力名称] || '未知'}`,
  numericValue: value,
})));
const cities = computed(() => Object.entries(currentFaction.value?.城池 || {}).slice(0, 8));
const summaryItems = computed(() => currentFaction.value ? [
  { label: '名称', value: currentFaction.value.名称 || '无', accent: true },
  { label: '主公', value: currentFaction.value.主公 || '无', accent: true },
  { label: '规模', value: currentFaction.value.规模 || '无', accent: true },
  { label: '金钱', value: currentFaction.value.金钱 },
  { label: '粮草', value: currentFaction.value.粮草 },
  { label: '总兵力', value: currentFaction.value._总兵力 ?? 0 },
  { label: '总战力', value: currentFaction.value._总战力 ?? 0 },
  { label: '月税收', value: currentFaction.value._月总税收 ?? 0 },
  { label: '月产粮', value: currentFaction.value._月总产粮 ?? 0 },
  { label: '月军饷', value: currentFaction.value._月军饷估算 ?? 0 },
  { label: '月耗粮', value: currentFaction.value._月粮草消耗估算 ?? 0 },
] : []);

function formatFacilities(facilities?: string[]): string {
  return facilities && facilities.length > 0 ? facilities.join(' / ') : '无';
}
</script>
