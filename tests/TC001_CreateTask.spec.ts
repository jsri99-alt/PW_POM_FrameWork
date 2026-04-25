import { test } from "../Custom Fixture/SFCustomFixture"
import { parse } from "csv-parse/sync"
import fs from 'fs'

const taskFormValue: any[] = parse(fs.readFileSync("Test Data/TaskForm.csv"),
    {
        columns: true,
        skip_empty_lines: true
    }
)

test.use({ storageState: "Helper/TL_loginUser1.json" })
test("CreateTask", {tag:['@smoke']}, async ({ SFHome, SFTask, page }) => {
    test.info().annotations.push(
        { type: 'Hands on', description: "Frame work testing" },
        { type: 'author', description: 'Sriram' }
    )
    test.setTimeout(60000);
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    await SFHome.navigateToTask()

    for (let formData of taskFormValue) {
        let subject = formData.Subject
        let status = formData.Status
        let priority = formData.Priority
        await SFHome.launchNewTask()
        await SFTask.fillTaskForm(subject, status, priority)
        await SFTask.validateTaskSubmission(subject)
    }
})