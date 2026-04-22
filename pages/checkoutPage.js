class CheckoutPage {
    constructor(page){
        this.page = page;
        this.checkoutButton = '#checkout';
        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.postalCode = '#postal-code';
        this.continueButton = '#continue';
        this.finishButton = '#finish';
        this.successMessage = '.complete-header';
        this.errorMessage = '.error-message-container';
    }

    async startCheckout(){
        await this.page.click(this.checkoutButton);
    }

    async fillCheckoutInfo(first, last, zip){
        await this.page.fill(this.firstName, first);
        await this.page.fill(this.lastName, last);
        await this.page.fill(this.postalCode, zip);
    }

    async continueCheckout(){
        await this.page.click(this.continueButton);
    }

    async finishCheckout(){
        await this.page.click(this.finishButton);
    }

    async getSuccessMessage(){
        return this.page.locator(this.successMessage);
    }

    async getErrorMessage(){
        return this.page.locator(this.errorMessage);
    }


}

module.exports = CheckoutPage;