const { test, expect } = require('@playwright/test');
const HomePage         = require("../pageObjects/HomePage.js");
const SingInPage       = require('../pageObjects/SingInPage.js');
const testData         = require('../resources/testData/testCase3.js');


test('Test Case 3', async ({ page }) => {
    let homePage       = new HomePage(page)
    let singInPage     = new SingInPage(page)


    await page.goto("https://automationexercise.com/");

    await homePage.isCarouselShown();
    await homePage.clickLoginLink();
    expect(await singInPage.istextLoginToYourAccountVisible()).toBe(true);

    await singInPage.doLogin(testData.userEmail,testData.userPass);
    expect(await singInPage.isTextEmailIncorrectVisible()).toBe(true);
    
})