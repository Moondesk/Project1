import { test } from '@playwright/test';
import { DebankHomePage } from '../pages/debankHome';

test.describe('Add Address', () => {

  test('Open Home page and add address', async ({ page }) => {
    
    const debankHome = new DebankHomePage(page);

    await debankHome.navigate();
    await debankHome.login(
      '0xd43a72d2212d8c285299f2b2655f8ccb946e9d8b',);
    await debankHome.validateSuccess();
  });


});