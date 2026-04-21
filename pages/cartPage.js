class CartPage{
    constructor(page){
       this.page = page;
       this.cartButton = '.shopping_cart_link';
       this.cartItem = '.inventory_item_name'; 
    }

    async openCart(){
        await this.page.click(this.cartButton);
    }

    async getCartItemName(){
        return this.page.locator(this.cartItem);
    }
}

module.exports = CartPage;