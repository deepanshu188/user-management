import { defineVitestConfig } from 'nuxt-vitest/config';

export default defineVitestConfig({
  test: {
    dir: 'tests',
    environment: 'happy-dom',
    restoreMocks: true,
  },
});
