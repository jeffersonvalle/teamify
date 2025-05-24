import { test, expect } from '@playwright/test';

test.describe('Login Page Visual Regression', () => {
  test('should match the login page design', async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('networkidle');
    // Espera a que los campos principales estén visibles
    await expect(page.getByLabel('Business email')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByText('Multi-factor authentication')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
    // Captura de pantalla para comparación visual
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('login-page.png', { threshold: 0.05 });
  });
}); 