import { APIRequestContext } from '@playwright/test';

export class BitcoinApi {
  constructor(private request: APIRequestContext) {}

  async getBitcoinBlockHeight() {
    return this.request.get(
      'https://api.blockcypher.com/v1/btc/main'
    );
  }
}