import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import legacy from '@vitejs/plugin-legacy';
import eslint from 'vite-plugin-eslint';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr(),
    legacy({
      targets: ['ie >= 11'],
    }),
    eslint({
      include: [`${path.resolve(__dirname, '')}/**/*.ts`],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    restoreMocks: true,
    setupFiles: ['./vitest.setup.ts'],
  },
});
