import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Suite', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Login válido', async () => {
    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );
  });

  test('Login inválido', async () => {
    await loginPage.login(
      'standard_user',
      'wrong_password'
    );
  });

});