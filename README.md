# 🚀 Playwright E-Commerce Automation Framework

## 📌 Overview
This project is a **production-style UI test automation framework** built using **Playwright (JavaScript)**.  
It demonstrates a scalable, maintainable, and CI/CD-integrated testing architecture for an e-commerce web application.

The framework is designed using **Page Object Model (POM)** and follows real-world **SDET best practices** including smoke testing, regression testing, and negative testing strategies.

---

## 🧰 Tech Stack
- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
- GitHub Actions (CI/CD)
- HTML Reporter + Allure Reporting

---

## 🏗️ Framework Architecture

```
ecommerce-automation-framework/
│
├── tests/
│   ├── smoke/
│   ├── auth/
│   ├── cart/
│   ├── checkout/
│   ├── negative/
│   ├── regression/
│
├── pages/
│   ├── loginPage.js
│   ├── productPage.js
│   ├── cartPage.js
│   ├── checkoutPage.js
│
├── utils/
├── config/
├── .github/workflows/
├── playwright.config.js
├── test-plan.md
├── README.md
```

---

## 🧪 Test Strategy

### 🔥 Smoke Tests
- Login validation
- Inventory page load
- Cart access validation

### 🧪 Regression Tests
- End-to-end checkout flow
- Cart operations
- Product interactions

### ❌ Negative Tests
- Missing checkout fields validation
- Error message verification
- Invalid user flows

---

## ⚙️ CI/CD Integration

This project uses **GitHub Actions** to automate test execution.

### On every push:
- Smoke tests run automatically

### On demand / scheduled:
- Full regression suite execution

---

## 📊 Reporting

- Playwright HTML reports
- Allure reporting support
- Screenshots on failure
- Trace viewer for debugging

---

## ▶️ How to Run Locally

### Install dependencies
```bash
npm install
```

### Run all tests
```bash
npx playwright test
```

### Run smoke tests only
```bash
npx playwright test --grep "@smoke"
```

### Run regression suite
```bash
npx playwright test --grep "@regression"
```

### View HTML report
```bash
npx playwright show-report
```

---

## 📌 Key Features
- Scalable Page Object Model architecture
- Smoke + Regression + Negative test coverage
- CI/CD integration with GitHub Actions
- Automatic screenshots on failure
- Trace debugging support
- Multi-browser testing support (Chromium, Firefox, WebKit)

---

## 💼 What This Project Demonstrates

This framework showcases:
- Real-world QA automation design skills
- Strong understanding of SDET principles
- CI/CD pipeline integration
- Test strategy design (Smoke / Regression / Negative)
- Clean and maintainable automation architecture

---

## 📈 Author Note

This project was built as a **portfolio-level QA automation framework** to demonstrate production-ready skills in test automation, framework design, and CI/CD integration.

---

## 🚀 Future Enhancements
- API testing layer integration
- Dockerized test execution
- Parallel execution optimization
- Cloud test execution (BrowserStack / LambdaTest)
