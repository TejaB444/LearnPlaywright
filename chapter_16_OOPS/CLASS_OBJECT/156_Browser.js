class Browser {

    //can we have only one constructor per class
    //default constructor
    // constructor(){
    //     console.log("deafault constructor");
    // }

    //parametrized constructor (with arguments)
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " Launched ")
    }

    startBrowser() {
        console.log("starting the browser " + this.name)
    }

    closeBrowser() {
        console.log("clsoing the browser " + this.name)
    }

}

let chrome = new Browser('CHROME')
let firefox = new Browser('firefox')

console.log(chrome.isOpen); 
chrome.startBrowser()