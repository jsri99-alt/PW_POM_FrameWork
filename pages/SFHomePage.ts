import { Page } from "@playwright/test"
export class SFHomePage {
    sfpage: Page
    constructor(sfpage: Page) {
        this.sfpage = sfpage
    }
    async navigateToTask() {
        await this.sfpage.getByRole("button", { name: "App Launcher" }).click()
        await this.sfpage.waitForTimeout(1000)
        await this.sfpage.getByRole("button", { name: "View All Applications" }).click()
        await this.sfpage.waitForTimeout(3000)
        await this.sfpage.getByRole("combobox", { name: "Search apps or items..." }).fill("Tasks")
        await this.sfpage.waitForTimeout(3000)
        await this.sfpage.locator(`//mark[contains(text(),"Tasks")]`).click()
        await this.sfpage.waitForTimeout(1000)
    }
    async launchNewTask(){
        await this.sfpage.getByRole("button", { name: "Show more actions" }).nth(0).click()
        await this.sfpage.getByRole("menuitem", { name: 'New Task' }).click()
    }
    async editTask(subject:string){
        await this.sfpage.getByRole('button', { name: 'Select list Display' }).click();
        await this.sfpage.waitForTimeout(1000)
        await this.sfpage.getByRole('menuitemcheckbox', { name: 'Table' }).click();
        
        //getting table data
        const table = this.sfpage.locator(`//table[@class="slds-table forceRecordLayout slds-table_header-fixed slds-table--header-fixed slds-table_edit slds-table--edit slds-table_bordered slds-table--bordered resizable-cols slds-table--resizable-cols uiVirtualDataTable"]//tr`)
        await this.sfpage.waitForTimeout(3000)
        //const rowCount=await table.count()
        //console.log(`No of rows : ${rowCount}`)
        const allRows = await table.all()
        for (const row of allRows){
            const Subj = await row.locator('th').nth(0).innerText()
            console.log(Subj)
            if (Subj===subject){
                await row.getByRole('button', { name: 'Show Actions' }).click();
                await this.sfpage.getByRole('menuitem', { name: 'Edit', exact: true }).click();
                break;
            }
            
        }    
}
}
