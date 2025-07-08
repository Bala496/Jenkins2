const {test, expect}=require('@playwright/test')

test('ddrop',async({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const box1 =await page.locator('#box2')
    const box2 =await page.locator('#box104')

    await box1.dragTo(box2)
    await page.waitForTimeout(3000)


})