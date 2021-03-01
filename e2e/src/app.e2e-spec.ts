import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { element } from '@angular/core/src/render3';

describe('workspace-project App', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display addition of number', () => {
    page.navigateTo();
    page.getTitleText();
    page.setSumFirst('3');
    page.setSumSecond('5');
    page.click();
    expect(page.getSum()).toEqual('8');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
    browser.sleep(10000);
  });
});
