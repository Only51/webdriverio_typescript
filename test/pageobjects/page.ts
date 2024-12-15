import { browser } from '@wdio/globals'
import allureReporter from '@wdio/allure-reporter'
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(path)
    }

    public waitForPageLoadDone(){
        browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
              timeout: 60 * 1000, // 60 seconds
              timeoutMsg: 'Message on failure'
            }
          );browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
              timeout: 60 * 1000, // 60 seconds
              timeoutMsg: 'Message on failure'
            }
          );
    }

    public reportStep(details:string){
      allureReporter.step(details, async (s1) => {
    })
    }
}
