import { recompute全局 } from './recompute';
import { create初始状态, type 状态总表 } from './state';
import { debugError, debugLog, summarizeState, summarizeValue } from './debug';

export const STATE_ROOT_KEY = 'sgbz_state';
export const CONTEXT_MACRO_KEY = 'sgbz_context';

export type 变量接口 = {
  getVariables: (option?: { type: 'chat' }) => Record<string, any>;
  replaceVariables: (variables: Record<string, any>, option?: { type: 'chat' }) => void;
};

type TavernHelperWindow = Window & {
  TavernHelper?: Partial<变量接口>;
};

function 获取变量接口(): 变量接口 {
  const helper = (window as TavernHelperWindow).TavernHelper;
  debugLog('storage', '检查 TavernHelper 变量接口', {
    hasGetVariables: Boolean(helper?.getVariables),
    hasReplaceVariables: Boolean(helper?.replaceVariables),
  });
  if (!helper?.getVariables || !helper?.replaceVariables) {
    const error = new Error('未找到 TavernHelper.getVariables / replaceVariables，无法读写聊天存档');
    debugError('storage', '获取变量接口失败', error);
    throw error;
  }
  return {
    getVariables: helper.getVariables,
    replaceVariables: helper.replaceVariables,
  };
}

export function 读取聊天变量(): Record<string, any> {
  const variables = 获取变量接口().getVariables({ type: 'chat' }) ?? {};
  debugLog('storage', '读取聊天变量完成', summarizeValue(variables));
  return variables;
}

export function 读取原始状态(rootKey = STATE_ROOT_KEY): Partial<状态总表> | undefined {
  const raw = _.get(读取聊天变量(), rootKey) as Partial<状态总表> | undefined;
  debugLog('storage', '读取原始状态', {
    rootKey,
    summary: summarizeValue(raw),
  });
  return raw;
}

export function 读取上下文宏(rootKey = CONTEXT_MACRO_KEY): string {
  const content = String(_.get(读取聊天变量(), rootKey, ''));
  debugLog('storage', '读取上下文宏', {
    rootKey,
    summary: summarizeValue(content),
  });
  return content;
}

export function 加载状态(rootKey = STATE_ROOT_KEY): 状态总表 {
  const raw = 读取原始状态(rootKey);
  const state = recompute全局(create初始状态(raw));
  debugLog('storage', '加载状态完成', {
    rootKey,
    raw: summarizeValue(raw),
    state: summarizeState(state),
  });
  return state;
}

export function 保存状态(state: 状态总表, rootKey = STATE_ROOT_KEY): 状态总表 {
  const next = recompute全局(create初始状态(state));
  const variables = 读取聊天变量();
  debugLog('storage', '准备保存状态', {
    rootKey,
    before: summarizeValue(_.get(variables, rootKey)),
    next: summarizeState(next),
  });
  _.set(variables, rootKey, next);
  try {
    获取变量接口().replaceVariables(variables, { type: 'chat' });
    debugLog('storage', 'replaceVariables 调用完成', {
      rootKey,
      after: summarizeValue(_.get(variables, rootKey)),
    });
  } catch (error) {
    debugError('storage', '保存状态失败', error);
    throw error;
  }
  return next;
}

export function 保存上下文宏(content: string, rootKey = CONTEXT_MACRO_KEY): string {
  const variables = 读取聊天变量();
  debugLog('storage', '准备保存上下文宏', {
    rootKey,
    before: summarizeValue(_.get(variables, rootKey, '')),
    next: summarizeValue(content),
  });
  _.set(variables, rootKey, String(content || ''));
  try {
    获取变量接口().replaceVariables(variables, { type: 'chat' });
    debugLog('storage', '上下文宏保存完成', {
      rootKey,
      after: summarizeValue(_.get(variables, rootKey, '')),
    });
  } catch (error) {
    debugError('storage', '保存上下文宏失败', error);
    throw error;
  }
  return String(_.get(variables, rootKey, ''));
}

export function 初始化状态(seed: Partial<状态总表> = {}, rootKey = STATE_ROOT_KEY): 状态总表 {
  return 保存状态(create初始状态(seed), rootKey);
}

export function 更新状态(updater: (state: 状态总表) => 状态总表, rootKey = STATE_ROOT_KEY): 状态总表 {
  const current = 加载状态(rootKey);
  return 保存状态(updater(current), rootKey);
}
