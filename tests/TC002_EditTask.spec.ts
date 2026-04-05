import { test } from "../Custom Fixture/SFCustomFixture"
test.use({ storageState: "Helper/TL_loginUser1.json" })
test("Edit Task", async ({ SFHome, SFTask, page }) => {
    test.setTimeout(60000);
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    await SFHome.navigateToTask()
    await SFHome.editTask('Call')
    await SFTask.editTaskForm()
})