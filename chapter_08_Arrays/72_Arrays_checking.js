//to check if something is an array


let result = Array.isArray([1,2,4,5])
let result1 = Array.isArray()

console.log(result)
console.log(result1)


//every 

let r1 = [80,85,90].every(s=>s>=70)  //true
let r2 = [69,85,90].every(s=>s>=70)  //false
console.log(r1)
console.log(r2)

//some
let s1 = [69,85,90].some(s=>s>=70)  // true
let s2 = [69,65,35].some(s=>s>=70)  //false
console.log(s1)
console.log(s2)


