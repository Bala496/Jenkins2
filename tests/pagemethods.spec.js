// import { test,expect } from "@playwright/test";
const {test,expect}= require('@playwright/test')


test('page locators',async({page})=>{

    await page.goto('https://demoblaze.com/')
    await page.locator('#login2')
    await page.click('#login2')
    // await page.close()
    await page.getbyp('#loginusername','hello')
    await page.goBack()
    await page.goForward()
    await page.reload()
    await page.waitForTimeout(3000)




})
