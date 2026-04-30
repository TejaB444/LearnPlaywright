class car{

    #engine;

    constructor(name,engName){
        this.name = name
        this.#engine=engName
    }

    getEngine()
    {
        return this.#engine
    }

    setEngine(new_engName)
    {
         this.#engine=new_engName
    }

}

let tesla = new car("tesla","v8")
console.log(tesla.getEngine())
tesla.setEngine("v9")
console.log(tesla.getEngine())
