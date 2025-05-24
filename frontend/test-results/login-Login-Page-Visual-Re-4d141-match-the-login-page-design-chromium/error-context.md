# Test info

- Name: Login Page Visual Regression >> should match the login page design
- Location: /home/jeffersonvalle/Code/LambdaLoopers/teamify/frontend/tests/login.spec.ts:4:7

# Error details

```
Error: expect.toBeVisible: Error: strict mode violation: getByLabel('Password') resolved to 2 elements:
    1) <input value="" type="password" name="password" id=":Rlalbrqkq:" aria-invalid="false" autocomplete="current-password" placeholder="Enter your password" class="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputAdornedEnd css-1gctnaj-MuiInputBase-input-MuiFilledInput-input"/> aka getByRole('textbox', { name: 'Password' })
    2) <button tabindex="0" type="button" aria-label="toggle password visibility" class="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeLarge css-1pux6rn-MuiButtonBase-root-MuiIconButton-root">…</button> aka getByRole('button', { name: 'toggle password visibility' })

Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByLabel('Password')

    at /home/jeffersonvalle/Code/LambdaLoopers/teamify/frontend/tests/login.spec.ts:9:47
```

# Page snapshot

```yaml
- heading "Teamify" [level=5]
- heading "Welcome back" [level=4]
- text: Business email
- textbox "Business email"
- text: Password
- textbox "Password"
- button "toggle password visibility"
- paragraph: Multi-factor authentication
- checkbox
- link "Forgot password?":
  - /url: "#"
- button "Sign in"
- alert
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test.describe('Login Page Visual Regression', () => {
   4 |   test('should match the login page design', async ({ page }) => {
   5 |     await page.goto('/login');
   6 |     await page.waitForLoadState('networkidle');
   7 |     // Espera a que los campos principales estén visibles
   8 |     await expect(page.getByLabel('Business email')).toBeVisible();
>  9 |     await expect(page.getByLabel('Password')).toBeVisible();
     |                                               ^ Error: expect.toBeVisible: Error: strict mode violation: getByLabel('Password') resolved to 2 elements:
  10 |     await expect(page.getByText('Multi-factor authentication')).toBeVisible();
  11 |     await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
  12 |     // Captura de pantalla para comparación visual
  13 |     expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('login-page.png', { threshold: 0.05 });
  14 |   });
  15 | }); 
```