

console.log(greeting);
var greeting = "Hello, World!";
console.log(greeting);

// In JavaScript, variable declarations using let and const are also hoisted to the top of their scope, but they are not initialized until the code execution reaches their declaration. 
// This means that if you try to access a variable declared with let or const before its declaration, it will result in a ReferenceError. 
// This is because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.    

console.log(aa);
const aa = "Hello, World!";
console.log(aa);    


