import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      components: r('./src/components'),
      hooks: r('./src/hooks'),
      data: r('./src/data'),
      types: r('./src/types'),
      styles: r('./src/styles'),
    },
  },
});
