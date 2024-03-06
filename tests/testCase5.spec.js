const { test, expect, beforeEach } = require('@playwright/test');
const HomePage         = require("../pageObjects/HomePage");
const SingInPage       = require('../pageObjects/SingInPage');
const testCase5        = require('../resources/testData/testCase5');
const RegisterPage     = require('../pageObjects/RegisterPage');
const newUserData      = require('../resources/testData/newUserData');
const utils            = require('../utils/functions.js');
const HomePageLogado   = require('../pageObjects/HomePageLogado');

var newEmail 

beforeEach (async function({page}) {
    let registerPage   = new RegisterPage (page)
    let homePageLogado = new HomePageLogado(page)
    newUserData.userEmail = Math.round(Math.random()*1000)+newUserData.userEmail
    newEmail = newUserData.userEmail

    await utils.createNewUser(page,newUserData);
    await registerPage.clickButtonContinue();
    await homePageLogado.logout();

})

test('Test Case 5', async ({ page }) => {

    test.setTimeout(60000)

    let homePage   = new HomePage(page)
    let singInPage = new SingInPage(page)
    

    await page.goto('http://automationexercise.com'),

    expect(await homePage.isCarouselShown()).toBe(true);

    await homePage.clickLoginLink();

    expect(await singInPage.isNewUserTitleVisible()).toBe(true);

    await singInPage.doSignUp(testCase5.userName,newUserData.userEmail);

    expect(await singInPage.istextEmailAlredyExist()).toBe(true);
    
})
