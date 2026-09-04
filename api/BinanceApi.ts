import type { APIRequestContext } from '@playwright/test';

class BinanceApi {
  constructor(private request: APIRequestContext) {}

  async getBinancePrice(TickerSymbol: string) {
    return this.request.get(
      'https://api.binance.com/api/v3/ticker/price?symbol=' + TickerSymbol
    );
  }
}

export { BinanceApi };
export default BinanceApi;