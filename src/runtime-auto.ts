import { setupAssistantReplyHook } from './runtime';

try {
  setupAssistantReplyHook();
} catch (error) {
  console.warn('[ThreeKingdomsStateKit] 注册 AI 回复完成钩子失败，脚本主体仍可使用。', error);
}
