const{test,expect} = require ('@playwright/test') 

test('My First test',async ({page})=>{
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
    await page.pause()
})