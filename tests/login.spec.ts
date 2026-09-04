import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Suite', () => {

  test('Login com usuário válido', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await loginPage.validateLoginSuccess();
  });

  test('Login com senha inválida', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      'standard_user',
      'senha_errada'
    );

    await page
      .locator('[data-test="error"]')
      .waitFor();

  });

});