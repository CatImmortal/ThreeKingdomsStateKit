<template>
  <section class="tk-vue-card tk-vue-status tk-statusbar">
    <div class="tk-panel-shell" v-if="state">
      <div class="tk-panel-head">
        <div class="tk-panel-title">三国霸主 · 系统面板</div>
        <div class="tk-panel-subtitle"><span>{{ header }}</span></div>
      </div>
      <div class="tk-panel-tabs">
        <button v-for="tab in tabs" :key="tab.key" type="button" class="tk-panel-tab-label" :class="{ 'is-active': activeTab === tab.key }" @click="activeTab = tab.key">{{ tab.label }}</button>
      </div>
      <div class="tk-panel-pages">
        <div v-if="activeTab === 'hero'" class="tk-panel-page is-hero"><HeroPanel :state="state" /></div>
        <div v-else-if="activeTab === 'npc'" class="tk-panel-page is-npc"><NpcPanel :state="state" /></div>
        <div v-else-if="activeTab === 'quest'" class="tk-panel-page is-quest"><QuestPanel :state="state" /></div>
        <div v-else-if="activeTab === 'shop'" class="tk-panel-page is-shop"><ShopPanel :state="state" /></div>
        <div v-else-if="activeTab === 'army'" class="tk-panel-page is-army"><ArmyPanel :state="state" /></div>
        <div v-else class="tk-panel-page is-faction"><FactionPanel :state="state" /></div>
      </div>
    </div>
    <div v-else class="tk-vue-empty">当前没有状态数据</div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { unifiedPanelState } from '../store';
import ArmyPanel from './status/ArmyPanel.vue';
import FactionPanel from './status/FactionPanel.vue';
import HeroPanel from './status/HeroPanel.vue';
import NpcPanel from './status/NpcPanel.vue';
import QuestPanel from './status/QuestPanel.vue';
import ShopPanel from './status/ShopPanel.vue';

const state = computed(() => unifiedPanelState.systemPanel.state);
const tabs = [
  { key: 'hero', label: '主角' },
  { key: 'npc', label: '当前地点NPC' },
  { key: 'quest', label: '任务' },
  { key: 'shop', label: '商城' },
  { key: 'army', label: '军队' },
  { key: 'faction', label: '势力' },
] as const;
const activeTab = ref<(typeof tabs)[number]['key']>('hero');
const header = computed(() => {
  if (!state.value) {
    return '';
  }
  return `${state.value.世界.当前时间 || '未知时刻'} · ${state.value.世界.当前地点 || '未知地点'} · ${state.value.世界.天气 || '未知天气'} · ${state.value.世界.当前剧本 || '未知剧本'}`;
});
watch(state, value => {
  if (!value) {
    activeTab.value = 'hero';
  }
});
</script>
