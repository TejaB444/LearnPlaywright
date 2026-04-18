

//Primitve data types  - call by value
//primitive  - number, string, boolean, null, undefined

let a=10
let b =a
b=99
console.log(a)
console.log(b)


// objects copied by reference - call by refernce
// refernce - object , Array, function

let obj1 = { value : 10}
let obj2 = obj1
obj2.status ="pass"
console.log(obj1)
console.log(obj2)