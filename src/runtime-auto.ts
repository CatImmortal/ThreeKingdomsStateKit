import { debugLog, debugWarn } from './debug';
import { scheduleRestoreRuntimeStateFromCurrentChat, setupAssistantReplyHook, setupChatChangedHook, setupDebugLogToggleButtonHook, setupDebugParseButtonHook, setupMessageDeletedHook, setupMessageSentHook, setupVuePanelToggleButtonHook, teardownRuntimeHooks } from './runtime';

let 已注册PageHide监听 = false;

function setupPageHideHook(): boolean {
  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    debugLog('runtime-auto', '当前环境不支持 pagehide 监听，已跳过注册');
    return false;
  }
  if (已注册PageHide监听) {
    debugLog('runtime-auto', 'pagehide 监听已注册，跳过重复绑定');
    return true;
  }
  window.addEventListener('pagehide', () => {
    debugLog('runtime-auto', '收到 pagehide 事件，准备执行 iframe 销毁兜底清理');
    teardownRuntimeHooks('iframe-pagehide');
  });
  已注册PageHide监听 = true;
  debugLog('runtime-auto', '已注册 pagehide 兜底清理监听');
  return true;
}

try {
  setupAssistantReplyHook();
} catch (error) {
  debugWarn('runtime-auto', '注册 AI 回复完成钩子失败，脚本主体仍可使用。', error);
}

try {
  setupChatChangedHook();
} catch (error) {
  debugWarn('runtime-auto', '注册聊天切换钩子失败，脚本主体仍可使用。', error);
}

try {
  setupMessageSentHook();
} catch (error) {
  debugWarn('runtime-auto', '注册消息发送钩子失败，脚本主体仍可使用。', error);
}

try {
  setupMessageDeletedHook();
} catch (error) {
  debugWarn('runtime-auto', '注册消息删除钩子失败，脚本主体仍可使用。', error);
}

try {
  setupDebugParseButtonHook('解析命令');
} catch (error) {
  debugWarn('runtime-auto', '注册“解析命令”按钮钩子失败，脚本主体仍可使用。', error);
}

try {
  setupDebugLogToggleButtonHook('日志开关');
} catch (error) {
  debugWarn('runtime-auto', '注册“日志开关”按钮钩子失败，脚本主体仍可使用。', error);
}

try {
  setupVuePanelToggleButtonHook('系统界面开关');
} catch (error) {
  debugWarn('runtime-auto', '注册“系统界面开关”按钮钩子失败，脚本主体仍可使用。', error);
}

try {
  setupPageHideHook();
} catch (error) {
  debugWarn('runtime-auto', '注册 pagehide 兜底清理监听失败，脚本主体仍可使用。', error);
}

try {
  scheduleRestoreRuntimeStateFromCurrentChat('runtime-init');
} catch (error) {
  debugWarn('runtime-auto', '初始化调度恢复当前聊天状态失败，脚本主体仍可使用。', error);
}
