

var x = "global";

if(true)
{
console.log("local let "+ x);
var x = "local"; 
}
console.log(x);