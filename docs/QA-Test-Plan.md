# TEST PLAN — E-Commerce Automation Framework

## 1. Document Information
- Project Name: E-Commerce UI Automation Framework
- Tooling: Playwright + JavaScript
- Testing Type: UI Functional Automation
- Application Under Test: SauceDemo
- Framework Style: Page Object Model (POM)
- Execution Mode: Local + CI/CD (GitHub Actions)

## 2. Objective
Validate end-to-end functionality of SauceDemo using automated tests.

## 3. Scope
In Scope:
- Login / Logout
- Product inventory
- Cart functionality
- Checkout flow

Out of Scope:
- Payments
- Performance testing
- Mobile testing

## 4. Test Strategy
- UI automation using Playwright
- Page Object Model
- Config-driven test data
- CI/CD via GitHub Actions

## 5. Test Environment
- Browser: Chromium
- Base URL: https://www.saucedemo.com/

## 6. Test Data
- standard_user / secret_sauce

## 7. Test Scenarios
Smoke:
- Login success
- Product page loads
- Cart opens

Cart:
- Add item
- Remove item

Checkout:
- Complete order
- Validation checks

## 8. Execution
npx playwright test

## 9. Reporting
- Playwright HTML reports
- Screenshots on failure

## 10. Exit Criteria
- All critical tests pass
- No high severity defects
