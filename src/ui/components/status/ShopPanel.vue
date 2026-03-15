<template>
  <div>
    <div v-if="typeTabs.length > 0" class="tk-subtabs">
      <button v-for="tab in typeTabs" :key="tab" type="button" class="tk-subtab-label" :class="{ 'is-active': activeTab === tab }" @click="activeTab = tab">{{ tab }}</button>
    </div>
    <section class="tk-panel-card">
      <div class="tk-panel-card-title">{{ activeTab || '商城' }}</div>
      <div class="tk-panel-list">
        <div v-for="[id, item] in currentItems" :key="id" class="tk-panel-list-item">
          <div class="tk-panel-list-title">{{ item.名称 || '未命名商品' }}</div>
          <div class="tk-panel-list-meta">{{ item.分类 }} / {{ item.价格 }} 积分</div>
          <div class="tk-panel-list-desc">{{ item.描述 || '' }}</div>
        </div>
        <div v-if="currentItems.length === 0" class="tk-panel-empty">当前没有可见商品</div>
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
