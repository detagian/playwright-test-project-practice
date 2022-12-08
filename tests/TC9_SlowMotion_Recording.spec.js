import { test, expect, chromium } from '@playwright/test'

test('Slow Motion and Recording whne test', async () => {
    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });

    const context = await browser.newContext({

        recordVideo: {
            dir: 'VideosRecrod/',
            size: {
                width: 800,
                height: 600
            }
        }

    });

    const page = await context.newPage();
    await page.goto('https://admin-demo.nopcommerce.com/login')
    await page.locator('[id="Email"]').press("Control+a")
    await page.locator('[id="Email"]').press("Delete")
    await page.locator('[id="Email"]').fill("admin@yourstore.com")
    await page.locator('[id="Password"]').fill('admin')
    await page.locator('text=Log in').click();
    await page.locator('text=Logout').click();
    await page.waitForURL("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
    await context.close();

})