// objects
// key and value

let student1 = {name : "Amit" , age : 35}
let student2 = {name : "pramod"}
let student3 = {name : "Pramod", age : 40, phone : 9876543210 }

//keyb will not be in the dopuble quotes
//below is JSON not key value

let json_student = {"name" : "Teja", age : 40, phone : 9876543210 }
console.log(typeof json_student)

let a ={status : "pass"}
console.log(a.status);
console.log(a["status"]);

let a1 ={status : 'pass'}
console.log(a1.status);

//keys are case sensitive
console.log(a1.Status);  // returns undefined


let b=a; // b copies the reference not the object. both a and b points to same memory

b.status = "fail";
console.log(b.status);
console.log(a.status);
console.log(a==b);


// Two separate objects - different memory
let c ={staus : 'pass'}
let d ={staus : 'pass'}
console.log(typeof c)
console.log(c==d);


let test = {"name" : "Teja", age : 30}
console.log(test.age)
console.log(test.name)
console.log(typeof test)