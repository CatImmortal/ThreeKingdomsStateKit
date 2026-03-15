<template>
  <div>
    <div v-if="typeTabs.length > 0" class="tk-subtabs">
      <button v-for="tab in typeTabs" :key="tab" type="button" class="tk-subtab-label" :class="{ 'is-active': activeTab === tab }" @click="activeTab = tab">{{ tab }}</button>
    </div>
    <section class="tk-panel-card">
      <div class="tk-panel-card-title">{{ activeTab ? `${activeTab}任务` : '任务列表' }}</div>
      <div v-if="currentTasks.length > 0" class="tk-panel-detail-list">
        <details v-for="[id, task] in currentTasks" :key="id" class="tk-panel-detail">
          <summary><span>{{ task.名称 || '未命名任务' }}</span><span>{{ task.类型 }} / {{ task.状态 }}</span></summary>
          <div class="tk-panel-detail-body">
            <div class="tk-panel-inline-note">时限：{{ task.时限 || '无时限' }}</div>
            <div class="tk-panel-list">
              <div v-for="[targetId, target] in Object.entries(task.目标 || {})" :key="targetId" class="tk-panel-list-item">
                <div class="tk-panel-list-title">{{ target.描述 || '未命名目标' }}</div>
                <div class="tk-panel-list-meta">{{ target.类型 }} / {{ target.状态 }}</div>
                <div class="tk-panel-list-desc">积分：{{ target.积分 ?? 0 }}　其他奖励：{{ target.其他奖励 || '无' }}</div>
              </div>
              <div v-if="Object.keys(task.目标 || {}).length === 0" class="tk-panel-empty">暂无任务目标</div>
            </div>
          </div>
        </details>
      </div>
      <div v-else class="tk-panel-empty">当前没有活跃任务</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { 状态总表 } from '../../../state';
const props = defineProps<{ state: 状态总表 }>();
const tasks = computed(() => Object.entries(props.state.任务 || {}));
const typeTabs = computed(() => [...new Set(tasks.value.map(([, task]) => task.类型))]);
const activeTab = ref('');
watch(typeTabs, value => { activeTab.value = value[0] || ''; }, { immediate: true });
const currentTasks = computed(() => activeTab.value ? tasks.value.filter(([, task]) => task.类型 === activeTab.value) : tasks.value);
</script>
