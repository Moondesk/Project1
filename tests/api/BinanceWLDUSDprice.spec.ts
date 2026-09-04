import { test, expect } from '@playwright/test';
import BinanceApi from '../../api/BinanceApi';

test('@api Binance WLD price should be available', async ({ request }) => {
  const response = await new BinanceApi(request).getBinancePrice("WLDUSDT");
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  const wldPrice = parseFloat(body.price);

  await test.step(`Current WLD price: $${wldPrice}`, async () => {
    expect(wldPrice).toBeGreaterThan(0);
  });
});