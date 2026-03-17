<template>
  <div>
    <div v-if="locationTabs.length > 0" class="tk-subtabs">
      <button v-for="tab in locationTabs" :key="tab" type="button" class="tk-subtab-label" :class="{ 'is-active': activeTab === tab }" @click="activeTab = tab">{{ tab }}</button>
    </div>
    <section class="tk-panel-card">
      <div class="tk-panel-card-title">{{ activeTab || '当前地点 NPC' }}</div>
      <div class="tk-panel-detail-list">
        <details v-for="[名称, npc] in currentEntries" :key="名称" class="tk-panel-detail">
          <summary><span>{{ npc.名称 || '未命名角色' }}</span><span><span :style="品质文本样式(npc.品质)">{{ npc.品质 }}</span> / {{ npc.定位 || '未知' }}</span></summary>
          <div class="tk-panel-detail-body">
            <div class="tk-panel-page-grid cols-2">
              <section class="tk-panel-card">
                <div class="tk-panel-card-title">基础信息</div>
                <div class="tk-panel-kv-grid compact">
                  <div class="tk-panel-kv"><span class="tk-panel-k">所在地</span><span class="tk-panel-v">{{ npc.所在地 || '未知地点' }}</span></div>
                  <div class="tk-panel-kv"><span class="tk-panel-k">阵营</span><span class="tk-panel-v">{{ npc.阵营 || '无' }}</span></div>
                  <div class="tk-panel-kv"><span class="tk-panel-k">定位</span><span class="tk-panel-v">{{ npc.定位 || '无' }}</span></div>
                </div>
                <template v-if="npc.战斗数据">
                  <div class="tk-panel-bar-row" style="margin-top: 10px;"><div class="tk-panel-bar-label">生命</div><div class="tk-panel-bar"><span class="tk-panel-bar-fill is-hp" :style="{ width: ratio(npc.战斗数据.当前生命值, npc.战斗数据._生命值上限) }"></span></div><div class="tk-panel-bar-value">{{ npc.战斗数据.当前生命值 }} / {{ npc.战斗数据._生命值上限 ?? 0 }}</div></div>
                  <div class="tk-panel-bar-row"><div class="tk-panel-bar-label">体力</div><div class="tk-panel-bar"><span class="tk-panel-bar-fill is-sp" :style="{ width: ratio(npc.战斗数据.当前体力值, npc.战斗数据._体力值上限) }"></span></div><div class="tk-panel-bar-value">{{ npc.战斗数据.当前体力值 }} / {{ npc.战斗数据._体力值上限 ?? 0 }}</div></div>
                </template>
                <div class="tk-panel-inline-note">{{ npc.简述 || '暂无描述' }}</div>
              </section>
              <section class="tk-panel-card">
                <div class="tk-panel-card-title">关系与效忠势力</div>
                <BoundedBar :label="`好感\n（${relationLevelText(npc)}）`" :value="npc.好感 ?? 0" :max="100" color-class="is-gold" />
                <template v-if="npc.武将信息">
                  <BoundedBar :label="`忠诚·${npc.武将信息.势力 || '无'}\n（${npc.武将信息._忠诚等级 || '无'}）`" :value="npc.武将信息.忠诚 ?? 0" :max="100" color-class="is-cyan" />
                </template>
              </section>
              <section v-if="npc.六维" class="tk-panel-card">
                <div class="tk-panel-card-title">六维与战斗</div>
                <RadarChart :stats="npc.六维" />
                <div class="tk-panel-kv-grid compact">
                  <div v-for="item in battleItems(npc)" :key="item.label" class="tk-panel-kv"><span class="tk-panel-k">{{ item.label }}</span><span class="tk-panel-v">{{ item.value }}</span></div>
                </div>
              </section>
              <section v-if="npc.武将信息" class="tk-panel-card">
                <div class="tk-panel-card-title">兵种适性</div>
                <AptitudeRadarChart :aptitude="npc.武将信息.兵种适性" />
              </section>
            </div>
            <div class="tk-panel-actions">
              <button type="button" class="tk-panel-action-btn" @click="openNpcDetailWindow(名称)">查看详情</button>
            </div>
          </div>
        </details>
        <div v-if="currentEntries.length === 0" class="tk-panel-empty">当前分页暂无关键 NPC</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { NPC, 状态总表 } from '../../../state';
import { openNpcDetailWindow } from '../../store';
import AptitudeRadarChart from './AptitudeRadarChart.vue';
import BoundedBar from './BoundedBar.vue';
import RadarChart from './RadarChart.vue';
import { 品质文本样式 } from './qualityStyles';

const props = defineProps<{ state: 状态总表 }>();
const UNKNOWN_LOCATION = '未知地点';
const activeTab = ref('');
const entries = computed(() => Object.entries(props.state.NPC || {}));
const currentLocation = computed(() => props.state.世界?.当前地点 || '');
const locationTabs = computed(() => {
  const unique = [...new Set(entries.value.map(([, npc]) => npc.所在地 || UNKNOWN_LOCATION))];
  if (!currentLocation.value) {
    return unique;
  }
  const current = unique.find(location => location === currentLocation.value);
  const rest = unique.filter(location => location !== currentLocation.value);
  return current ? [current, ...rest] : [currentLocation.value, ...rest];
});
watch(locationTabs, value => {
  activeTab.value = value[0] || '';
}, { immediate: true });
const currentEntries = computed(() => {
  const location = activeTab.value || currentLocation.value || UNKNOWN_LOCATION;
  return entries.value.filter(([, npc]) => (npc.所在地 || UNKNOWN_LOCATION) === location);
});

function relationLevelText(npc: NPC): string {
  if (npc.美人属性?._好感等级) {
    return npc.美人属性._好感等级;
  }
  if (npc._交情等级) {
    return npc._交情等级;
  }
  return String(npc.好感 ?? 0);
}

function battleItems(npc: NPC): Array<{ label: string; value: number }> {
  const data = npc.战斗数据;
  if (!data) {
    return [];
  }
  return [
    { label: '先攻', value: data._先攻基础值 ?? 0 },
    { label: '攻击', value: data._攻击基础值 ?? 0 },
    { label: '伤害', value: data._伤害基础值 ?? 0 },
    { label: '防御DC', value: data._防御DC基础值 ?? 0 },
    { label: '伤害减免', value: data._伤害减免基础值 ?? 0 },
  ];
}

const ratio = (current: number, max?: number) => `${Math.max(0, Math.min(100, Math.round((current / Math.max(max || 100, 1)) * 100)))}%`;
</script>
