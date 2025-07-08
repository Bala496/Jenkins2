const {test,expect}=require('@playwright/test')
import manager from './process'

test ('page object model',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const output = new manager(page);
    await output.loginprocess('Admin','admin123')
})