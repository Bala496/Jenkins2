const {test,expect}=require('@playwright/test')
import hello from './deep'

test ('page object module',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const loginpage = new hello(page);
    
    await loginpage.log('Admin','admin123')

})