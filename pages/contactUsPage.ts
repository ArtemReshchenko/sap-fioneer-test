import { type Locator, type Page, expect } from '@playwright/test';

export interface ContactUsData {
  firstName?: string;
  lastName?: string;
  phone?: string;
  jobTitle?: string;
  company?: string;
  workEmail?: string;
  country?: string;
  howCanWeHelpYou?: string;
}

export class ContactUsPage {
  // veriables
  readonly page: Page;
  readonly title: String;
  readonly url: String;
  readonly heading: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly businessEmailField: Locator;
  readonly countryDropDown: Locator;
  readonly howCanWeHelpYouField: Locator;
  readonly privacyPolicyCheckbox: Locator;
  readonly errorMessage: Locator;
  readonly submitButton: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.businessEmailField = page.getByPlaceholder('Business e-mail*');
    this.errorMessage = page.locator('ul.hs-error-msgs li');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.title = 'Get in touch with an expert | SAP Fioneer';
    this.url = 'https://www.sapfioneer.com/contact-sales/';
    this.heading = page.getByRole('heading', {
      name: 'Contact us',
    });
  }

  async submitContactForm() {
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
  }

  async fillBusinessEmail(email: string) {
    await this.businessEmailField.fill(email);
  }

  async verifyErrorMessage(message: string) {
    await expect(this.errorMessage.filter({ hasText: message })).toBeVisible();
  }
}
