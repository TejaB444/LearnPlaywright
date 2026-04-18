

//1D array or list  - duplicate elements
let results  = ["pass", "fail", "pass"]


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log("length of matrix is :" + matrix.length)

for (let i=0; i<matrix.length; i++)
{
    for (let j =0; j<matrix.length; j++)
    {
        console.log(`at [${[i,j]}] value is ${matrix[i][j]}`)
    }
}




