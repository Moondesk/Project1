import { test, expect } from '@playwright/test';
import { CoinGeckoApi } from '../../api/CoinGeckoApi';

test('@api Orderly price should be available', async ({ request }) => {
  const response = await new CoinGeckoApi(request).getBitcoinPrice("orderly-network");

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  const orderlyPrice = body['orderly-network'].usd;

  expect(orderlyPrice).toBeGreaterThan(0);
  
  await test.step(`Current ORDERLY price: $${orderlyPrice}`, async () => {
    expect(orderlyPrice).toBeGreaterThan(0);
  });
});