import { Page,expect} from "@playwright/test"
export class SFTaskPage {
    sfpage: Page
    constructor(sfpage: Page) {
        this.sfpage = sfpage
    }
    //const sub = "Send Letter"
    async fillTaskForm(subject: string,status:string,priority:string) {
        await this.sfpage.getByRole("combobox", { name: "Subject" }).click()
        await this.sfpage.getByRole("option", { name: subject}).click()
        await this.sfpage.getByRole("button", { name: "Status" }).click()
        await this.sfpage.getByRole("option", { name: status}).click()
        await this.sfpage.getByRole("button", { name: "Priority" }).click()
        await this.sfpage.getByRole("option", { name: priority }).click()
        await this.sfpage.waitForTimeout(1000)
        await this.sfpage.getByRole("button", { name: "Save" }).nth(1).click()
    }
    async validateTaskSubmission(subject:string){
        await expect(this.sfpage.locator(`//span[@class="toastMessage slds-text-heading--small forceActionsText"]`)).toHaveText(`Task "${subject}" was created.`)
        await this.sfpage.waitForTimeout(1000)
        await this.sfpage.locator(`//div[@class="slds-notify__close"]`).click()
    }
    async editTaskForm(){
        
    }
}

