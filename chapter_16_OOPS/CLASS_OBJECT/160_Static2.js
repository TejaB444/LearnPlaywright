class student{
    static collegeName="PW batch";

    constructor(name){
        this.name=name
    }
    display(){
        console.log("you are part of : ", student.collegeName)
    }
}

let amit = new student("Amit")
let meeti = new student("meethi")
let raj = new student("raj")

console.log(amit.name)
amit.display()
console.log(meeti.name)
meeti.display()
console.log(raj.name)
raj.display()