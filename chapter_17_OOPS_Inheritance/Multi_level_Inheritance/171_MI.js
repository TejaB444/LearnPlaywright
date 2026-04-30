//grand parent -> partent->child

//Basepage -> AuthPage -> admin page

// Grand Father -> Father -> Son
// BasePage -> AuthPape -> AdminPage

class BasePage {
    constructor(name) {
        this.name = name;
    }

    open() {
        console.log("[OPEN] " + this.name);
    }
}


class AuthPage extends BasePage {
    constructor(){
        super("testAuth")
    }
    login(user) {
        console.log("[LOGIN] " + user);
    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel");
    }

    manageUsers() {
        console.log("[ADMIN] Managing users");
    }
}

let admin = new AdminPage();
admin.open();
admin.login("superadmin");
admin.manageUsers();

let auth = new AuthPage();
auth.open();
auth.login("Authsuperadmin");
auth.manageUsers();  // not possible , coz it belongs to admin page(child)