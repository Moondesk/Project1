import { Page, Locator, expect } from '@playwright/test';

export class DebankHomePage {
  
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://debank.com/');
  }

  async login(Cryptoaddress: string) {
  
    await this.page.getByRole('textbox').click();
    await this.page.getByRole('textbox').fill(Cryptoaddress);
    await this.page.getByTitle(Cryptoaddress).click();
    await this.page.waitForTimeout(4000);
    await expect(this.page.getByRole('main')).toContainText('$27');
  }

  async validateSuccess() {
    await expect(this.page).toHaveURL(/profile\/.*/);
  }

   getSayHiButton(): Locator {
    return this.page.locator('button:has-text("Say Hi"), div:has-text("Say Hi")').first();
  }
}