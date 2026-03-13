import {
  create世界,
  create主角,
  createNPC,
  create任务,
  create商品条目,
  create初始状态,
} from './state';
import * as rules from './rules';
import * as commands from './commands';
import * as storage from './storage';
import * as executor from './executor';
import * as context from './context';
import * as protocol from './protocol';
import * as bridge from './bridge';
import * as macro from './macro';
import * as runtime from './runtime';
import * as debug from './debug';
import { recomputeNPC, recompute主角, recompute全局, recompute六维, recompute美人属性, recompute角色战斗数据 } from './recompute';

export * from './state';
export * from './rules';
export * from './recompute';
export * from './commands';
export * from './storage';
export * from './executor';
export * from './context';
export * from './protocol';
export * from './bridge';
export * from './macro';
export * from './runtime';
export * from './debug';

export const ThreeKingdomsStateKit = {
  结构: {
    create世界,
    create主角,
    createNPC,
    create任务,
    create商品条目,
    create初始状态,
  },
  规则: rules,
  命令: commands,
  存档: storage,
  执行: executor,
  上下文: context,
  协议: protocol,
  桥接: bridge,
  宏: macro,
  运行时: runtime,
  调试: debug,
  handleAssistantReply: bridge.handleAssistantReply,
  setupAssistantReplyHook: runtime.setupAssistantReplyHook,
  teardownAssistantReplyHook: runtime.teardownAssistantReplyHook,
  setDebug: debug.setDebugEnabled,
  getDebug: debug.getDebugEnabled,
  重算: {
    recompute六维,
    recompute角色战斗数据,
    recompute美人属性,
    recomputeNPC,
    recompute主角,
    recompute全局,
  },
};

if (typeof initializeGlobal === 'function') {
  initializeGlobal('ThreeKingdomsStateKit', ThreeKingdomsStateKit);
}

(window as Window & { ThreeKingdomsStateKit?: typeof ThreeKingdomsStateKit }).ThreeKingdomsStateKit = ThreeKingdomsStateKit;

try {
  macro.registerSgbzMacros();
} catch (error) {
  console.warn('[ThreeKingdomsStateKit] 注册宏失败，脚本主体仍可使用。', error);
}

try {
  runtime.setupAssistantReplyHook();
} catch (error) {
  console.warn('[ThreeKingdomsStateKit] 注册 AI 回复完成钩子失败，脚本主体仍可使用。', error);
}

export default ThreeKingdomsStateKit;
