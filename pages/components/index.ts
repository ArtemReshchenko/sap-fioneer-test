import { Locator, Page, expect } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly productsBookmark: Locator;
  readonly kpiEngineBookmark: Locator;
  readonly financeBookmark: Locator;
  readonly companyBookmark: Locator;
  readonly learnMoreLink: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.productsBookmark = page.getByRole('button', { name: 'Products' });
    this.kpiEngineBookmark = page.getByRole('link', { name: 'ESG KPI Engine' });
    this.financeBookmark = page.locator('button').filter({ hasText: /^Finance & ESG$/ });
    this.companyBookmark = page.getByRole('button', { name: 'Company' });
    this.learnMoreLink = page.locator('#menu-walker').getByRole('link', { name: 'Learn more' });
  }

  async expandProductsBookmark() {
    await this.productsBookmark.click();
    await expect(this.financeBookmark).toBeVisible();
  }

  async navigateToKPIEngine() {
    await this.expandProductsBookmark();
    await this.financeBookmark.click();
    await this.kpiEngineBookmark.click();
  }

  async navigateToLearnMore() {
    await this.companyBookmark.click();
    await this.learnMoreLink.click();
  }
}
