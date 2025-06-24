import { test as base } from '@playwright/test';
import { MainActions } from '../helpers/actions';
import { HeaderComponent } from '../pages/components/index';
import { KPIEnginePage } from '../pages/kpiEnginePage';
import { ContactUsPage } from '../pages/contactUsPage';
import { HomePage } from '../pages/homePage';
import { LearnMorePage } from '../pages/learnMorePage';

type Pages = {
  headerComponent: HeaderComponent;
  kpiEnginePage: KPIEnginePage;
  contactUsPage: ContactUsPage;
  homePage: HomePage;
  mainActions: MainActions;
  learnMorePage: LearnMorePage;
};

export const test = base.extend<Pages>({
  headerComponent: ({ page }, use) => {
    const headerComponent = new HeaderComponent(page);
    use(headerComponent);
  },
  kpiEnginePage: ({ page }, use) => {
    const kpiEnginePage = new KPIEnginePage(page);
    use(kpiEnginePage);
  },
  contactUsPage: ({ page }, use) => {
    const contactUsPage = new ContactUsPage(page);
    use(contactUsPage);
  },
  homePage: ({ page }, use) => {
    const homePage = new HomePage(page);
    use(homePage);
  },
  mainActions: ({ page }, use) => {
    const mainActions = new MainActions(page);
    use(mainActions);
  },
  learnMorePage: ({ page }, use) => {
    const learnMorePage = new LearnMorePage(page);
    use(learnMorePage);
  },
});
