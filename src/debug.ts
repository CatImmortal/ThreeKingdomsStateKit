import { 格式化世界时间, 格式化地点, type 状态总表 } from './state';

const DEBUG_PREFIX = '[ThreeKingdomsStateKit]';
const DUPLICATE_LOG_WINDOW_MS = 600;

type 日志级别 = 'log' | 'info' | 'warn' | 'error';

type 重复日志记录 = {
  count: number;
  timer: ReturnType<typeof setTimeout>;
  prefix: string;
  level: 日志级别;
};

let debugEnabled = false;
const 重复日志缓存 = new Map<string, 重复日志记录>();

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

function 输出控制台(level: 日志级别, prefix: string, message: string): void {
  switch (level) {
    case 'info':
      console.info(prefix, message);
      return;
    case 'warn':
      console.warn(prefix, message);
      return;
    case 'error':
      console.error(prefix, message);
      return;
    default:
      console.log(prefix, message);
  }
}

function 清空重复日志摘要(key: string): void {
  const entry = 重复日志缓存.get(key);
  if (!entry) {
    return;
  }
  重复日志缓存.delete(key);
  if (entry.count <= 0) {
    return;
  }
  输出控制台(entry.level, entry.prefix, `重复日志已折叠 ${entry.count} 次`);
}

function 发射日志(level: 日志级别, scope: string, message: string, payload?: unknown): void {
  const prefix = formatPrefix(scope, level === 'log' ? undefined : level);
  const formattedMessage = formatMessage(message, payload);
  const key = `${level}::${scope}::${formattedMessage}`;
  const duplicate = 重复日志缓存.get(key);
  if (duplicate) {
    duplicate.count += 1;
    return;
  }

  输出控制台(level, prefix, formattedMessage);
  const timer = setTimeout(() => 清空重复日志摘要(key), DUPLICATE_LOG_WINDOW_MS);
  重复日志缓存.set(key, {
    count: 0,
    timer,
    prefix,
    level,
  });
}

function 清理全部重复日志缓存(): void {
  for (const [key, entry] of 重复日志缓存.entries()) {
    clearTimeout(entry.timer);
    清空重复日志摘要(key);
  }
}

export function setDebugEnabled(enabled: boolean): boolean {
  清理全部重复日志缓存();
  debugEnabled = Boolean(enabled);
  console.log(`${DEBUG_PREFIX}[debug] ${debugEnabled ? 'enabled' : 'disabled'}`);
  return debugEnabled;
}

export function getDebugEnabled(): boolean {
  return debugEnabled;
}

export function debugInfo(scope: string, message: string, payload?: unknown): void {
  if (!debugEnabled) return;
  发射日志('info', scope, message, payload);
}

export function debugLog(scope: string, message: string, payload?: unknown): void {
  if (!debugEnabled) return;
  发射日志('log', scope, message, payload);
}

export function debugWarn(scope: string, message: string, payload?: unknown): void {
  发射日志('warn', scope, message, payload);
}

export function debugError(scope: string, message: string, error?: unknown): void {
  发射日志('error', scope, message, error);
}

export function summarizeState(state: 状态总表) {
  return {
    世界: {
      当前时间: 格式化世界时间(state.世界?.当前时间),
      当前地点: 格式化地点(state.世界?.当前地点),
      当前剧本: state.世界?.当前剧本 || '',
      近期事件数: state.世界?.近期事件?.length || 0,
    },
    主角: {
      当前生命值: state.主角?.战斗数据?.当前生命值 ?? 0,
      当前体力值: state.主角?.战斗数据?.当前体力值 ?? 0,
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
