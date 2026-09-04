import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
 
  retries: 2,
  
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  reporter: [
    ['html'],
    ['list'],
    ['junit', { outputFile: '/project1/junit.xml' }]
  ]
});