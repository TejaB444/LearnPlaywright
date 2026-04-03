

// =, ==, ===, !=, !==, >, <, >=, <=
//= assignment operator
// == equal to
// === strict equal to
// != not equal to
// !== strict not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
//<> not equal to (deprecated)
let a=5;
console.log(a); // Output: 5

console.log(5==5); // Output: true
console.log(5==10); // Output: false

console.log(5=="5"); // Output: true  beacause == checks for value only and performs type coercion if necessary
console.log(5==="5"); // Output: false  because === checks for both value and type

console.log(5!="5"); // Output: false because != checks for value only and performs type coercion if necessary
console.log(5!=="5"); // Output: true because !== checks for both value and type