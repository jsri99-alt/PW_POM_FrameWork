import {test as baseCode} from "@playwright/test"
import { SFLoginPage } from "../pages/SFLoginPage";
import { SFHomePage } from "../pages/SFHomePage";
import { SFTaskPage } from "../pages/SFTaskPage";

export const test = baseCode.extend<{SFLogin:SFLoginPage, SFHome:SFHomePage, SFTask:SFTaskPage}>({
SFLogin: async({page},use)=>{
    const sfLogin = new SFLoginPage(page)
    await use (sfLogin)
},
SFHome: async({page},use)=>{
    const sfHome=new SFHomePage(page)
    await use (sfHome)
},
SFTask: async({page},use)=>{
    const sfTask=new SFTaskPage(page)
    await use (sfTask)
}
})
