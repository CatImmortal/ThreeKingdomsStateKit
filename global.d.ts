declare const _: typeof import('lodash');

declare function initializeGlobal(global: string, value: unknown): void;

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
