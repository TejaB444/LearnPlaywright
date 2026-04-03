

// typeof operator is used to determine the type of a variable or an expression. 
// It returns a string indicating the type of the operand.

console.log(typeof 42); // Output: "number"
console.log(typeof 42.42); // Output: "number"
console.log(typeof "Hello"); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object"
console.log(typeof []); // Output: "object"
console.log(typeof {}); // Output: "object"
console.log(typeof function(){}); // Output: "function"     
console.log(typeof (() => {})); // Output: "function"     
console.log(typeof function abc(){}); // Output: "function"

console.log(null); // Output: null
console.log(typeof null); 
// Output: "object" (this is a known quirk in JavaScript, where null is considered an object type)