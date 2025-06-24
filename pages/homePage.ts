import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly getInTouchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getInTouchButton = page.locator('.hero-block').getByRole('link', {
      name: 'Get in touch',
    });
  }
}
