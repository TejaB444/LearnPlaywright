

let val = null  ?? "Default Value";
// The nullish coalescing operator (??) is used to provide a default value when the left-hand side operand is null or undefined.
console.log(val); // Output: "Default Value"

let val2 = undefined ?? "Default Value";
console.log(val2); // Output: "Default Value"

let val3 = 0 ?? "Default Value";
console.log(val3); // Output: 0 (because 0 is not null or undefined)

let val4 = " " ?? "Default Value";
console.log(val4); // Output: " " (because a string with a space is not null or undefined)

let val5 = false ?? "Default Value";
console.log(val5); // Output: false (because false is not null or undefined)