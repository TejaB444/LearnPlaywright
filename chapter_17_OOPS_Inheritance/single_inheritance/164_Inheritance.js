//inheritance java script

class Basepage{
    constructor(pageName){
        this.pageName=pageName
        console.log("this is a base page")
    }

    open(){
        console.log("opening the page");
    }

    close(){
        console.log("Closing the page");
    }
}

class LoginPage extends Basepage {

}

let page =new LoginPage()
page.open() 
page.close() 

// login has never defined any methods but due to inheritance 
// it used the methods from basepage
