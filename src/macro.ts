import { buildInjectedContext } from './bridge';
import { 加载状态 } from './storage';

type MacroLikeContext = {
  message_id?: number;
  role?: 'user' | 'assistant' | 'system';
};

type MacroRegistry = {
  registerMacroLike: (
    regex: RegExp,
    replace: (context: MacroLikeContext, substring: string, ...args: any[]) => string,
  ) => { unregister: () => void };
  unregisterMacroLike?: (regex: RegExp) => void;
};

type TavernHelperWindow = Window & {
  TavernHelper?: Partial<MacroRegistry>;
};

export const SGBZ_CONTEXT_MACRO_REGEX = /\{\{sgbz_context\}\}/gi;

let 已注册宏: Array<{ regex: RegExp; unregister: () => void }> = [];

function 获取宏接口(): MacroRegistry {
  const globalScope = globalThis as typeof globalThis & Partial<MacroRegistry>;
  const globalApi = typeof globalScope.registerMacroLike === 'function'
    ? {
        registerMacroLike: globalScope.registerMacroLike,
        unregisterMacroLike: typeof globalScope.unregisterMacroLike === 'function' ? globalScope.unregisterMacroLike : undefined,
      }
    : undefined;
  const helperApi = (window as TavernHelperWindow).TavernHelper;
  const api = globalApi?.registerMacroLike ? globalApi : helperApi;
  if (!api?.registerMacroLike) {
    throw new Error('未找到 registerMacroLike，无法注册三国霸主系统宏');
  }
  return {
    registerMacroLike: api.registerMacroLike,
    unregisterMacroLike: api.unregisterMacroLike,
  };
}

export function renderSgbzContextMacro(messageId?: number): string {
  return buildInjectedContext(加载状态(messageId));
}

export function unregisterSgbzMacros(): void {
  const api = 获取宏接口();
  for (const macro of 已注册宏) {
    macro.unregister();
    api.unregisterMacroLike?.(macro.regex);
  }
  已注册宏 = [];
}

export function registerSgbzMacros(): void {
  unregisterSgbzMacros();
  const api = 获取宏接口();
  const entry = api.registerMacroLike(SGBZ_CONTEXT_MACRO_REGEX, context => renderSgbzContextMacro(context.message_id));
  已注册宏.push({ regex: SGBZ_CONTEXT_MACRO_REGEX, unregister: entry.unregister });
}
