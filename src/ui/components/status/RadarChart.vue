<template>
  <div class="tk-radar-wrap">
    <svg class="tk-radar" :viewBox="`0 0 ${viewBoxWidth} ${viewBoxHeight}`" role="img" aria-label="主角六维雷达图">
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
          <tspan class="tk-radar-bonus">{{ formatBonus(label.bonus) }}</tspan>
        </tspan>
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { 六维 } from '../../../state';

const props = defineProps<{ stats: 六维 }>();

const labels = computed(() => [
  { key: '武力', value: props.stats.武力, bonus: props.stats._武力加值 ?? 0 },
  { key: '智力', value: props.stats.智力, bonus: props.stats._智力加值 ?? 0 },
  { key: '统率', value: props.stats.统率, bonus: props.stats._统率加值 ?? 0 },
  { key: '政治', value: props.stats.政治, bonus: props.stats._政治加值 ?? 0 },
  { key: '魅力', value: props.stats.魅力, bonus: props.stats._魅力加值 ?? 0 },
  { key: '体质', value: props.stats.体质, bonus: props.stats._体质加值 ?? 0 },
]);

const viewBoxWidth = 220;
const viewBoxHeight = 236;
const cx = 110;
const cy = 104;
const maxRadius = 68;
const labelRadius = 96;
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

function formatBonus(value: number) {
  return value > 0 ? `+${value}` : String(value);
}

const shapePoints = computed(() => labels.value.map((item, index) => {
  const p = point(maxRadius * normalized(item.value), angles.value[index]);
  return `${p.x},${p.y}`;
}).join(' '));

const dots = computed(() => labels.value.map((item, index) => point(maxRadius * normalized(item.value), angles.value[index])));
const labelPositions = computed(() => labels.value.map((_, index) => point(labelRadius, angles.value[index])));
</script>
