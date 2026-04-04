//Print "Playwright" 5 times
console.log("Print 'Playwright' 5 times");
let p=1;

while (p<=5)
{
    console.log("Playwright")
    p++;
}

//Print numbers from 1 to 10
console.log("Print numbers from 1 to 10");
let n=1;
while(n<=10)
{
    console.log(n);
    n++;
}


//Print even numbers from 1 to 20
console.log("Print even numbers from 1 to 20");
let e =1;
while(e<=20)
{
    if(e%2==0)
        console.log(`${e} is an even number`);
e++;
}


//Calculate sum of first 10 natural numbers
console.log("Calculate sum of first 10 natural numbers");
let result=0, i=1;
while(i<=10)
{
    result=result+i;
    i++;
}
console.log(result);

//Print the multiplication table of 7

console.log("Print the multiplication table of 7");
let a=1
while(a<=10)
{
    console.log(`7 x ${a} = ${a*7}`)
    a++;
}