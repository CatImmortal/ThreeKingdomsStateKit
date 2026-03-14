import {
  create世界,
  create主角,
  createNPC,
  create任务,
  create商品条目,
  create势力,
  create势力集合,
  create城池,
  create军队,
  create政策,
  create初始状态,
} from './state';
import {
  解析命令块,
  解析玩家选项块,
  移除命令协议块,
  移除玩家选项块,
  包装命令块,
} from './protocol';
import { handleAssistantReply } from './bridge';
import { registerSgbzMacros } from './macro';
import './runtime-auto';
import {
  handlePlayerOptionClick,
  setupAssistantReplyHook,
  teardownAssistantReplyHook,
  setupMessageSentHook,
  teardownMessageSentHook,
  setupMessageDeletedHook,
  teardownMessageDeletedHook,
  setupChatChangedHook,
  teardownChatChangedHook,
  setupDebugParseButtonHook,
  teardownDebugParseButtonHook,
  setupDebugLogToggleButtonHook,
  teardownDebugLogToggleButtonHook,
  setupVuePanelToggleButtonHook,
  teardownVuePanelToggleButtonHook,
  toggleVuePanel,
  teardownRuntimeHooks,
} from './runtime';
import { getDebugEnabled, setDebugEnabled, debugWarn } from './debug';

export {
  create世界,
  create主角,
  createNPC,
  create任务,
  create商品条目,
  create势力,
  create势力集合,
  create城池,
  create军队,
  create政策,
  create初始状态,
  解析命令块,
  解析玩家选项块,
  移除命令协议块,
  移除玩家选项块,
  包装命令块,
  handleAssistantReply,
  registerSgbzMacros,
  handlePlayerOptionClick,
  setupAssistantReplyHook,
  teardownAssistantReplyHook,
  setupMessageSentHook,
  teardownMessageSentHook,
  setupMessageDeletedHook,
  teardownMessageDeletedHook,
  setupChatChangedHook,
  teardownChatChangedHook,
  setupDebugParseButtonHook,
  teardownDebugParseButtonHook,
  setupDebugLogToggleButtonHook,
  teardownDebugLogToggleButtonHook,
  setupVuePanelToggleButtonHook,
  teardownVuePanelToggleButtonHook,
  toggleVuePanel,
  teardownRuntimeHooks,
  setDebugEnabled,
  getDebugEnabled,
};

export const ThreeKingdomsStateKit = {
  结构: {
    create世界,
    create主角,
    createNPC,
    create任务,
    create商品条目,
    create势力,
    create势力集合,
    create城池,
    create军队,
    create政策,
    create初始状态,
  },
  协议: {
    解析命令块,
    解析玩家选项块,
    移除命令协议块,
    移除玩家选项块,
    包装命令块,
  },
  handleAssistantReply,
  setupAssistantReplyHook,
  teardownAssistantReplyHook,
  setupMessageSentHook,
  teardownMessageSentHook,
  setupMessageDeletedHook,
  teardownMessageDeletedHook,
  setupChatChangedHook,
  teardownChatChangedHook,
  setupDebugParseButtonHook,
  teardownDebugParseButtonHook,
  setupDebugLogToggleButtonHook,
  teardownDebugLogToggleButtonHook,
  setupVuePanelToggleButtonHook,
  teardownVuePanelToggleButtonHook,
  toggleVuePanel,
  handlePlayerOptionClick,
  teardownRuntimeHooks,
  setDebug: setDebugEnabled,
  getDebug: getDebugEnabled,
  registerSgbzMacros,
};

if (typeof initializeGlobal === 'function') {
  initializeGlobal('ThreeKingdomsStateKit', ThreeKingdomsStateKit);
}

(window as Window & { ThreeKingdomsStateKit?: typeof ThreeKingdomsStateKit }).ThreeKingdomsStateKit = ThreeKingdomsStateKit;

try {
  registerSgbzMacros();
} catch (error) {
  debugWarn('index', '注册宏失败，脚本主体仍可使用。', error);
}

export default ThreeKingdomsStateKit;
