<template>
  <div ref="panelRef" :class="['tk-vue-floating-options', visible ? 'is-visible' : 'is-hidden']" :style="panelStyle">
    <div class="tk-vue-floating-head tk-vue-drag-handle" @pointerdown="handleDragStart">
      <div>
        <div class="tk-vue-panel-title">可选行动</div>
        <div class="tk-vue-panel-subtitle">当前最新 AI 回复可选项</div>
      </div>
      <button type="button" class="tk-vue-head-btn" @click.stop="handleResetPosition">重置位置</button>
    </div>
    <PlayerOptionsPanel />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch, type CSSProperties } from 'vue';
import { getHostDocument } from '../../dom-host';
import { attachDragHandlers, computeInputAbovePosition } from '../drag';
import PlayerOptionsPanel from '../components/PlayerOptionsPanel.vue';
import { resetPlayerOptionsPanelPosition, setPlayerOptionsPanelPosition, unifiedPanelState } from '../store';

const panelRef = ref<HTMLElement | null>(null);
const visible = computed(() => unifiedPanelState.playerOptionsPanel.visible);
const measuredSize = ref({ width: 420, height: 220 });
const panelStyle = computed<CSSProperties>(() => {
  const position = unifiedPanelState.playerOptionsPanel.position;
  if (position.mode === 'default') {
    const hostDocument = typeof document !== 'undefined' ? getHostDocument() : null;
    const win = hostDocument?.defaultView ?? (typeof window !== 'undefined' ? window : null);
    const input = 查找输入框元素();
    const resolved = win
      ? computeInputAbovePosition(input?.getBoundingClientRect() ?? null, measuredSize.value.width, measuredSize.value.height, win.innerWidth, win.innerHeight)
      : { left: 24, top: 24 };
    return {
      position: 'fixed',
      left: `${resolved.left}px`,
      top: `${resolved.top}px`,
      width: 'min(420px,calc(100vw - 24px))',
    };
  }
  return {
    position: 'fixed',
    left: `${position.left}px`,
    top: `${position.top}px`,
    width: 'min(420px,calc(100vw - 24px))',
  };
});

function 查找输入框元素(): HTMLElement | null {
  const hostDocument = getHostDocument();
  const selectors = ['#send_textarea', '#send_textarea textarea', 'textarea[name="send_textarea"]', 'textarea[id="send_textarea"]', '[contenteditable="true"]', '[contenteditable="plaintext-only"]', '.ProseMirror', 'form textarea', 'textarea', 'input[type="text"]'];
  for (const selector of selectors) {
    const element = hostDocument.querySelector(selector);
    if (element instanceof HTMLElement) {
      return element;
    }
  }
  return null;
}

function 更新默认位置(): void {
  if (unifiedPanelState.playerOptionsPanel.position.mode !== 'default' || !visible.value) {
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
  const panel = target?.closest('.tk-vue-floating-options') as HTMLElement | null;
  if (!panel) {
    return;
  }
  const hostDocument = getHostDocument();
  const win = hostDocument.defaultView ?? window;
  if (unifiedPanelState.playerOptionsPanel.position.mode === 'default') {
    const rect = panel.getBoundingClientRect();
    setPlayerOptionsPanelPosition(rect.left, rect.top);
  }
  attachDragHandlers({
    event,
    panel,
    win,
    onMovePosition: position => setPlayerOptionsPanelPosition(position.left, position.top),
  });
};

const handleResetPosition = () => {
  resetPlayerOptionsPanelPosition();
  更新默认位置();
};

watch([visible, () => unifiedPanelState.playerOptionsPanel.options.length, () => unifiedPanelState.playerOptionsPanel.position.mode], () => {
  更新默认位置();
}, { immediate: true });
</script>
