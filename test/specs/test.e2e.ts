import { browser, expect } from '@wdio/globals'
import SearchPage from '../pageobjects/search.page'
import HomePage from '../pageobjects/elfie.page'
import allureReporter from '@wdio/allure-reporter'

describe('Elfie home page', () => {
    
    it('should display search value', async () => {

        allureReporter.addStep("Open Google page");
        await SearchPage.open();

        allureReporter.addStep("Search Elfie on Google");
        await SearchPage.searchGoogle('Elfie');

        allureReporter.addStep("Wait for page load done");
        await SearchPage.waitForPageLoadDone();

        allureReporter.addStep("Verify Elfie logo display");
        await HomePage.imgLogo.waitForDisplayed({ timeout: 30000 })
        await expect(HomePage.imgLogo).toBeExisting();

        allureReporter.addStep("Click on menu Hamburger");
        await HomePage.clickMenu();

        allureReporter.addStep("Expected menu icon change to 'x'");
        await expect(HomePage.menuHamburger).toBeExisting()

        allureReporter.addStep("Capture screenshot");
        await browser.pause(2000);
        // await HomePage.menuHamburger.saveScreenshot("F:\\webdriverio\\webdriverio-mobile-tests\\reports\\html-reports\\screenshots\\xMenuActual.png");
        // const comapre =  await browser.compareImages("getSimilarity","F:\\webdriverio\\webdriverio-mobile-tests\\reports\\html-reports\\screenshots\\xMenuBaseline.png","F:\\webdriverio\\webdriverio-mobile-tests\\reports\\html-reports\\screenshots\\xMenuActual.png",{});
        // comapre.score.should.be.above(0.2);

        allureReporter.addStep("Scroll down");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        allureReporter.addStep("Wait for dialog Accept cookies display");
        HomePage.btnAcceptAll.waitForDisplayed({ timeout: 30000 });

        allureReporter.addStep("Click on button Accept All");
        HomePage.btnAcceptAll.click();

        allureReporter.addStep("Scroll down until Copyright element display");
        await HomePage.scrollToCopyRight();

        allureReporter.addStep("Verify text of label Copyright");
        await expect(HomePage.lblCopyRight).toHaveText('Copyright © 2024 Elfie Pte. Ltd.');

        allureReporter.addStep("Take screenshot");
        await browser.takeScreenshot();
    })
})

