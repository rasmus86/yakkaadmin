import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: './vitest.setup.ts',
      globals: true,
      environment: 'jsdom',
      server: {
        deps: {
          inline: ['vuetify'],
        },
      },
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'json', 'html'],
      },
      deps: {
        optimizer: {
          web: {
            include: ['vuetify'],
          },
        },
      },
    },
  }),
);
