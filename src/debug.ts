import type { 状态总表 } from './state';

const DEBUG_PREFIX = '[ThreeKingdomsStateKit]';

let debugEnabled = false;

function formatPrefix(scope: string, level?: 'info' | 'warn' | 'error'): string {
  return level ? `${DEBUG_PREFIX}[${level}][${scope}]` : `${DEBUG_PREFIX}[${scope}]`;
}

function stringifyPayload(payload: unknown): string {
  if (payload instanceof Error) {
    return payload.stack || `${payload.name}: ${payload.message}`;
  }
  if (typeof payload === 'string') {
    return payload;
  }
  if (payload === undefined) {
    return '';
  }
  try {
    return JSON.stringify(payload, null, 2);
  } catch {
    return String(payload);
  }
}

function formatMessage(message: string, payload?: unknown): string {
  if (payload === undefined) {
    return message;
  }
  return `${message}\n${stringifyPayload(payload)}`;
}

export function setDebugEnabled(enabled: boolean): boolean {
  debugEnabled = Boolean(enabled);
  console.log(`${DEBUG_PREFIX}[debug] ${debugEnabled ? 'enabled' : 'disabled'}`);
  return debugEnabled;
}

export function getDebugEnabled(): boolean {
  return debugEnabled;
}

export function debugInfo(scope: string, message: string, payload?: unknown): void {
  if (!debugEnabled) return;
  console.info(formatPrefix(scope, 'info'), formatMessage(message, payload));
}

export function debugLog(scope: string, message: string, payload?: unknown): void {
  if (!debugEnabled) return;
  console.log(formatPrefix(scope), formatMessage(message, payload));
}

export function debugWarn(scope: string, message: string, payload?: unknown): void {
  console.warn(formatPrefix(scope, 'warn'), formatMessage(message, payload));
}

export function debugError(scope: string, message: string, error?: unknown): void {
  console.error(formatPrefix(scope, 'error'), formatMessage(message, error));
}

export function summarizeState(state: 状态总表) {
  return {
    世界: {
      当前时间: state.世界?.当前时间 || '',
      当前地点: state.世界?.当前地点 || '',
      当前剧本: state.世界?.当前剧本 || '',
      近期事件数: state.世界?.近期事件?.length || 0,
    },
    主角: {
      当前生命值: state.主角?.当前生命值 ?? 0,
      当前体力值: state.主角?.当前体力值 ?? 0,
      金钱: state.主角?.金钱 ?? 0,
      积分: state.主角?.积分 ?? 0,
      声望: state.主角?.声望 ?? 0,
      官职: state.主角?.官职 || '',
      爵位: state.主角?.爵位 || '',
    },
    势力数量: Object.keys(state.势力 || {}).length,
    NPC数量: Object.keys(state.NPC || {}).length,
    任务数量: Object.keys(state.任务 || {}).length,
    商城数量: Object.keys(state.商城 || {}).length,
    updatedAt: state.meta?.updatedAt || '',
  };
}

export function summarizeValue(value: unknown): unknown {
  if (Array.isArray(value)) {
    return { type: 'array', length: value.length };
  }
  if (_.isPlainObject(value)) {
    const keys = Object.keys(value as Record<string, unknown>);
    return { type: 'object', keys, keyCount: keys.length };
  }
  if (typeof value === 'string') {
    return { type: 'string', length: value.length, preview: value.slice(0, 120) };
  }
  return value;
}
