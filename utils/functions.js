const HomePage         = require("../pageObjects/HomePage.js");
const SingInPage       = require('../pageObjects/SingInPage.js');
const RegisterPage     = require('../pageObjects/RegisterPage.js');

async function createNewUser(page,userData){
    let homePage     = new HomePage(page)
    let singInPage   = new SingInPage(page)
    let registerPage = new RegisterPage(page)
  

    await page.goto('https://automationexercise.com/');
    
    await homePage.clickLoginLink();
  
    await singInPage.doSignUp(userData.userName,userData.userEmail);
    
    await registerPage.registerUser(userData);
}

module.exports = {
    createNewUser
} 