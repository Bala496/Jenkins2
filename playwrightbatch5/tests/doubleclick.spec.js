const {test,expect}= require('@playwright/test')
test ('mouse double click',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
const a =await page.locator('//button[text()="Copy Text"]')
 await a.dblclick()
})
