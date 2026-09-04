import { test, expect } from '@playwright/test';
import BinanceApi from '../../api/BinanceApi';

test('@api Binance ETH price should be available', async ({ request }) => {
  const response = await new BinanceApi(request).getBinancePrice("ETHUSDT");
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  const ethPrice = parseFloat(body.price);

  await test.step(`Current ETH price: $${ethPrice}`, async () => {
    expect(ethPrice).toBeGreaterThan(0);
  });
});