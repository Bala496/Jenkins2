const {test,expect}= require('@playwright/test')
test ('mouse double click',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.mouse.wheel(0,1000)
await page.mouse.wheel(0,-500)
await page.waitForTimeout(3000)
})
