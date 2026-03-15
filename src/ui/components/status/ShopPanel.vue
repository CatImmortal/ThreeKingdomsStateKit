<template>
  <div>
    <div v-if="typeTabs.length > 0" class="tk-subtabs">
      <button v-for="tab in typeTabs" :key="tab" type="button" class="tk-subtab-label" :class="{ 'is-active': activeTab === tab }" @click="activeTab = tab">{{ tab }}</button>
    </div>
    <section class="tk-panel-card">
      <div class="tk-panel-card-title">{{ activeTab || '商城' }}</div>
      <div class="tk-panel-page-grid" style="grid-template-columns: repeat(6, minmax(0, 1fr));">
        <div v-for="[名称, item] in currentItems" :key="名称" class="tk-panel-kv" style="min-height: 112px; display: flex; flex-direction: column; justify-content: space-between; gap: 6px; background: linear-gradient(180deg, rgba(123,77,38,.18), rgba(74,45,24,.16)); border-color: rgba(220,181,119,.34);">
          <span class="tk-panel-k">{{ item.分类 || '未分类' }}</span>
          <span class="tk-panel-v">{{ item.名称 || '未命名商品' }}</span>
          <span class="tk-panel-inline-note" style="margin-top: 6px; color: #f0c983;">{{ item.价格 }} 积分</span>
          <span class="tk-panel-inline-note" style="margin-top: 6px; line-height: 1.45;">{{ item.描述 || '' }}</span>
        </div>
        <div v-if="currentItems.length === 0" class="tk-panel-empty" style="grid-column: 1 / -1;">当前没有可见商品</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { 状态总表 } from '../../../state';
const props = defineProps<{ state: 状态总表 }>();
const items = computed(() => Object.entries(props.state.商城 || {}));
const typeTabs = computed(() => [...new Set(items.value.map(([, item]) => item.分类))]);
const activeTab = ref('');
watch(typeTabs, value => { activeTab.value = value[0] || ''; }, { immediate: true });
const currentItems = computed(() => activeTab.value ? items.value.filter(([, item]) => item.分类 === activeTab.value) : items.value);
</script>
