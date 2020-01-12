import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(link: string) {
    return browser.get(link) as Promise<any>;
    // return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(selector: string) {
    return element(by.css(selector)).getText() as Promise<string>;
  }

  getElement(selector: string) {
    return element(by.css(selector));
  }

  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }
}
