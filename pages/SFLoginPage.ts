import { Page } from "@playwright/test"
import dotenv from 'dotenv'
dotenv.config({ path: 'env/salesForce.env' })
import LoginDetail from "../Test Data/LoginCredential.json"


export class SFLoginPage {
    sfpage: Page
    constructor(sfpage: Page) {
        this.sfpage = sfpage
    }
    async login() {
        console.log('DEBUG: URL is', process.env.salesForce_Url);
        let SF_Url = process.env.salesForce_Url as string
        await this.sfpage.goto(SF_Url)
        await this.sfpage.getByRole("textbox", { name: "username" }).fill(LoginDetail.userName)
        const buffer=Buffer.from(LoginDetail.Password, 'base64')
        const decodedPassword=buffer.toString('utf-8')
        console.log(decodedPassword)
        await this.sfpage.getByRole("textbox", { name: "Password" }).fill(decodedPassword)
        await this.sfpage.getByRole("button", { name: "Log In" }).click()
        await this.sfpage.waitForTimeout(20000)
        await this.sfpage.context().storageState({ path: "Helper/TL_loginUser1.json" })
       
    }
}
