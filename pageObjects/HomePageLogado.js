class HomePageLogado {

    constructor(page) {
        this.page = page
        this.carousel  = "#slider-carousel"   
        this.logoutLink = "[href='/logout']"
        this.loggedInAs = "text =  Logged in as "
        this.deleteAccountLink = "[href='/delete_account']"
        this.textAccountDelete = "text = Account Deleted!"

    }

    async isUserloggedInAs() {
        if (await this.page.isVisible(this.loggedInAs)){
            return true
        }
        else {
            return false
        }
    }

    async deleteAccount() {
        await this.page.click(this.deleteAccountLink);
    }

    async accountDeleteShown() {
        if (await this.page.isVisible(this.textAccountDelete)){
            return true
        }
        else {
            return false
        }
    }

    async logout(){
        await this.page.click(this.logoutLink);
    }
}

module.exports = HomePageLogado