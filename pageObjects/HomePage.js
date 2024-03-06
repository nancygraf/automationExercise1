class HomePage {

    constructor(page) {
        this.page = page
        this.carousel  = "#slider-carousel"   
        this.loginLink = "[href='/login']"

    }

    
    async clickLoginLink() {
        await this.page.click(this.loginLink);
    }

    async isCarouselShown() {
        let content = await this.page.innerText(this.carousel)
        console.log(content)
        let isTextCorrect = false //inicializar como false

        if(content.includes("Full-Fledged practice website")) {
            isTextCorrect = true
        }

        return isTextCorrect
    }

    /*async istextShown() {
        let content = await this.page.innerText('New User Signup!');
        console.log(content)
        let isTextCorrect = false //inicializar como false

        if(content.includes('New User Signup!')) {
            isTextCorrect = true
        }

        return isTextCorrect
    }*/

}

module.exports = HomePage

//page
//->click(xx)
//->fill(xx,"ddd")
//->innerText(xx)
//waitForSelector(xxx)
