//var, let, const

//var: The var keyword is used to declare a variable in JavaScript. 
// Variables declared with var are function-scoped, 
// meaning they are accessible within the function they are declared in. 
// If declared outside of any function, they become global variables. 
// Variables declared with var can be re-assigned and re-declared within 
// the same scope.

// var a=10; //global scope
// console.log(a);
// function test()
// {
//     var b=20; //function scope
//     var a=15;
//     console.log("function scope value of b:" + b);
//     console.log("function scope value of a inside function:" + a);
//     if(true)
//     {
//         var a=30; //block scope
//         console.log("Focus:" + a);
//     }
//     console.log(a);
// }

// test();

// console.log("global scope value of a:" + a);
//console.log(b); // ReferenceError: b is not defined

//let: The let keyword is used to declare a block-scoped variable in JavaScript. 
// Variables declared with let are only accessible within the block they are declared in (e.g., within a loop, if statement, or function). 
// Variables declared
// with let can be re-assigned but cannot be re-declared within the same scope.

//variable declaration
let b =20;
console.log("global " + b);

//Function definition
function hello()
{
    let b=30;
    console.log("function " + b);
    if(true)
    {
        b =40;
        console.log("block " + b);
    }
    console.log("after if " + b);
}

//function calling
hello();
console.log("after function " + b);

//const: The const keyword is used to declare a block-scoped constant variable in JavaScript. 
// Variables declared with const are read-only and cannot be re-assigned or re-declared within the same scope. 
// However, if the constant variable holds an object or an array, the properties of that object or the elements of that array can be modified.


// var aa="hi"
// let aa="hello"; //SyntaxError: Identifier 'aa' has already been declared


const bb="hi";
console.log(bb);
bb="hello"; //TypeError: Assignment to constant variable.