import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login', {
    waitUntil: 'domcontentloaded',
  });

  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: /login/i }).click();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});