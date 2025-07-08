const {test,expect, chromium}=require('@playwright/test')

test('window handling',async()=>{

    const browser =await chromium.launch()
    const context =await browser.newContext()

    const page1=await context.newPage()
    const page2=await context.newPage()

    const counting =await context.pages()
    console.log(counting.length);

    await page1.goto('https://testautomationpractice.blogspot.com/')
    await page2.goto('https://letcode.in/frame')
    

})