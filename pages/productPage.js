class ProductPage{
    constructor(page){
        this.page = page;
        this.addBackpackButton = '#add-to-cart-sauce-labs-backpack';
    }

    async addBackpackToCart(){
        await this.page.click(this.addBackpackButton);
    }

}

module.exports = ProductPage;