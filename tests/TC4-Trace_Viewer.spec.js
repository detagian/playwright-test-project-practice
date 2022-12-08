const { test, expect } = require('@playwright/test')

test('My First test', async ({ page, context }) => {
    await context.tracing.start({
        snapshots: true,
        screenshots: true
    })
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')

    await context.tracing.stop({path:'test 1.zip'})
})