

let x = "global";

if(true)
{
console.log("local let "+ x);
let x = "local"; 
}
console.log(x);