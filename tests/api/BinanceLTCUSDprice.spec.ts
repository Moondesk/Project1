import { test, expect } from '@playwright/test';
import BinanceApi from '../../api/BinanceApi';

test('@api Binance LTC price should be available', async ({ request }) => {
  const response = await new BinanceApi(request).getBinancePrice("LTCUSDT");
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  const ltcPrice = parseFloat(body.price);

  await test.step(`Current LTC price: $${ltcPrice}`, async () => {
    expect(ltcPrice).toBeGreaterThan(0);
  });
});