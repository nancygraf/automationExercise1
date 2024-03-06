const { test, expect } = require('@playwright/test');
const HomePage         = require("../pageObjects/HomePage.js");
const SingInPage       = require('../pageObjects/SingInPage.js');
const RegisterPage     = require('../pageObjects/RegisterPage.js');
const newUserData      = require("../resources/testData/newUserData.js");
const homePageLogado   = require("../pageObjects/HomePageLogado.js");
const HomePageLogado = require('../pageObjects/HomePageLogado.js');


test('Test Case 1: Register User', async ({ page }) => {
  let homePage       = new HomePage(page)
  let singInPage     = new SingInPage(page)
  let registerPage   = new RegisterPage(page)
  let homePageLogado = new HomePageLogado(page)

  
  await page.goto('https://automationexercise.com/');
  
  expect(await homePage.isCarouselShown()).toBe(true)

  await homePage.clickLoginLink();

  expect(await singInPage.isNewUserTitleVisible()).toBe(true);
  
  await singInPage.doSignUp(newUserData.userName,newUserData.userEmail);
 
  expect(await registerPage.isTextCorrect()).toBe(true);
 
  await registerPage.registerUser(newUserData);

  await registerPage.clickButtonContinue();

  await homePageLogado.deleteAccount();
   
});


