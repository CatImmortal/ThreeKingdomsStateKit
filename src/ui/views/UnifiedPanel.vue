<template>
  <div ref="panelRef" :class="['tk-vue-panel-shell', visible ? 'is-visible' : 'is-hidden']" :style="panelStyle">
    <div class="tk-vue-panel-head tk-vue-drag-handle" @pointerdown="handleDragStart">
      <div>
        <div class="tk-vue-panel-title">系统界面</div>
        <div class="tk-vue-panel-subtitle">
          <template v-if="worldSummary">{{ worldSummary }}</template>
          <template v-else>当前没有可显示的系统数据</template>
        </div>
      </div>
      <div class="tk-vue-head-actions">
        <button type="button" class="tk-vue-head-btn" @click.stop="handleResetPosition">重置位置</button>
        <button type="button" class="tk-vue-head-btn" @click.stop="handleClose">关闭</button>
      </div>
    </div>
    <div class="tk-vue-panel-content is-system-panel">
      <StatusBarPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch, type CSSProperties } from 'vue';
import { getHostDocument } from '../../dom-host';
import { attachDragHandlers, computeCenteredPosition } from '../drag';
import StatusBarPanel from '../components/StatusBarPanel.vue';
import { resetSystemPanelPosition, setSystemPanelPosition, setSystemPanelVisible, unifiedPanelState } from '../store';

const panelRef = ref<HTMLElement | null>(null);
const visible = computed(() => unifiedPanelState.systemPanel.visible);
const measuredSize = ref({ width: 960, height: 760 });
const worldSummary = computed(() => {
  const state = unifiedPanelState.systemPanel.state;
  if (!state) {
    return '';
  }
  return [state.世界.当前时间 || '未知时刻', state.世界.当前地点 || '未知地点', state.世界.天气 || '未知天气', state.世界.当前剧本 || '未知剧本'].join(' · ');
});
const panelStyle = computed<CSSProperties>(() => {
  const position = unifiedPanelState.systemPanel.position;
  if (position.mode === 'default') {
    const hostDocument = typeof document !== 'undefined' ? getHostDocument() : null;
    const win = hostDocument?.defaultView ?? (typeof window !== 'undefined' ? window : null);
    const centered = win
      ? computeCenteredPosition(measuredSize.value.width, measuredSize.value.height, win.innerWidth, win.innerHeight)
      : { left: 24, top: 24 };
    return {
      position: 'fixed',
      left: `${centered.left}px`,
      top: `${centered.top}px`,
      width: 'min(1080px,calc(100vw - 24px))',
      height: 'min(760px,calc(100vh - 32px))',
    };
  }
  return {
    position: 'fixed',
    left: `${position.left}px`,
    top: `${position.top}px`,
    width: 'min(1080px,calc(100vw - 24px))',
    height: 'min(760px,calc(100vh - 32px))',
  };
});

function 更新默认位置(): void {
  if (unifiedPanelState.systemPanel.position.mode !== 'default' || !visible.value) {
    return;
  }
  nextTick(() => {
    const panel = panelRef.value;
    if (!panel) {
      return;
    }
    const rect = panel.getBoundingClientRect();
    measuredSize.value = { width: rect.width, height: rect.height };
  });
}

const handleDragStart = (event: PointerEvent) => {
  const target = event.currentTarget as HTMLElement | null;
  const panel = target?.closest('.tk-vue-panel-shell') as HTMLElement | null;
  if (!panel) {
    return;
  }
  const hostDocument = getHostDocument();
  const win = hostDocument.defaultView ?? window;
  if (unifiedPanelState.systemPanel.position.mode === 'default') {
    const rect = panel.getBoundingClientRect();
    setSystemPanelPosition(rect.left, rect.top);
  }
  attachDragHandlers({
    event,
    panel,
    win,
    onMovePosition: position => setSystemPanelPosition(position.left, position.top),
  });
};

const handleResetPosition = () => {
  resetSystemPanelPosition();
  更新默认位置();
};

const handleClose = () => {
  setSystemPanelVisible(false);
};

watch([visible, () => unifiedPanelState.systemPanel.position.mode], () => {
  更新默认位置();
}, { immediate: true });
</script>
