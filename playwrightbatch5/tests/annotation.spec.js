const {test,expect}=require('@playwright/test')

/*test.skip('skip',async()=>{
    console.log("java");
    
})
test('skip2',async()=>{
    console.log("javascript");
    
})*/
/*test('only',async()=>{
    console.log("java");
    
})
test.only('only2',async()=>{
    console.log("javascript");
    
})*/

// test.fixme('fix',async()=>{
//     console.log("java");
    
// })
// test('fix2',async()=>{
//     console.log("javascript");
    
// })
// test ('fail',async()=>{
//     test.fail()
//     console.log("test");
//     expect(1).toBe(2)
// })


// test ('fail',async({page,browserName})=>{
//     if(browserName === 'chromium'){
//         test.fail()
//     }
// })

test ('slow',async({page})=>{
    test.slow()
    await page.goto('https://testautomationpractice.blogspot.com/')
})
