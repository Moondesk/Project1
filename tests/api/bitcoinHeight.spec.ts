import { test, expect } from '@playwright/test';
import { BitcoinApi } from '../../api/BitcoinApi';

test('@api Bitcoin block height should be available', async ({ request }) => {
  const response = await new BitcoinApi(request).getBitcoinBlockHeight();

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  const blockHeight = body.height;

  await test.step(`Current BTC block height: ${blockHeight}`, async () => {
    expect(blockHeight).toBeGreaterThan(0);
  });
});