# Bunnyshell HelloWorld-Vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

The tests live in `e2e/` and run against `BASE_URL` (default `http://localhost:3000`).

```sh
# Install Chromium for the first run
npx playwright install --with-deps chromium

# Build and serve the app, then run the tests against it
npm run build && npx serve -s dist &
npm run test:e2e
# Against another URL, or with more browsers
BASE_URL=https://app.example.com PW_BROWSERS=chromium,firefox npm run test:e2e
```

The same tests run in Docker, which is how the `playwright` Bunnyshell template runs them on
every deploy (see `.bunnyshell/templates/playwright`):

```sh
docker build -t vue-e2e -f docker/playwright/Dockerfile .
docker run --rm -e BASE_URL=https://app.example.com vue-e2e run   # exits with the test result
```

Playwright 1.65.1, `mcr.microsoft.com/playwright:v1.65.1-noble`. When upgrading, change the
version in `package.json` and the image tag in `docker/playwright/Dockerfile` together.
