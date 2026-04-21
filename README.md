# E-commerce Automation Framework (Playwright + SDET Project)

## 📌 Overview
This is a scalable end-to-end test automation framework built using Playwright for testing an e-commerce web application.  
It demonstrates real-world SDET practices including Page Object Model, CI/CD integration, and reporting.

---

## 🚀 Tech Stack
- Playwright (UI Automation)
- JavaScript (Node.js)
- Page Object Model (POM)
- GitHub Actions (CI/CD)
- Allure Reporting

---

## 🏗️ Framework Architecture
pages/ → Page Object classes (UI actions)
tests/ → Test cases (business flows)
utils/ → Reusable helper functions
config/ → Test data & environment config

---

## 🧪 Features Covered
- User Login Automation
- Add to Cart Flow
- Checkout Simulation
- Reusable Page Object Model
- Config-driven test data
- Screenshot capture on execution
- CI/CD pipeline using GitHub Actions
- HTML Reporting using Allure

---

## ⚙️ How to Run Tests

### Install dependencies
npm install

### Run tests
npx playwright test

### Run tests in headed mode
npx playwright test --headed

### Generate report
allure generate allure-results --clean -o allure-report
allure open allure-report

---

## 🔁 CI/CD Pipeline
This project uses GitHub Actions to:
- Install dependencies
- Run Playwright tests
- Execute test suite automatically on push/pull request

Workflow file: `.github/workflows/playwright-tests.yml`

---

## 📸 Reporting
- Allure reports for test execution visualization
- Screenshots captured on test execution
- Detailed test execution logs

---

## 👨‍💻 Author
Automation QA Engineer Portfolio Project

---

## 📌 Key Learning Outcome
This project demonstrates:
- Real-world test automation framework design
- Scalable architecture using POM
- CI/CD integration
- Industry-standard QA practices