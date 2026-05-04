
import {BasePage} from "./AccessModifierTask1"

class DashboardPage extends BasePage{

    getbaseURL(){
        console.log("outside class and child class", this.baseURL)
    }
    // throws error, as private variable is tried to used in child
    // getapikey(){
    //     console.log("this is a private variable", this.apikey)
    // }

    gettimeout(){
        console.log("this is a protected variable", this.timeout)
    }

}

let Dpage= new DashboardPage('https://app.staging.com/dashboard','jgvkdb-abkfhbf',200)
Dpage.getbaseURL() //calling menthod with public variable // accessible
//Dpage.getapikey() //calling menthod with private variable //limited to class
Dpage.gettimeout() //calling menthod with protected variable //can only be used within child class


console.log("public variable ",Dpage.baseURL) 
// public can be accessed anywhere
// console.log("private variable ",Dpage.apikey) 
// private can only be used in Basepage
// console.log("protected variable ",Dpage.timeout) 
// protected can't be accessed without a child class
