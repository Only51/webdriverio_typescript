import { $, browser } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get txtSearch () {
        return $('//android.view.View[@resource-id="tsf"]/android.view.View[1]/android.widget.EditText');
    }

    public get linkSearchResult () {
        return $('//android.view.View[@text="Elfie • Digital health • It pays to get better"]');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async searchGoogle (keyvalue: string) {
        await this.txtSearch.setValue(keyvalue);
        browser.pause(2000);
        await browser.keys('Enter');
        await this.linkSearchResult.waitForDisplayed({ timeout: 10000 });
        await this.linkSearchResult.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('https://www.google.com/');
    }
}

export default new SearchPage();
