<template>
  <div>
    <div
      v-for="windowState in windows"
      :key="windowState.id"
      ref="panelRefs"
      :data-window-id="windowState.id"
      class="tk-vue-npc-detail-window"
      :style="panelStyle(windowState)"
      @pointerdown="focusNpcDetailWindow(windowState.id)"
    >
      <div class="tk-vue-floating-head tk-vue-drag-handle" @pointerdown="handleDragStart($event, windowState.id)">
        <div>
          <div class="tk-vue-panel-title">{{ windowState.npcName }}</div>
          <div class="tk-vue-panel-subtitle">NPC 详情</div>
        </div>
        <div class="tk-vue-head-actions">
          <button type="button" class="tk-vue-head-btn" @click.stop="handleResetPosition(windowState.id)">重置位置</button>
          <button type="button" class="tk-vue-head-btn" @click.stop="closeNpcDetailWindow(windowState.id)">关闭</button>
        </div>
      </div>
      <div class="tk-vue-panel-content tk-vue-npc-detail-content">
        <NpcDetailPanel v-if="npcByName(windowState.npcName)" :npc="npcByName(windowState.npcName)!" />
        <div v-else class="tk-vue-empty">该 NPC 已不存在</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch, type CSSProperties } from 'vue';
import { getHostDocument } from '../../dom-host';
import { attachDragHandlers, clampToViewport } from '../drag';
import NpcDetailPanel from '../components/status/NpcDetailPanel.vue';
import {
  closeNpcDetailWindow,
  focusNpcDetailWindow,
  resetNpcDetailWindowPosition,
  setNpcDetailWindowPosition,
  type NpcDetailWindowState,
  unifiedPanelState,
} from '../store';

const panelRefs = ref<HTMLElement[]>([]);
const measuredSizes = ref<Record<string, { width: number; height: number }>>({});
const windows = computed(() => unifiedPanelState.npcDetailWindows);

function npcByName(name: string) {
  return unifiedPanelState.systemPanel.state?.NPC?.[name] ?? null;
}

function panelStyle(windowState: NpcDetailWindowState): CSSProperties {
  const size = measuredSizes.value[windowState.id] || { width: 620, height: 720 };
  const hostDocument = typeof document !== 'undefined' ? getHostDocument() : null;
  const win = hostDocument?.defaultView ?? (typeof window !== 'undefined' ? window : null);
  const left = windowState.position.mode === 'default'
    ? clampToViewport(windowState.position.left, 8, (win?.innerWidth ?? 1280) - size.width - 8)
    : windowState.position.left;
  const top = windowState.position.mode === 'default'
    ? clampToViewport(windowState.position.top, 8, (win?.innerHeight ?? 960) - size.height - 8)
    : windowState.position.top;
  return {
    position: 'fixed',
    left: `${left}px`,
    top: `${top}px`,
    width: 'min(620px,calc(100vw - 24px))',
    height: 'min(760px,calc(100vh - 32px))',
    zIndex: String(windowState.zIndex),
  };
}

function updateMeasuredSizes(): void {
  nextTick(() => {
    const nextSizes: Record<string, { width: number; height: number }> = { ...measuredSizes.value };
    for (const panel of panelRefs.value) {
      const windowId = panel.dataset.windowId;
      if (!windowId) {
        continue;
      }
      const rect = panel.getBoundingClientRect();
      nextSizes[windowId] = { width: rect.width, height: rect.height };
    }
    measuredSizes.value = nextSizes;
  });
}

const handleDragStart = (event: PointerEvent, id: string) => {
  const target = event.currentTarget as HTMLElement | null;
  const panel = target?.closest('.tk-vue-npc-detail-window') as HTMLElement | null;
  if (!panel) {
    return;
  }
  focusNpcDetailWindow(id);
  const hostDocument = getHostDocument();
  const win = hostDocument.defaultView ?? window;
  const windowState = unifiedPanelState.npcDetailWindows.find(item => item.id === id);
  if (windowState?.position.mode === 'default') {
    const rect = panel.getBoundingClientRect();
    setNpcDetailWindowPosition(id, rect.left, rect.top);
  }
  attachDragHandlers({
    event,
    panel,
    win,
    onMovePosition: position => setNpcDetailWindowPosition(id, position.left, position.top),
  });
};

function handleResetPosition(id: string): void {
  resetNpcDetailWindowPosition(id);
  updateMeasuredSizes();
}

watch(windows, () => {
  updateMeasuredSizes();
}, { deep: true, immediate: true });
</script>
