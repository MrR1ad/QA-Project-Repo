# QA-Project-Repo

QA Project using playwright automation testing for ekipa student-platform

## 🧪 Test Automation with Playwright

This repository includes a comprehensive suite of automated tests written using **Playwright**. The suite covers smoke tests (critical path tests) and functional tests to verify the platform's features.

### 🛠 Setup Instructions

Once you cloned the repository and are in root directory of the project you can install dependencies

```bash
npm install
npx playwright install
```

### 🚀 How to Run the Tests

#### Step 1: Start Backend and Frontend

To run the tests, you must first start both the backend and frontend applications.

Backend: Follow the instructions in the backend repository's README to start the backend server: https://github.com/DrErvin/Student_platform_server.git

Frontend: Follow the instructions in the frontend repository's README to start the frontend server. The frontend should be run using Vite from the frontend repository: https://github.com/DrErvin/Ekipa-Project.git

#### Step 2

Once both the backend and frontend are running, you can execute tests from the QA-Project Repo

##### Run All Tests

```bash
npx playwright test
```

#### Run Smoke Tests Only

```bash
npm run test:smoke
```

#### Run Functional Tests Only

```bash
npm run test:functional
```

### 📌 Notes

- Ensure the backend server is running before executing the tests.
- The tests are designed to run on **Chromium**, **Firefox**, and **WebKit** browsers.
- All tests are executed in **headless mode** by default. If you want to run them with a visible browser window, append the `--headed` flag to the test command.

---

## About this fork

This suite was built by a three-person team for the Ekipa student platform, a project
done in collaboration with Deutsche Telekom. This fork is where I continue to work on it.

### Test structure

- `tests/smoke/` - critical user paths: login, logout, search, apply
- `tests/functional/` - feature checks, including negative cases (sign-up validation, search with no results, pagination)
- `tests/api/` - backend checks without the UI
- `page-objects/` - Page Object Model: one class per page with its locators and actions

### What I added

- HTML test report (`npx playwright show-report` after a run)
- Bug report for an issue found while running the suite: [BUG-001](bug-reports/BUG-001-duplicate-applications.md)
- Explanatory comments in the config and login tests

### Findings from running the suite

- The application smoke test depends on an external email service, so it fails when email sending is down.
- The logout test is flaky: it asserts on a success message that is only shown for a short time.

### Planned improvements

- Negative API tests for sign-up (invalid email domain, missing fields, duplicate email)
- Use `baseURL` in all tests instead of hardcoded URLs
- Move test credentials to environment variables
