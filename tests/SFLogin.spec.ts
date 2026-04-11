import {test} from "../Custom Fixture/SFCustomFixture"
import * as allure from "allure-js-commons"
test ("CreateTask",{tag:['@regression','@smoke']}, async({SFLogin})=>{
    await allure.description("Login test")
    await allure.epic("Login Epic 101")
    await allure.story("checking valid credential 101.1")
    await SFLogin.login()
})
//check for user 2.1
//Checkin from user 2.2
