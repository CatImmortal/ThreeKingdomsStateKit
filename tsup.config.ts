import { defineConfig } from 'tsup';
import vue from 'unplugin-vue/esbuild';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  platform: 'browser',
  target: 'es2020',
  outDir: 'dist',
  clean: true,
  minify: true,
  noExternal: ['vue'],
  define: {
    __VUE_OPTIONS_API__: 'false',
    __VUE_PROD_DEVTOOLS__: 'false',
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
  },
  esbuildPlugins: [vue()],
});
