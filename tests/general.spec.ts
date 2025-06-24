import { test } from '../fixtures/fixturePages';

test.beforeEach(async ({ mainActions }) => {
  await mainActions.goTo('/');
});

test('User is redirected to the Learn more page', async ({
  headerComponent,
  learnMorePage,
  mainActions,
}) => {
  await headerComponent.navigateToLearnMore();
  await mainActions.pageIsOpened(
    learnMorePage.url as string,
    learnMorePage.title as string,
    learnMorePage.heading,
  );
  await learnMorePage.verifyScreenshot('learnMorePage');
});

test('User is redirected to the ESG KPI Engine page', async ({
  headerComponent,
  kpiEnginePage,
  mainActions,
}) => {
  await headerComponent.navigateToKPIEngine();
  await mainActions.pageIsOpened(
    kpiEnginePage.url as string,
    kpiEnginePage.title as string,
    kpiEnginePage.heading,
  );
});

test('Verify error message is shown when invalid email is entered', async ({
  homePage,
  mainActions,
  contactUsPage,
}) => {
  await mainActions.click(homePage.getInTouchButton);
  await mainActions.pageIsOpened(
    contactUsPage.url as string,
    contactUsPage.title as string,
    contactUsPage.heading,
  );
  await contactUsPage.fillBusinessEmail('1111111111');
  await contactUsPage.submitContactForm();
  await contactUsPage.verifyErrorMessage('Email must be formatted correctly.');
});
