import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
test('login flow', async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login('tomsmith', 'SuperSecretPassword!');

  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: /login/i }).click();
  // await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});