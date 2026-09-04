import { test, expect } from '@playwright/test';
import BinanceApi from '../../api/BinanceApi';

test('@api Binance HOME price should be available', async ({ request }) => {
  const response = await new BinanceApi(request).getBinancePrice("HOMEUSDC");
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  const homePrice = parseFloat(body.price);

  await test.step(`Current HOME price: $${homePrice}`, async () => {
    expect(homePrice).toBeGreaterThan(0);
  });
});