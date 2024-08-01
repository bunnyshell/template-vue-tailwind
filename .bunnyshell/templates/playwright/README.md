# Template overview

This Bunnyshell environment [template](https://documentation.bunnyshell.com/docs/templates-what-are-templates) is an example of how to run E2E tests with Playwright in Bunnyshell.

## Template specifics

The template deploys a `node` container that runs Playwright tests from the `e2e` folder. 

The template also deploys a sample application (called `application`) to be tested by Playwright.

After running the test, Playwright will serve the results.

### Environment Variables

Envrionment variables (`TEST_LOCAL_URL` , `TEST_SECURE_URL`) are used to pass the HTTP, HTTPS root urls of the appliction to be tested.

## How to use this Template

- Create Environments from this [Bunnyshell template](https://documentation.bunnyshell.com/docs/templates-what-are-templates);

&nbsp;

## Important Note

You must change all passwords and review all parameters to ensure that your Environment is secure.
