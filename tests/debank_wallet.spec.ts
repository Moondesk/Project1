import { test, expect } from '@playwright/test';
import { DebankHomePage } from '../pages/debankHome';

test('Say Hi button is available', async ({ page }) => {
  const debankHome = new DebankHomePage(page);

    await debankHome.navigate();
    await debankHome.login(
      '0xd43a72d2212d8c285299f2b2655f8ccb946e9d8b',);
  
  // Check if the Say Hi button exists and is visible
  const button = debankHome.getSayHiButton();
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();
  
});
