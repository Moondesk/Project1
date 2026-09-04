import { test, expect } from '@playwright/test';
import { CoinGeckoApi } from '../../api/CoinGeckoApi';

test('@api Bitcoin price should be available', async ({ request }) => {
  const response = await new CoinGeckoApi(request).getBitcoinPrice("bitcoin");

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  const bitcoinPrice = body.bitcoin.usd;

  expect(bitcoinPrice).toBeGreaterThan(0);
  
  await test.step(`Current BTC price: $${bitcoinPrice}`, async () => {
    expect(bitcoinPrice).toBeGreaterThan(0);
  });
});