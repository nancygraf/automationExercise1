const { test, expect } = require('@playwright/test');
const HomePage                     = require("../pageObjects/HomePage.js");
const SingInPage                   = require('../pageObjects/SingInPage.js');
const HomePageLogado               = require("../pageObjects/HomePageLogado.js");
const testCase4                    = require('../resources/testData/testCase4.js');


test('Test Case 4', async ({ page }) => {
    let homePage       = new HomePage(page)
    let singInPage     = new SingInPage(page)
    let homePageLogado = new HomePageLogado(page)


    await page.goto('https://automationexercise.com/');

    expect(await homePage.isCarouselShown()).toBe(true);
    
    await homePage.clickLoginLink();

    expect(await singInPage.istextLoginToYourAccountVisible()).toBe(true);

    await singInPage.doLogin(testCase4.userEmail,testCase4.userPass);

    expect(await homePageLogado.isUserloggedInAs()).toBe(true);

    await homePageLogado.logout();

    expect(await singInPage.istextLoginToYourAccountVisible()).toBe(true);
})