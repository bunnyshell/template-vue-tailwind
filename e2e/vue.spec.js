import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('div.greetings > h1')).toHaveText('You did it!');
})

      
test('Hello world', async ({page}) => {       
  const str = "Hello world";
  console.log(str);
  expect(str).toEqual("Hello world");
})


test('Test Google', async ({page}) => {       
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);     
})

test('Test application via HTTPS', async ({page}) => {       
  // Read the URL from the environment variable
  const testUrl = process.env.TEST_SECURE_URL;
  await page.goto(testUrl);
  await expect(page).toHaveTitle(/Simple Bootstrap Page/);     
})

test('Test application via HTTP', async ({page}) => {     
  // Read the URL from the environment variable
  const testUrl = process.env.TEST_LOCAL_URL;  
  await page.goto(testUrl);
  await expect(page).toHaveTitle(/Simple Bootstrap Page/);     
})

test('Fail Application http', async ({page}) => {       
  await page.goto('http://application:8080/');
  await expect(page).toHaveTitle(/NOT Simple Bootstrap Page/);     
})