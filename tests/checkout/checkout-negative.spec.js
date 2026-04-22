const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginPage');
const CartPage = require('../../pages/cartPage');
const CheckoutPage = require('../../pages/checkoutPage');
const ProductPage = require('../../pages/productPage');
const config = require('../../config/config');


test.describe('Checkout Negative Tests', ()=>{

    test('Checkout without first name should show error @regression', async({page})=>{

        const loginPage = new LoginPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const productPage = new ProductPage(page);

        await loginPage.goto();
        await loginPage.login(
        config.users.standardUser.username,
        config.users.standardUser.password
        );

        await productPage.addBackpackToCart();
        await cartPage.openCart();

        await checkoutPage.startCheckout();

        await checkoutPage.fillCheckoutInfo('', 'Doe','12345');
        await checkoutPage.continueCheckout();

        const error = await checkoutPage.getErrorMessage();
        await expect(error).toContainText('First Name is required');

    });

    test('Checkout without last name should show error @regression', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const productPage = new ProductPage(page);

    await loginPage.goto();
    await loginPage.login(
      config.users.standardUser.username,
      config.users.standardUser.password
    );

    await productPage.addBackpackToCart();
    await cartPage.openCart();

    await checkoutPage.startCheckout();

    await checkoutPage.fillCheckoutInfo('John', '', '12345');
    await checkoutPage.continueCheckout();

    const error = await checkoutPage.getErrorMessage();
    await expect(error).toContainText('Last Name is required');
  });

  test('Checkout without postal code should show error @regression', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const productPage = new ProductPage(page);

    await loginPage.goto();
    await loginPage.login(
      config.users.standardUser.username,
      config.users.standardUser.password
    );

    await productPage.addBackpackToCart();
    await cartPage.openCart();

    await checkoutPage.startCheckout();

    await checkoutPage.fillCheckoutInfo('John', 'Doe', '');
    await checkoutPage.continueCheckout();

    const error = await checkoutPage.getErrorMessage();
    await expect(error).toContainText('Postal Code is required');
  });


})