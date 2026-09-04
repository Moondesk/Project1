import { test, expect } from '@playwright/test';
import BinanceApi from '../../api/BinanceApi';

test('@api Binance ZEC price should be available', async ({ request }) => {
  const response = await new BinanceApi(request).getBinancePrice("ZECUSDC");
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  const zecPrice = parseFloat(body.price);

  await test.step(`Current ZEC price: $${zecPrice}`, async () => {
    expect(zecPrice).toBeGreaterThan(0);
  });
});