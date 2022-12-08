import { test, expect } from '@playwright/test'

test('Assertons Demo 1 ', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/')
    //await page.pause()
    //Asssetions
    // Element Present or Not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    if (await page.$('text=The Kitchen')) {

        await page.locator('text=The Kitchen').click()
    }

    //check element hidden or visible

    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden() //not stop when execution

    //check elemetn enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    //check text - Text Matches Value or Not
    await expect(page.locator('text=The Kitchen')).not.toHaveText('Deta')

    // Check Element Attribute
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a')
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class',/.*css-dpmy2a/) //Regex
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    //Check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)

    // Visual Validation with Screenshot
    await expect(page).toHaveScreenshot() //error when never or the first time run

})