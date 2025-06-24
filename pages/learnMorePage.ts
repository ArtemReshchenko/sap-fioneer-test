import { Page, Locator, expect } from '@playwright/test';

export class LearnMorePage {
  readonly page: Page;
  readonly title: string;
  readonly url: string;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = 'Why SAP Fioneer | SAP Fioneer';
    this.url = 'https://www.sapfioneer.com/why-sap-fioneer/';
    this.heading = page.getByRole('heading', { name: 'Rock-solid technology. Bold creativity.' });
  }

  async verifyScreenshot(name: string) {
    await expect(this.page).toHaveScreenshot(`${name}.png`, { fullPage: true });
  }
}
