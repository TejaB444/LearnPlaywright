export class BasePage {
    public baseURL: string;
    private apikey: string;
    protected timeout: number;

    constructor(baseURL: string, apikey: string, timeout: number) {
        this.baseURL = baseURL;
        this.apikey = apikey;
        this.timeout = timeout;
    }
}

class LoginPage extends BasePage{

    getbaseURL(){
        console.log("this is a public variable", this.baseURL)
    }
    // throws error, as private variable is tried to used in child
    // getapikey(){
    //     console.log("this is a private variable", this.apikey)
    // }

    gettimeout(){
        console.log("this is a protected variable", this.timeout)
    }

}

let login1= new LoginPage('https://app.staging.com','jgvkdb-abkfhbf',200)
login1.getbaseURL() //calling menthod with public variable // accessible
//login1.getapikey() //calling menthod with private variable //limited to class
login1.gettimeout() //calling menthod with protected variable //can only be used within child class


console.log("public variable ",login1.baseURL) 
// public can be accessed anywhere
// console.log("private variable ",login1.apikey) 
// private can only be used in Basepage
// console.log("protected variable ",login1.timeout) 
// protected can't be accessed without a child class

