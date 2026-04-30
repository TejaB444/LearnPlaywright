class Animal{

    constructor(name){
        this.name=name;
    }

    eat()
    {
        console.log(this.name + " is eating")
    }

    sleep()
    {
        console.log(this.name + " is sleeping")
    }
}

class Dog extends Animal{

    constructor(name,breed)
    {   
        console.log("test")
        super(name) // calls the constructor of parent
        this.breed=breed
    }

    bark()
    {
        console.log(this.name + " is barking")
    }

}

let d= new Dog("Alex","Labrador")
d.eat()
d.sleep()
d.bark()
console.log(d.breed)