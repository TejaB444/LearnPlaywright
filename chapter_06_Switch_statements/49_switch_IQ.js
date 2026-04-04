
let a=1;
let x=a;
switch(x)
{
    case a:
        let b1=1;
        console.log(b1);
        break;
    case a:
        let b2=2;
        console.log(b2);
        break;
}

//it will allow to have duplicate cases but it will execute only 
// the first case and ignore the second case because of break statement 
// in the first case. if we remove the break statement from the first 
// case then it will execute both the cases because of fall through 
// behavior of switch statement.