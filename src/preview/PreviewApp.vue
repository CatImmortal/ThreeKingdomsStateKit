<template>
  <div class="preview-shell">
    <header class="preview-toolbar">
      <div class="preview-toolbar__group">
        <label class="preview-label">
          <span>场景</span>
          <select v-model="selectedSceneKey" class="preview-select">
            <option v-for="scene in scenes" :key="scene.key" :value="scene.key">{{ scene.label }}</option>
          </select>
        </label>
        <button type="button" class="preview-btn" @click="applyScene(selectedSceneKey)">重置场景</button>
      </div>
      <div class="preview-toolbar__group">
        <button type="button" class="preview-btn" @click="toggleSystemPanel">{{ unifiedPanelState.systemPanel.visible ? '隐藏系统界面' : '显示系统界面' }}</button>
        <button type="button" class="preview-btn" @click="toggleOptionsPanel">{{ unifiedPanelState.playerOptionsPanel.visible ? '隐藏玩家选项' : '显示玩家选项' }}</button>
      </div>
      <div class="preview-toolbar__group">
        <label class="preview-label">
          <span>打开 NPC 详情</span>
          <select v-model="selectedNpcName" class="preview-select">
            <option value="">请选择 NPC</option>
            <option v-for="name in npcNames" :key="name" :value="name">{{ name }}</option>
          </select>
        </label>
        <button type="button" class="preview-btn" :disabled="!selectedNpcName" @click="openSelectedNpc">打开详情</button>
        <div class="preview-input-wrap">
          <label for="send_textarea" class="preview-input-label">预览输入框</label>
          <textarea id="send_textarea" class="preview-textarea" placeholder="点击玩家选项后会填充到这里"></textarea>
        </div>
      </div>
    </header>
    <div id="preview-overlay-root"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { mountUnifiedPanelApp, unmountUnifiedPanelApp } from '../ui/app';
import {
  clearUnifiedPanelState,
  openNpcDetailWindow,
  setPlayerOptionsPanelVisible,
  setSystemPanelVisible,
  unifiedPanelState,
  updatePlayerOptionsPanelState,
  updateSystemPanelState,
} from '../ui/store';
import { getPreviewScene, previewScenes } from './mock-data';

const scenes = previewScenes;
const selectedSceneKey = ref(previewScenes[0]?.key || 'full');
const selectedNpcName = ref('');

const npcNames = computed(() => Object.keys(unifiedPanelState.systemPanel.state?.NPC || {}));

function installPreviewRuntimeMocks(): void {
  const latestMessageId = () => unifiedPanelState.systemPanel.latestMessageId ?? 1;
  const latestMessage = (): Array<{ message_id: number; role: 'assistant'; message: string }> => [{ message_id: latestMessageId(), role: 'assistant', message: 'preview assistant message' }];
  const api = window as typeof window & {
    getChatMessages?: (range: string | number) => Array<{ message_id: number; role: 'assistant'; message: string }>;
    triggerSlash?: (command: string) => Promise<string>;
    executeSlashCommandsWithOptions?: (text: string) => Promise<{ isError?: boolean; errorMessage?: string }>;
    toastr?: { success?: (message: string) => void; warning?: (message: string) => void };
  };
  api.getChatMessages = () => latestMessage();
  api.triggerSlash = async command => command;
  api.executeSlashCommandsWithOptions = async () => ({ isError: false });
  api.toastr = {
    success: message => console.log('[preview][success]', message),
    warning: message => console.warn('[preview][warning]', message),
  };
}

function applyScene(sceneKey: string): void {
  const scene = getPreviewScene(sceneKey);
  clearUnifiedPanelState();
  updateSystemPanelState({ messageId: 1, state: scene.state });
  updatePlayerOptionsPanelState({ messageId: 1, options: scene.options });
  setSystemPanelVisible(true);
  setPlayerOptionsPanelVisible(true);
  selectedNpcName.value = '';
  for (const npcName of scene.defaultNpcDetails || []) {
    openNpcDetailWindow(npcName);
  }
}

function toggleSystemPanel(): void {
  setSystemPanelVisible(!unifiedPanelState.systemPanel.visible);
}

function toggleOptionsPanel(): void {
  setPlayerOptionsPanelVisible(!unifiedPanelState.playerOptionsPanel.visible);
}

function openSelectedNpc(): void {
  if (!selectedNpcName.value) {
    return;
  }
  openNpcDetailWindow(selectedNpcName.value);
}

watch(selectedSceneKey, value => {
  applyScene(value);
});

onMounted(() => {
  installPreviewRuntimeMocks();
  mountUnifiedPanelApp();
  applyScene(selectedSceneKey.value);
});

onBeforeUnmount(() => {
  clearUnifiedPanelState();
  unmountUnifiedPanelApp();
});
</script>

<style scoped>
.preview-shell{min-height:100vh;background:radial-gradient(circle at top,#2b1c12 0%,#120d09 55%,#0b0908 100%)}
.preview-toolbar{position:sticky;top:0;z-index:10;display:flex;flex-wrap:wrap;gap:12px;padding:16px 20px;border-bottom:1px solid rgba(196,154,92,.2);background:rgba(18,13,9,.96);backdrop-filter:blur(6px)}
.preview-toolbar__group{display:flex;flex-wrap:wrap;align-items:center;gap:10px}
.preview-label{display:flex;align-items:center;gap:8px;font-size:13px;color:#d8bf93}
.preview-select{min-width:180px;padding:8px 10px;border:1px solid rgba(220,181,119,.28);border-radius:10px;background:#fff;color:#000}
.preview-select option{color:#000;background:#fff}
.preview-btn{appearance:none;border:1px solid rgba(220,181,119,.34);border-radius:999px;padding:8px 12px;background:linear-gradient(180deg,rgba(123,77,38,.42),rgba(74,45,24,.36));color:#fff0d0;cursor:pointer;font-size:12px}
.preview-btn:disabled{opacity:.45;cursor:not-allowed}
.preview-input-wrap{display:flex;align-items:center;gap:8px;padding-left:8px}
.preview-input-label{font-size:12px;color:#cba977}
.preview-textarea{width:280px;min-height:56px;padding:8px 10px;border:1px solid rgba(196,154,92,.25);border-radius:10px;background:rgba(255,248,232,.06);color:#fff1d0;resize:vertical}
#preview-overlay-root{position:relative;min-height:calc(100vh - 90px)}
</style>
