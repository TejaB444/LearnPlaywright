

let url="https://www.google.com"
let status = "pass"
let message = `test completed in ${200}ms` //template literal


let a = 'hello'  //single quotes
let b ="world"  //double quotes

let name1 = 'Alice'
let msg = `Hello ${name1}! 2+2 = ${2+2}`;
console.log(msg);

//multi line string

let report =`
tets : login
status : pass
duration : 100ms
`;

//String constructor (coverts other types)
let i=200
console.log(String(i));
String(true) 
String(null)
String(undefined)
String([1,2])