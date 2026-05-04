class basePage{
    protected baseURL: string;

    constructor(url: string){
        this.baseURL = url;
    }

    protected navigate(path : string){
        console.log("navigating to "+ this.baseURL + path)
    }
}

class LoginPage extends basePage{
    constructor()
    {
        super("https://app.staging.com")
    }

    login(user : string)
    {
        this.navigate('/login')
        console.log("Typing " + this.baseURL + "  into #username")
        console.log("clicking #login-btn")
    }
}

let page = new LoginPage()
page.login('Admin')