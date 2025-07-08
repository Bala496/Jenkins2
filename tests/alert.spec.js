const {test,expect}=require('@playwright/test')

test('iframe',async({page})=>{

await page.goto('https://letcode.in/frame')
const key =await page.frame({url:'https://letcode.in/frameui'})
await key.fill('//input[@name="fname"]','frame inputbox')

const cout=await page.frames()
console.log(cout.length);

await page.pause()
})