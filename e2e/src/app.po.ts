import { browser, by, element } from 'protractor';

export class AppPage {
  // sumFirst = element(by.id('sumFirst'));
  // //  first =  element(by.css('input[type="text"]'));
  //  sumSecond = element(by.css('input.sumSecond'));
  //  addButton = element(by.css('[ng-click="sum()"]'));

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  // getCalculator() {
  //   return element(by.tagName('app-calculator')).getText() as Promise<string>;
  // }

   setSumFirst(firstNo) {
     return element(by.className('sumFirst')).sendKeys(firstNo);
   }

   setSumSecond(secondNo) {
     return element(by.className('sumSecond')).sendKeys(secondNo);
   }

   click() {
    return element(by.className('addButton')).click();
   }

   getSum() {
     return  element(by.className('addition')).getText();
   }
}
