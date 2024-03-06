const { test, expect, beforeEach } = require('@playwright/test');
const HomePage         = require("../pageObjects/HomePage.js");
const SingInPage       = require("../pageObjects/SingInPage.js");
const HomePageLogado   = require("../pageObjects/HomePageLogado.js");
const newUserData      = require("../resources/testData/newUserData.js");
const utils            = require("../utils/functions.js");
const RegisterPage = require('../pageObjects/RegisterPage.js');

beforeEach (async function({page}) {
    let homePageLogado = new HomePageLogado(page);
    let registerPage   = new RegisterPage(page);

    await utils.createNewUser(page,newUserData)
    await registerPage.clickButtonContinue();
    await homePageLogado.logout();
    
})

test('Test Case 2: login', async ({ page }) => {
    let homePage       = new HomePage(page)
    let singInPage     = new SingInPage(page)
    let homePageLogado = new HomePageLogado(page)
  
    
    await page.goto('https://automationexercise.com/');
    
    await homePage.clickLoginLink();

    await singInPage.doLogin(newUserData.userEmail,newUserData.password);

    expect(await homePageLogado.isUserloggedInAs()).toBe(true);

    await homePageLogado.deleteAccount();

    expect(await homePageLogado.accountDeleteShown()).toBe(true);

})