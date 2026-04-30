class ICICI{
    #balance;

    constructor(name, balance){
        this.name=name;
        this.#balance=balance
    }

    getBalance()
    {
        return this.#balance
    }

    setBalance(balance,isCashier){
        if(isCashier)
        {
            this.#balance=balance
        } else {
            console.log("not allowed")
        }
    }

}

let pramod = new ICICI("pramod", 10000)
console.log(pramod.getBalance())
pramod.setBalance(100000,false)
console.log(pramod.getBalance())

console.log('-----------')

let pramod_father = new ICICI("father", 10000)
console.log(pramod_father.getBalance())
pramod_father.setBalance(100000,true)
console.log(pramod_father.getBalance())
