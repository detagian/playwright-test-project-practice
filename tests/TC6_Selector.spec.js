import { test, expect } from '@playwright/test'
test('Selector Test 1', async ({ page }) => {
    await page.goto('https://saucedemo.com')
    // use object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Deta')
    await page.locator('[id="user-name"]').fill('Deta 2')
    // use css selector
    //#login-button
    await page.locator('#login-button').click()
    // use xpath selector
    await page.pause()
    await page.locator('xpath=//input[@name="user-name"]').fill('Deta')
    await page.locator('//input[@name="user-name"]').fill('deta 2')

    // use Text Selector 
    await page.locator('text=LOGIN').click();
    await page.locator('input:has-text("LOGIN")').click();

}) 