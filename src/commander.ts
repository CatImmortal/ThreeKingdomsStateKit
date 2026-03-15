export function 获取当前用户名(): string {
  const hostWindow = globalThis as typeof globalThis & {
    SillyTavern?: {
      getContext?: () => { user_name?: string };
      name1?: string;
    };
  };
  const userName = hostWindow.SillyTavern?.getContext?.()?.user_name ?? hostWindow.SillyTavern?.name1;
  return String(userName || '').trim();
}

export function 是否主角统军(统属将领: string): boolean {
  const 将领名 = String(统属将领 || '').trim();
  if (!将领名) return false;
  const 当前用户名 = 获取当前用户名();
  return 将领名 === '主角' || (!!当前用户名 && 将领名 === 当前用户名);
}
