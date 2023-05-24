import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      include: ['src/components/**/*.{tsx, ts}'],
      exclude: [
        'src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}',
      ],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: -10,
      clean: true,
    },
    setupFiles: ['./src/setupTests.ts'],
  },
});
