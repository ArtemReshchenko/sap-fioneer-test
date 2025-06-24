import { type Locator, type Page, expect } from '@playwright/test';

export class KPIEnginePage {
  readonly page: Page;
  readonly title: String;
  readonly url: String;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = 'Stay audit-ready with the ESG KPI Engine | SAP Fioneer';
    this.url = 'https://www.sapfioneer.com/finance-esg/esg-kpi-engine/';
    this.heading = page.getByRole('heading', {
      name: 'Master ESG KPI management',
    });
  }
}
