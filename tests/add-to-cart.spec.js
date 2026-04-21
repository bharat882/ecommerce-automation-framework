const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const CartPage = require('../pages/cartPage');
const config = require('../config/config');
const CommonActions = require('../utils/commonActions');


test('User should add a product to cart and see it in cart page',async({page})=>{
    
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const actions = new CommonActions(page);

    await loginPage.goto();
    await loginPage.login(config.users.standardUser.username, config.users.standardUser.password);

    // Add product
    await page.click('#add-to-cart-sauce-labs-backpack');
    
    // Open cart
    await cartPage.openCart();

    // Validation
    const item = await cartPage.getCartItemName();
    await expect(item).toHaveText('Sauce Labs Backpack');

    await actions.waitForSeconds(2);

    await actions.takeScreenshot('add-to-cart-success');

});