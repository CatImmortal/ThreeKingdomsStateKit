<template>
  <div class="tk-radar-wrap">
    <svg class="tk-radar" :viewBox="`0 0 ${viewBoxWidth} ${viewBoxHeight}`" role="img" aria-label="兵种适性五维雷达图">
      <polygon v-for="ring in rings" :key="ring" class="tk-radar-ring" :points="polygonPoints(ring)" />
      <line
        v-for="(angle, index) in angles"
        :key="`axis-${index}`"
        class="tk-radar-axis"
        :x1="cx"
        :y1="cy"
        :x2="cx + Math.cos(angle) * maxRadius"
        :y2="cy + Math.sin(angle) * maxRadius"
      />
      <polygon class="tk-radar-shape" :points="shapePoints" />
      <circle
        v-for="(dot, index) in dots"
        :key="`dot-${index}`"
        class="tk-radar-dot"
        :cx="dot.x"
        :cy="dot.y"
        r="3"
      />
      <text
        v-for="(label, index) in labels"
        :key="label.key"
        class="tk-radar-label"
        :x="labelPositions[index].x"
        :y="labelPositions[index].y"
        text-anchor="middle"
      >
        <tspan :x="labelPositions[index].x" dy="0">{{ label.key }}</tspan>
        <tspan :x="labelPositions[index].x" dy="13">
          <tspan class="tk-radar-value">{{ label.value }}</tspan>
          <tspan class="tk-radar-separator">/</tspan>
          <tspan class="tk-radar-bonus">{{ formatPercent(label.bonus) }}</tspan>
        </tspan>
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { 枚举, 兵种适性修正 } from '../../../rules';
import type { 兵种适性表 } from '../../../state';

const props = defineProps<{ aptitude: 兵种适性表 }>();

const labels = computed(() => 枚举.基础兵种.map(兵种 => ({
  key: 兵种,
  value: props.aptitude?.[兵种] ?? 0,
  bonus: 兵种适性修正(props.aptitude?.[兵种] ?? 0),
})));

const viewBoxWidth = 220;
const viewBoxHeight = 236;
const cx = 110;
const cy = 106;
const maxRadius = 68;
const labelRadius = 98;
const maxValue = 100;
const rings = [0.25, 0.5, 0.75, 1];
const angles = computed(() => labels.value.map((_, index) => (-Math.PI / 2) + (Math.PI * 2 * index) / labels.value.length));

function point(radius: number, angle: number) {
  return {
    x: Number((cx + Math.cos(angle) * radius).toFixed(1)),
    y: Number((cy + Math.sin(angle) * radius).toFixed(1)),
  };
}

function polygonPoints(scale: number) {
  return angles.value.map(angle => {
    const p = point(maxRadius * scale, angle);
    return `${p.x},${p.y}`;
  }).join(' ');
}

function normalized(value: number) {
  return Math.max(0, Math.min(1, value / maxValue));
}

function formatPercent(value: number) {
  const percent = Math.round(value * 100);
  return percent > 0 ? `+${percent}%` : `${percent}%`;
}

const shapePoints = computed(() => labels.value.map((item, index) => {
  const p = point(maxRadius * normalized(item.value), angles.value[index]);
  return `${p.x},${p.y}`;
}).join(' '));

const dots = computed(() => labels.value.map((item, index) => point(maxRadius * normalized(item.value), angles.value[index])));
const labelPositions = computed(() => labels.value.map((_, index) => point(labelRadius, angles.value[index])));
</script>
