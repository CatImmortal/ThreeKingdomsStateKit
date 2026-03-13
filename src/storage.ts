import { recompute全局 } from './recompute';
import { create初始状态, type 状态总表 } from './state';

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
  if (!helper?.getVariables || !helper?.replaceVariables) {
    throw new Error('未找到 TavernHelper.getVariables / replaceVariables，无法读写聊天存档');
  }
  return {
    getVariables: helper.getVariables,
    replaceVariables: helper.replaceVariables,
  };
}

export function 读取聊天变量(): Record<string, any> {
  return 获取变量接口().getVariables({ type: 'chat' }) ?? {};
}

export function 读取原始状态(rootKey = STATE_ROOT_KEY): Partial<状态总表> | undefined {
  return _.get(读取聊天变量(), rootKey) as Partial<状态总表> | undefined;
}

export function 读取上下文宏(rootKey = CONTEXT_MACRO_KEY): string {
  return String(_.get(读取聊天变量(), rootKey, ''));
}

export function 加载状态(rootKey = STATE_ROOT_KEY): 状态总表 {
  const raw = 读取原始状态(rootKey);
  return recompute全局(create初始状态(raw));
}

export function 保存状态(state: 状态总表, rootKey = STATE_ROOT_KEY): 状态总表 {
  const next = recompute全局(create初始状态(state));
  const variables = 读取聊天变量();
  _.set(variables, rootKey, next);
  获取变量接口().replaceVariables(variables, { type: 'chat' });
  return next;
}

export function 保存上下文宏(content: string, rootKey = CONTEXT_MACRO_KEY): string {
  const variables = 读取聊天变量();
  _.set(variables, rootKey, String(content || ''));
  获取变量接口().replaceVariables(variables, { type: 'chat' });
  return String(_.get(variables, rootKey, ''));
}

export function 初始化状态(seed: Partial<状态总表> = {}, rootKey = STATE_ROOT_KEY): 状态总表 {
  return 保存状态(create初始状态(seed), rootKey);
}

export function 更新状态(updater: (state: 状态总表) => 状态总表, rootKey = STATE_ROOT_KEY): 状态总表 {
  const current = 加载状态(rootKey);
  return 保存状态(updater(current), rootKey);
}
