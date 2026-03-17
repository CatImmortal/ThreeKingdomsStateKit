import { reactive } from 'vue';
import type { 玩家选项 } from '../protocol';
import type { 状态总表 } from '../state';

export type PanelPosition = {
  mode: 'default' | 'custom';
  left: number;
  top: number;
};

export type PanelState<T> = {
  visible: boolean;
  latestMessageId: number | null;
  position: PanelPosition;
} & T;

export type NpcDetailWindowState = {
  id: string;
  npcName: string;
  latestMessageId: number | null;
  position: PanelPosition;
  zIndex: number;
};

export type UnifiedPanelStore = {
  systemPanel: PanelState<{ state: 状态总表 | null }>;
  playerOptionsPanel: PanelState<{ options: 玩家选项[]; collapsed: boolean }>;
  npcDetailWindows: NpcDetailWindowState[];
};

const SYSTEM_PANEL_POSITION_KEY = 'tk-system-panel-position';
const PLAYER_OPTIONS_POSITION_KEY = 'tk-player-options-panel-position';

function 读取位置(key: string): PanelPosition {
  try {
    const raw = globalThis.localStorage?.getItem(key);
    if (!raw) {
      return { mode: 'default', left: 0, top: 0 };
    }
    const parsed = JSON.parse(raw) as Partial<PanelPosition>;
    if (parsed.mode !== 'custom' && parsed.mode !== 'default') {
      return { mode: 'default', left: 0, top: 0 };
    }
    return {
      mode: parsed.mode,
      left: Number(parsed.left || 0),
      top: Number(parsed.top || 0),
    };
  } catch {
    return { mode: 'default', left: 0, top: 0 };
  }
}

function 保存位置(key: string, position: PanelPosition): void {
  try {
    globalThis.localStorage?.setItem(key, JSON.stringify(position));
  } catch {}
}

let npcDetailWindowSequence = 0;
let npcDetailWindowZIndex = 1;

export const unifiedPanelState = reactive<UnifiedPanelStore>({
  systemPanel: {
    visible: false,
    latestMessageId: null,
    state: null,
    position: 读取位置(SYSTEM_PANEL_POSITION_KEY),
  },
  playerOptionsPanel: {
    visible: false,
    latestMessageId: null,
    options: [],
    collapsed: false,
    position: 读取位置(PLAYER_OPTIONS_POSITION_KEY),
  },
  npcDetailWindows: [],
});

export function updateSystemPanelState(payload: { messageId: number; state: 状态总表 }): void {
  unifiedPanelState.systemPanel.latestMessageId = payload.messageId;
  unifiedPanelState.systemPanel.state = payload.state;
}

export function updatePlayerOptionsPanelState(payload: { messageId: number; options?: 玩家选项[] }): void {
  const options = payload.options ?? [];
  unifiedPanelState.playerOptionsPanel.latestMessageId = payload.messageId;
  unifiedPanelState.playerOptionsPanel.options = options;
  unifiedPanelState.playerOptionsPanel.visible = options.length > 0;
}

export function setSystemPanelVisible(visible: boolean): void {
  unifiedPanelState.systemPanel.visible = visible;
}

export function setPlayerOptionsPanelVisible(visible: boolean): void {
  unifiedPanelState.playerOptionsPanel.visible = visible;
}

export function setPlayerOptionsPanelCollapsed(collapsed: boolean): void {
  unifiedPanelState.playerOptionsPanel.collapsed = collapsed;
}

export function togglePlayerOptionsPanelCollapsed(): void {
  unifiedPanelState.playerOptionsPanel.collapsed = !unifiedPanelState.playerOptionsPanel.collapsed;
}

export function setSystemPanelPosition(left: number, top: number): void {
  const position = { mode: 'custom' as const, left, top };
  unifiedPanelState.systemPanel.position = position;
  保存位置(SYSTEM_PANEL_POSITION_KEY, position);
}

export function setPlayerOptionsPanelPosition(left: number, top: number): void {
  const position = { mode: 'custom' as const, left, top };
  unifiedPanelState.playerOptionsPanel.position = position;
  保存位置(PLAYER_OPTIONS_POSITION_KEY, position);
}

export function resetSystemPanelPosition(): void {
  const position = { mode: 'default' as const, left: 0, top: 0 };
  unifiedPanelState.systemPanel.position = position;
  保存位置(SYSTEM_PANEL_POSITION_KEY, position);
}

export function resetPlayerOptionsPanelPosition(): void {
  const position = { mode: 'default' as const, left: 0, top: 0 };
  unifiedPanelState.playerOptionsPanel.position = position;
  保存位置(PLAYER_OPTIONS_POSITION_KEY, position);
}

export function openNpcDetailWindow(npcName: string): string | null {
  const state = unifiedPanelState.systemPanel.state;
  if (!npcName || !state?.NPC?.[npcName]) {
    return null;
  }
  npcDetailWindowSequence += 1;
  npcDetailWindowZIndex += 1;
  const index = unifiedPanelState.npcDetailWindows.length;
  const windowId = `npc-detail-${npcDetailWindowSequence}`;
  unifiedPanelState.npcDetailWindows.push({
    id: windowId,
    npcName,
    latestMessageId: unifiedPanelState.systemPanel.latestMessageId,
    position: {
      mode: 'default',
      left: 40 + index * 28,
      top: 64 + index * 28,
    },
    zIndex: npcDetailWindowZIndex,
  });
  return windowId;
}

export function closeNpcDetailWindow(id: string): void {
  unifiedPanelState.npcDetailWindows = unifiedPanelState.npcDetailWindows.filter(window => window.id !== id);
}

export function focusNpcDetailWindow(id: string): void {
  const window = unifiedPanelState.npcDetailWindows.find(item => item.id === id);
  if (!window) {
    return;
  }
  npcDetailWindowZIndex += 1;
  window.zIndex = npcDetailWindowZIndex;
}

export function setNpcDetailWindowPosition(id: string, left: number, top: number): void {
  const window = unifiedPanelState.npcDetailWindows.find(item => item.id === id);
  if (!window) {
    return;
  }
  window.position = { mode: 'custom', left, top };
}

export function resetNpcDetailWindowPosition(id: string): void {
  const index = unifiedPanelState.npcDetailWindows.findIndex(window => window.id === id);
  if (index < 0) {
    return;
  }
  unifiedPanelState.npcDetailWindows[index].position = {
    mode: 'default',
    left: 40 + index * 28,
    top: 64 + index * 28,
  };
}

export function clearUnifiedPanelState(): void {
  unifiedPanelState.systemPanel.visible = false;
  unifiedPanelState.systemPanel.latestMessageId = null;
  unifiedPanelState.systemPanel.state = null;
  unifiedPanelState.playerOptionsPanel.visible = false;
  unifiedPanelState.playerOptionsPanel.latestMessageId = null;
  unifiedPanelState.playerOptionsPanel.options = [];
  unifiedPanelState.playerOptionsPanel.collapsed = false;
  unifiedPanelState.npcDetailWindows = [];
}
