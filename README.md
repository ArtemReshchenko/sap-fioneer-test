# SAP Fioneer Playwright Test Suite

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run tests:

   ```bash
   npm test
   ```

3. View HTML report:
   ```bash
   npm run test:report
   ```

## Linting & Formatting

- Lint code:
  ```bash
  npm run lint
  ```
- Format code:
  ```bash
  npm run format
  ```

## Project Structure

- `pages/` - Page objects and components
- `helpers/` - Utility actions
- `fixtures/` - Playwright fixtures
- `tests/` - Test specs

## Contribution

1. Fork the repo and create a feature branch.
2. Write or update tests for your changes.
3. Run lint and format before submitting a PR.
4. Open a pull request for review.

## Continuous Integration

- Recommended: Set up GitHub Actions or similar CI to run tests and upload Playwright reports on each PR.
