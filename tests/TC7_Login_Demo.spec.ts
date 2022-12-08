import { test, expect } from '@playwright/test'
test('Demo Login test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')
    await page.locator('[id="username"]').fill('Deta Appli')
    await page.locator('[id="password"]').fill('password')
    await page.pause()
    await page.waitForSelector('[id="log-in"]', { timeout: 5000 })  //example set timeout to check object visible/not 
    await page.locator('[id="log-in"]').click();

})

test('Demo Loginn test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click();
})


test.only('Demo Loginn test 3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login')
    //await page.pause()
    await page.locator('[id="Email"]').press("Control+a")
    await page.locator('[id="Email"]').press("Delete")
    await page.locator('[id="Email"]').fill("admin@yourstore.com")
    await page.locator('[id="Password"]').fill('admin')
    await page.locator('text=Log in').click();
    await page.locator('text=Logout').click();
    await page.waitForURL("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
})
