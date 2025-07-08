const {test,expect}= require('@playwright/test')
test ('mouse hover',async({page})=>{

   
    await page.goto('https://www.myntra.com/?utm_source=dms_google&utm_medium=&utm_campaign=dms_google_searchbrand_cpc_Search_Brand_Myntra_Brand_India_BM_TROAS_SOK_New&gad_source=1&gad_campaignid=20443628324&gbraid=0AAAAADoxBh7kSmho8egPMVmRMe-Pj1lhW&gclid=Cj0KCQjwjdTCBhCLARIsAEu8bpITunGQkaUlC0mYjyH7JbL6TnJbWOE8edrgIS84PwgkMFMj9BH2E38aAsyCEALw_wcB')
    await page.hover('(//a[text()="Kids"])[1]')
    await page.click('//a[text()="Max Kids"]')
    await page.waitForTimeout(3000)

})