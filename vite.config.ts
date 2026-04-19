import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    __BUILD_DATE__: JSON.stringify(
      new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
    ),
  },
  resolve: {
    alias: {
      components: r('./src/components'),
      hooks: r('./src/hooks'),
      data: r('./src/data'),
      types: r('./src/types'),
      styles: r('./src/styles'),
      contexts: r('./src/contexts'),
      i18n: r('./src/i18n'),
    },
  },
});
