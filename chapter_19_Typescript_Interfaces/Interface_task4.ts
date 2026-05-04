//4. Implement interfaces in classes

interface test1 {
    id: number;
    name : string;
    getdata() : Promise<string>
}

class MyClass implements test1{
    id: number;
    name : string;
    constructor(uid : number, uname : string) {
        this.id=uid;
        this.name=uname
    }
    getdata(): Promise<string> {
        return Promise.resolve ("Calling the method from interface")
    }
}

const a=new MyClass(100,'Teja')
console.log(a.id)
console.log(a.name)
console.log(a.getdata())
