class hello {
    constructor(page){
        this.page=page
        this.username=page.getByPlaceholder('Username')
        this.password=page.getByPlaceholder('Password')
        this.login=page.locator('//button[text()=" Login "]')
    }
    async log(user,pass){
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.login.click()
    }
}
export default hello