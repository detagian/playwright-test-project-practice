import { test, expect } from '@playwright/test'


test.describe('All My Tests', () => {

    test.beforeEach(async ({ page }) => {


        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html');


        test.afterAll(async ({ page }) => {
            await page.close()

        })

        test('homepage', async ({ page }) => {
            await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
            await page.locator('#item_1_title_link >> text=Sauce Labs Bolt T-Shirt').click();
            await page.waitForURL('https://www.saucedemo.com/inventory-item.html?id=1');
            await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        })

        test('Logout', async ({ page }) => {

            await page.locator('text=Open Menu').click();
            await page.locator('text=Logout').click();
            await page.waitForURL('https://www.saucedemo.com/');



        })

    })


})

