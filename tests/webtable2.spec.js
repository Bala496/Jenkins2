const {test,expect}=require('@playwright/test')

test('webtable',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const table =await page.locator('#productTable')

    //count the column

    const column =await table.locator('thead tr th')
    console.log('Number of column:'+await column.count());

    const rows = await table.locator('tbody tr')
    console.log('Number of rows:'+await rows.count());
    

    const checkbox=rows.filter({
        has:page.locator('td'),
        hasText:'Smartphone'
    })
    await checkbox.locator('input').check()
    await page.pause()
    
})