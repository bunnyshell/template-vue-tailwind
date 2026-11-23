# Template overview

This [Environment Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates)
runs Playwright end-to-end tests inside a Bunnyshell environment, next to the application
they test.

On every deploy and start:

1. `application` (this Vue app) and `playwright` (the tests in `e2e/` and a report server) deploy.
2. `e2e-tests` waits for both, then runs the suite inside the `playwright` pod, where internal
   service addresses resolve.
3. The HTML report is published at `https://playwright-<env domain>`, with a trace, screenshot
   and video for each failure. `status.json` (pass/fail and counts) and `results.json` (the full
   Playwright JSON report) are served next to it.
4. If any test fails, the deploy fails. Set `E2E_BLOCKING` to `false` to only publish the report.

For preview environments created from pull requests, a failed deploy is reported on the
pull request, so broken changes are visible before they merge.

## Environment variables

| Variable | Default | Meaning |
|---|---|---|
| `VITE_APP_NAME` | `Bunnyshell Hello Vue` | Built into the app; the tests check that it is rendered. |
| `E2E_BLOCKING` | `true` | Fail the deploy when tests fail. `false` only publishes the report. |
| `PW_BROWSERS` | `chromium` | Comma-separated browsers: `chromium`, `firefox`, `webkit`. |

The `playwright` component also sets `BASE_URL` (public URL), `TEST_LOCAL_URL` (in-cluster
service URL), `WAIT_FOR_URLS` (URLs that must answer before tests start) and
`EXPECTED_APP_NAME`.

# How to use this Template

Create an environment from this template, then add your tests to `e2e/` and replace the
`application` component with your own. To use your own copy of this repo, point both
components' `gitRepo` at it.
