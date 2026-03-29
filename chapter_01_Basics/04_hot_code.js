console.log("Hello");

function add(a,b)
{
    return a+b;
}
console.log(add(2,3));
let result;
for (i=0;i< 10000; i++)
{
    result=add(i,i+1);
}
console.log("After 10000 calls:"+ result);