let str = "Hello, World!"

//length
console.log(str.length);

// Access by index
console.log(str[0])
console.log(str[1])
console.log(str[2])
console.log(str[5])
console.log('-------negative-----------')
console.log(str.at(-1))  // return value even with negative index
console.log(str.at(-2))
console.log(str.at(-5))

//charAt  -  accepts only postive number and returns value at index
console.log("charAt " + str.charAt(1));

//charCodeAt  -- gives unicode

console.log("charCodeAt " + str.charCodeAt(1));
