# Official image: Node.js, Playwright and all browsers with their OS dependencies.
# Keep the tag in sync with @playwright/test in package.json.
FROM mcr.microsoft.com/playwright:v1.65.1-noble

WORKDIR /app

# The app's lockfile pins @playwright/test. It also installs the app's own
# dependencies, which the tests do not use but which keep the lockfile the single
# source of truth.
COPY package.json package-lock.json ./
RUN npm ci

COPY playwright.config.js ./
COPY e2e/ ./e2e/
RUN chmod +x e2e/scripts/*.sh

ENV CI=true \
    REPORT_DIR=/app/playwright-report \
    REPORT_PORT=9323

EXPOSE 9323
ENTRYPOINT ["/app/e2e/scripts/entrypoint.sh"]
