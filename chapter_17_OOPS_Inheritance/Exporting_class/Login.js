import {BasePage} from "./basepage.js"

export class LoginPage extends BasePage{

    constructor(){
        super("login page")
    }

    login(user)
    {
        console.log(user + " logged in.")
    }
}

// let l = new LoginPage()
// l.login("Admin")
// l.open()