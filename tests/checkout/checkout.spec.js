const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginPage');
const CartPage = require('../../pages/cartPage');
const CheckoutPage = require('../../pages/checkoutPage');
const config = require('../../config/config');
const ProductPage = require('../../pages/productPage');

test('User can complete checkout flow @regression', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const productPage = new ProductPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(config.users.standardUser.username, config.users.standardUser.password);

    // Add product
    await productPage.addBackpackToCart();

    // Go to cart
    await cartPage.openCart();

    // Start checkout
    await checkoutPage.startCheckout();

    // Fill details
    await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');

    await checkoutPage.continueCheckout();

    // Finish order
    await checkoutPage.finishCheckout();

    // Validate success
    const successMsg = await checkoutPage.getSuccessMessage();
    await expect(successMsg).toHaveText('Thank you for your order!');


});