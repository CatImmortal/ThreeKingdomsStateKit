<template>
  <div class="tk-panel-bar-row">
    <div class="tk-panel-bar-label">{{ label }}</div>
    <div class="tk-panel-bar">
      <span class="tk-panel-bar-fill" :class="colorClass" :style="{ width: ratio }"></span>
    </div>
    <div class="tk-panel-bar-value">{{ value }} / {{ max }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  label: string;
  value: number;
  max: number;
  colorClass?: string;
}>(), {
  colorClass: 'is-gold',
});

const ratio = computed(() => {
  const safeMax = Math.max(props.max || 0, 1);
  const percent = Math.max(0, Math.min(100, Math.round((props.value / safeMax) * 100)));
  return `${percent}%`;
});
</script>
