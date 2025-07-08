const {test,expect}= require('@playwright/test')
const { log } = require('node:console')
test ('webtable',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
const tablebox =await page.locator('#productTable')

//columns 
const column =await tablebox.locator('thead tr th')
console.log('No of columns :'+ await column.count());

// row
const rows = await tablebox.locator('tbody tr')
console.log('No of rows :'+ await rows.count());

const checkbox = rows.filter({
    has:page.locator('td'),
    hasText:'Tablet'
})
await checkbox.locator('input').check()
await page.pause()

})
