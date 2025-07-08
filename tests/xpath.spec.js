const{test,expect}=require('@playwright/test')



test('relative',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.fill('//input[@maxlength="15"]','java')
    await page.click('//button[text()="START"]')
})