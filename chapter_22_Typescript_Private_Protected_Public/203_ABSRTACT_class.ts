abstract class baseclass {
    testname: string;

    constructor(testname: string) {
        this.testname = testname
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;

}

class UITest extends baseclass {

    super(name:string){
        this.testname=name
    }

    setup(): void {
        console.log(" Setup: launch browser");
    }
    execute(): void {
        console.log(" Execute: click buttons, fill forms");
    }
    teardown(): void {
        console.log(" Teardown: close browser");
    }

}

class APITest extends baseclass {

    setup(): void {
        console.log(" Setup: launch browser");
    }
    execute(): void {
        console.log(" Execute: click buttons, fill forms");
    }
    teardown(): void {
        console.log(" Teardown: close browser");
    }

}

let UI = new UITest('test1')
UI.setup()
UI.execute()
UI.teardown()
console.log(UI.testname)

let API = new APITest('test2')
API.setup()
API.execute()
API.teardown()
console.log(API.testname)