const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginPage');
const CartPage = require('../../pages/cartPage');
const config = require('../../config/config');

test.describe('Smoke Suite', () => {

  test('User can login successfully @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      config.users.standardUser.username,
      config.users.standardUser.password
    );

    await expect(page).toHaveURL(/inventory/);
  });

  test('Inventory page loads after login @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      config.users.standardUser.username,
      config.users.standardUser.password
    );

    const title = page.locator('.title');
    await expect(title).toHaveText('Products');
  });

  test('User can open cart @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login(
      config.users.standardUser.username,
      config.users.standardUser.password
    );

    await cartPage.openCart();

    await expect(page).toHaveURL(/cart/);
  });

});