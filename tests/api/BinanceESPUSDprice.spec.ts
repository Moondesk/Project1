import { test, expect } from '@playwright/test';
import BinanceApi from '../../api/BinanceApi';

test('@api Binance ESP price should be available', async ({ request }) => {
  const response = await new BinanceApi(request).getBinancePrice("ESPUSDC");
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  const espPrice = parseFloat(body.price);

  await test.step(`Current ESP price: $${espPrice}`, async () => {
    expect(espPrice).toBeGreaterThan(0);
  });
});