class person{
    //Hide your children by making static (#)
    #child1;
    #child2;

    constructor(name, ch1, ch2){
        this.name= name;
        this.#child1 = ch1
        this.#child2 = ch2
    }
    getchild1(){
        return this.#child1
    }

    setChild1(new_name){
        this.#child1=new_name
    }
}

let p1=new person("pramod","vrad","Anu")
console.log(p1.name)
console.log(p1.getchild1())
p1.setChild1("Viraj")
console.log(p1.getchild1())
 