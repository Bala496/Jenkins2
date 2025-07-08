class manager {
    constructor(page){

        this.page=page;
        this.username=page.locator('//input[@name="username"]')
        this.password=page.locator('//input[@name="password"]')
        this.login=page.locator('//button[@type="submit"]')
    }
    async loginprocess (user,passwd){
        await this.username.fill(user)
        await this.password.fill(passwd)
        await this.login.click()

    }
    
}
export default manager