// *********
//  *******
//   *****
//    ***
//     *
let n=5
for(let i=1;i<=n;i++)
{let row =''
    //console.log(i)
    for(let j=1;j<=i-1;j++)  // prints spaces 0,1,2
    {
        row +=' ';
    }
    for(let j=1;j<=2*(n-i)+1;j++)
    {
        row +='*';
    }
    for(let j=1;j<=i-1;j++)  // prints spaces 0,1,2
    {
        row +=' ';
    }
    
    console.log(row)
}