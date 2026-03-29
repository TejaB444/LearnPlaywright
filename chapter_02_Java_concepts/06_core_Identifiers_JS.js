//Identifier literals, operator
//Identifier: A name used to identify a variable, function, class, module, or other user-defined item. An identifier starts with a letter (A-Z or a-z), underscore (_), or dollar sign ($) followed by zero or more letters, underscores, dollar signs, or digits (0-9). JavaScript identifiers are case-sensitive.
//literal: A fixed value that is directly represented in the source code. Examples include numbers (e.g., 42), strings (e.g., "Hello"), booleans (e.g., true), and null (e.g., null).
//operator: A symbol that performs a specific operation on one or more operands. Examples include arithmetic operators (+, -, *, /), assignment operators (=, +=, -=), comparison operators (==, ===, !=, !==), and logical operators (&&, ||, !).


var a=10; // a is an identifier, 10 is a literal, = is an operator
a=20;
console.log(a);



//Rules of identifiers:
//1. An identifier must start with a letter (A-Z or a-z), underscore (_), or dollar sign ($).
//2. An identifier can be followed by letters, digits (0-9), underscores (_), or dollar signs ($).
//3. An identifier cannot be a reserved keyword in JavaScript (e.g., var, function, if, else, etc.).
//4. An identifier is case-sensitive (e.g., myVariable and myvariable are different identifiers).       
//5. An identifier cannot contain spaces or special characters (except for underscores and dollar signs).
//6. An identifier cannot start with a digit (0-9).

var name = "John"; // valid identifier
var _age = 30; // valid identifier
var $salary = 50000; // valid identifier
// var 1name = "Alice"; // invalid identifier (starts with a digit)
// var my-name = "Bob"; // invalid identifier (contains a hyphen)
// var var = "test"; // invalid identifier (reserved keyword)
var $$ = "valid"; // valid identifier
var _ = "also valid"; // valid identifier
let b=10;
function test()
{let b=20;}

console.log(b);

//Rules for literals:
//1. A literal is a fixed value that is directly represented in the source code.
//2. Literals can be of various types, including numbers, strings, booleans, null, and undefined.   
//3. String literals are enclosed in single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
//4. Numeric literals can be integers (e.g., 42) or floating-point numbers (e.g., 3.14).
//5. Boolean literals can be either true or false.
//6. Null is a special literal that represents the absence of any value and is denoted by null.
//7. Undefined is a special literal that represents an uninitialized variable or a variable that has been declared but not assigned a value, and is denoted by undefined.   
 

