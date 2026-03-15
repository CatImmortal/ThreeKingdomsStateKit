import lodash from 'lodash';

(globalThis as typeof globalThis & { _: typeof lodash })._ = lodash;

const { createApp } = await import('vue');
const { default: PreviewApp } = await import('./PreviewApp.vue');

createApp(PreviewApp).mount('#app');
