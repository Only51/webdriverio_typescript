import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get imgLogo () {
        return $('//android.widget.Image[@text="Elfie icon"]');
    }

    public get menuHamburger  () {
        return $('//android.view.View[@text="menu"]');
    }

    public get lblCopyRight  () {
        return $('//android.widget.TextView[@text="Copyright © 2024 Elfie Pte. Ltd."]');
    }

    public get btnAcceptAll(){
        return $('//android.widget.Button[@text="Accept All"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async isLogoDisplay () {
        await this.imgLogo.waitForDisplayed({ timeout: 30000 });
        await this.imgLogo.isDisplayed();
    }

    public async clickMenu () {
        await this.menuHamburger.click();
    }

    public async scrollToCopyRight () {
        let elementFound = false;
        while(elementFound==false){
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
            // isCopyRightDisplay = this.lblCopyRight.isDisplayed();

            if(await this.lblCopyRight.isDisplayed() == true){
                break;
            }
            console.log("Copyright display: " + this.lblCopyRight.isDisplayed());
        }
    }

}

export default new HomePage();
