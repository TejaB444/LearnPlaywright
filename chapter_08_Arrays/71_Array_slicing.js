//slicing & combing

let arr =[1,2,3,4,5];

//slice (start, end) -- returns new array, doesn't mutate. actua (start, end-1)
// console.log(arr.slice(1,3));
// console.log(arr.slice(-3));
// console.log(arr.slice(6,10));
// console.log(arr.slice(2));

let arr1 =[1,2,3,4,5];

let a = [1,2];
let b = [3,4];
let c = a.concat(b,[5,6])
console.log(c);
console.log(a.concat(b));


//spread(...) -- modern way  of concatenation
console.log('----------------')
let d = [...a, ...b]
console.log(d);

//join
console.log(['pass','skip','fail'].join(" | "))





