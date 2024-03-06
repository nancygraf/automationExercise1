class SingInPage {

    constructor(page) {
        this.page = page 
        this.newUserInput = "[data-qa='signup-name']"
        this.NewEmailInput = "[data-qa='signup-email']"
        this.emailLoginInput = "[data-qa='login-email']"
        this.passwordLoginInput = "[data-qa='login-password']"
        this.buttonLogIn = "[data-qa='login-button']"
        this.buttonSignUp = "[data-qa='signup-button']"
        this.newUserTitle = "text = New User Signup!"
        this.textLoginToYourAccount = "text = Login to your account"
        this.textEmailIncorrect = "text = Your email or password is incorrect!"
        this.textEmailAlredyExist = "text = Email Address already exist!"
    }

    async doSignUp (name, email) {
        await this.page.fill(this.newUserInput,name);
        await this.page.fill(this.NewEmailInput,email);
        await this.page.click(this.buttonSignUp);
    }

    async isNewUserTitleVisible() {
        if (await this.page.isVisible(this.newUserTitle)){
            return true
        }
        else {
            return false
        }
    }

    async doLogin (mail, password) {
        await this.page.fill(this.emailLoginInput,mail);
        await this.page.fill(this.passwordLoginInput,password);
        await this.page.click(this.buttonLogIn);
    }

    async istextLoginToYourAccountVisible() {
        if (await this.page.isVisible(this.textLoginToYourAccount)){
            return true
        }
        else {
            return false
        }
    }

    async isTextEmailIncorrectVisible() {
        if (await this.page.isVisible(this.textEmailIncorrect)){
            return true
        }
        else {
            return false
        }
    }

    async istextEmailAlredyExist() {
        if (await this.page.isVisible(this.textEmailAlredyExist)) {
            return true
        }
        else {
            return false
        }
       
    }
}

module.exports = SingInPage