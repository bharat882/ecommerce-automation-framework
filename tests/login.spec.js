const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const config = require('../config/config');
const CommonActions = require('../utils/commonActions');

test('User should login successfully with valid credentials', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    const actions = new CommonActions(page);

    await loginPage.goto();

    await loginPage.login(config.users.standardUser.username, config.users.standardUser.password);

    await actions.waitForSeconds(2);

    await actions.takeScreenshot('login-success');
    
    await expect(page).toHaveURL(config.baseUrl+'inventory.html');
  
});