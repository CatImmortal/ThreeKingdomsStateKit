<template>
  <section class="tk-panel-card">
    <div class="tk-panel-card-title">世界事件</div>
    <div v-if="events.length > 0" class="tk-panel-detail-list">
      <details v-for="(event, index) in events" :key="`${event.日期}-${event.事件名}-${index}`" class="tk-panel-detail">
        <summary><span>{{ event.事件名 || '未命名事件' }}</span><span>{{ event.日期 || '日期未知' }}</span></summary>
        <div class="tk-panel-detail-body">
          <div class="tk-panel-list-desc">{{ event.简述 || '暂无事件简述' }}</div>
        </div>
      </details>
    </div>
    <div v-else class="tk-panel-empty">当前没有世界事件</div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { 状态总表 } from '../../../state';

const props = defineProps<{ state: 状态总表 }>();
const events = computed(() => [...(props.state.世界?.近期事件 || [])].reverse());
</script>
