class RegisterPage {

    constructor(page) {
        this.page = page
        this.title= "text=ENTER ACCOUNT INFORMATION"
        this.genderWomen = "#id_gender2"
        this.genderMan = "#id_gender1"
        this.name = "#name"
        this.email = "[data-qa='email']"
        this.passwordInput = "[data-qa='password']"
        this.daySelect = "#days"
        this.monthSelect= "#months"
        this.yearSelect = "#years"
        this.newsletter =  "#newsletter" 
        this.specialOffers ="#optin"
        this.firstName = "[data-qa='first_name']"
        this.lastName = "[data-qa='last_name']"
        this.company = "[data-qa='company']"
        this.address = "[data-qa='address']"
        this.address2 = "[data-qa='address2']"
        this.country = "#country"
        this.state = "[data-qa='state']"
        this.city = "[data-qa='city']"
        this.zipCode = "[data-qa='zipcode']"
        this.mobileNumber = "#mobile_number"
        this.buttonCreateAccount = "[data-qa='create-account']"
        this.buttonContinue = "text=Continue"
                                     
    }

    async isTextCorrect() {

        if(await this.page.isVisible(this.title)) {
            return true
        }
        else {
            return false
        }
    }

    async registerUser(userData)
        
        {
        if (userData.title=="mr") {
            await this.page.click(this.genderMan)
        }
        else if(userData.title=="ms") {
            await this.page.click(this.genderWomen)
        }

        await this.page.fill(this.passwordInput, userData.password);
        await this.page.locator(this.daySelect).selectOption(userData.day);
        await this.page.locator(this.monthSelect).selectOption(userData.month);
        await this.page.locator(this.yearSelect).selectOption(userData.year);

        await this.page.click(this.newsletter,userData.check1);
        await this.page.click(this.specialOffers,userData.check2);

        await this.page.fill(this.firstName,userData.name);
        await this.page.fill(this.lastName, userData.lastName);
        await this.page.fill(this.company,userData.company);
        await this.page.fill(this.address,userData.address);
        await this.page.fill(this.address2,userData.address2);

        await this.page.locator(this.country).selectOption(userData.country);

        await this.page.fill(this.state,userData.state);
        await this.page.fill(this.city,userData.city);
        await this.page.fill(this.zipCode,userData.zipCode);
        await this.page.fill(this.mobileNumber,userData.mobileNumber);

        await this.page.click(this.buttonCreateAccount);
  
    }   
    
    async clickButtonContinue() {
        await this.page.click(this.buttonContinue);
    }
}

module.exports = RegisterPage