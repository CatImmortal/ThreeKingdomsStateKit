import { debugWarn } from './debug';
import { setupAssistantReplyHook, setupDebugLogToggleButtonHook, setupDebugParseButtonHook } from './runtime';

try {
  setupAssistantReplyHook();
} catch (error) {
  debugWarn('runtime-auto', '注册 AI 回复完成钩子失败，脚本主体仍可使用。', error);
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
