<template>
  <div>
    <div v-if="locationTabs.length > 0" class="tk-subtabs">
      <button v-for="tab in locationTabs" :key="tab" type="button" class="tk-subtab-label" :class="{ 'is-active': activeTab === tab }" @click="activeTab = tab">{{ tab }}</button>
    </div>
    <section class="tk-panel-card">
      <div class="tk-panel-card-title">{{ activeTab || '当前地点 NPC' }}</div>
      <div class="tk-panel-detail-list">
        <details v-for="[名称, npc] in currentEntries" :key="名称" class="tk-panel-detail">
          <summary><span>{{ npc.名称 || '未命名角色' }}</span><span>{{ npc.品质 }} / {{ npc.定位 || '未知' }}</span></summary>
          <div class="tk-panel-detail-body">
            <div class="tk-panel-kv-grid compact">
              <div class="tk-panel-kv"><span class="tk-panel-k">所在地</span><span class="tk-panel-v">{{ npc.所在地 || '未知地点' }}</span></div>
              <div class="tk-panel-kv"><span class="tk-panel-k">阵营</span><span class="tk-panel-v">{{ npc.阵营 || '无' }}</span></div>
              <div class="tk-panel-kv"><span class="tk-panel-k">定位</span><span class="tk-panel-v">{{ npc.定位 || '无' }}</span></div>
              <div class="tk-panel-kv"><span class="tk-panel-k">关系</span><span class="tk-panel-v">{{ relationText(npc) }}</span></div>
              <div v-if="npc.武将信息" class="tk-panel-kv"><span class="tk-panel-k">效忠势力</span><span class="tk-panel-v">{{ npc.武将信息.势力 || '无' }}</span></div>
              <div v-if="npc.武将信息" class="tk-panel-kv"><span class="tk-panel-k">兵种适性</span><span class="tk-panel-v">{{ formatAptitude(npc.武将信息.兵种适性) }}</span></div>
            </div>
            <div class="tk-panel-inline-note">{{ npc.简述 || '暂无描述' }}</div>
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

function formatAptitude(aptitude?: Record<string, number>): string {
  return Object.entries(aptitude || {}).map(([兵种, 数值]) => `${兵种}:${数值}`).join(' / ') || '无';
}

function relationText(npc: NPC): string {
  const relations: string[] = [];
  if (npc.美人属性?._好感等级) {
    relations.push(npc.美人属性._好感等级);
  } else if (npc._交情等级) {
    relations.push(npc._交情等级);
  }
  if (npc.武将信息?._忠诚等级) {
    relations.push(npc.武将信息._忠诚等级);
  }
  return relations.join(' / ') || String(npc.好感 ?? 0);
}
</script>
