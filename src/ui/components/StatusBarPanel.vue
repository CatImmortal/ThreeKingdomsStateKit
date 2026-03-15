<template>
  <section class="tk-vue-card tk-vue-status tk-statusbar">
    <div class="tk-panel-shell" v-if="state">
      <div class="tk-panel-tabs">
        <button v-for="tab in tabs" :key="tab.key" type="button" class="tk-panel-tab-label" :class="{ 'is-active': activeTab === tab.key }" @click="activeTab = tab.key">{{ tab.label }}</button>
      </div>
      <div class="tk-panel-pages">
        <div v-if="activeTab === 'hero'" class="tk-panel-page is-hero"><HeroPanel :state="state" /></div>
        <div v-else-if="activeTab === 'npc'" class="tk-panel-page is-npc"><NpcPanel :state="state" /></div>
        <div v-else-if="activeTab === 'quest'" class="tk-panel-page is-quest"><QuestPanel :state="state" /></div>
        <div v-else-if="activeTab === 'shop'" class="tk-panel-page is-shop"><ShopPanel :state="state" /></div>
        <div v-else class="tk-panel-page is-faction"><FactionPanel :state="state" /></div>
      </div>
    </div>
    <div v-else class="tk-vue-empty">当前没有状态数据</div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { unifiedPanelState } from '../store';
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
  { key: 'faction', label: '势力' },
] as const;
const activeTab = ref<(typeof tabs)[number]['key']>('hero');
watch(state, value => {
  if (!value) {
    activeTab.value = 'hero';
  }
});
</script>
