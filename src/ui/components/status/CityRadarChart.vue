<template>
  <div class="tk-radar-wrap">
    <svg class="tk-radar" :viewBox="`0 0 ${viewBoxWidth} ${viewBoxHeight}`" role="img" aria-label="城池五维雷达图">
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
        {{ label.key }}
      </text>
      <text
        v-for="(label, index) in labels"
        :key="`${label.key}-value`"
        class="tk-radar-value"
        :x="valuePositions[index].x"
        :y="valuePositions[index].y"
        text-anchor="middle"
      >
        {{ label.value }}
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { 城池 } from '../../../state';

const props = defineProps<{ city: 城池 }>();

const labels = computed(() => [
  { key: '农业', value: props.city.农业 ?? 0 },
  { key: '商业', value: props.city.商业 ?? 0 },
  { key: '繁荣度', value: props.city.繁荣度 ?? 0 },
  { key: '民心', value: props.city.民心 ?? 0 },
  { key: '治安', value: props.city.治安 ?? 0 },
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

const shapePoints = computed(() => labels.value.map((item, index) => {
  const p = point(maxRadius * normalized(item.value), angles.value[index]);
  return `${p.x},${p.y}`;
}).join(' '));

const dots = computed(() => labels.value.map((item, index) => point(maxRadius * normalized(item.value), angles.value[index])));
const labelPositions = computed(() => labels.value.map((_, index) => point(labelRadius, angles.value[index])));
const valuePositions = computed(() => labels.value.map((item, index) => point((maxRadius * normalized(item.value)) + 12, angles.value[index])));
</script>
