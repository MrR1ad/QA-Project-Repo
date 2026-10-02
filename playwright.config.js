const { devices } = require('@playwright/test');

module.exports = {
  timeout: 60000,
  retries: 1, // If a test fails, run it one more time before reporting it as failed
  reporter: [['list'], ['html', { open: 'never' }]],
  testDir: './tests',
  use: {
    headless: true, //browser runs without a visible window
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    baseURL: 'http://localhost:8080/', // Update this to match your frontend's local server URL
    screenshot: 'only-on-failure', // screenshot the failed test
  },
  projects: [
    // the browsers we are testing
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
};
