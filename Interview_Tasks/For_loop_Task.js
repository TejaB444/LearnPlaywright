// print Hello for 5 times
console.log("print Hello for 5 times");
for (let i = 1; i < 6; i++)
{
    console.log(`Hello ${i}`)
}

//Print numbers from 1 to 10
console.log("Print numbers from 1 to 10");
for (let a=0; a<10;a++)
{console.log(a+1)}

//Print even numbers from 1 to 20
console.log("Print even numbers from 1 to 20");
for (let e=1; e<=20; e++)
{
    if(e%2 == 0)
    {
        console.log(`${e} is an even number`);
    }
}

//Print the sum of first 10 natural numbers
console.log("Print the sum of first 10 natural numbers");
let result=0
for (let n = 1; n <= 10; n++ )
{   
    result=result+n
}
console.log(result);

//Print the multiplication table of 5
console.log("Print the multiplication table of 5");
for (let m=1; m<=10;m++)
{
    console.log(`5 x ${m} = ${m*5}`)
}
