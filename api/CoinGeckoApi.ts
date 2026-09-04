import { APIRequestContext } from '@playwright/test';

export class CoinGeckoApi {
  constructor(private request: APIRequestContext) {}

  async getBitcoinPrice(tickerSymbol: string) {
    return this.request.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${tickerSymbol}&vs_currencies=usd`
    );
  }
}