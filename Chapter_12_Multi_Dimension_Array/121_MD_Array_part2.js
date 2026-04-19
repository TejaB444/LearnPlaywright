let grid = [
    [10,20,30],  //0 row
    [40,50,60],  //1 row
    [70,80,90]  //2 row

];
//3x3

//access row and column
console.log(grid[1][2])

grid[0][0]=99

console.log(grid[0][0])
console.log(grid)

//length
console.log(grid.length)  // number of rows
console.log(grid[0].length)  // number of columns in row 1

//to find the last element 
console.log(grid.length-1)
console.log(grid[0].length-1)
console.log(grid[grid.length-1][grid[0].length-1])  //grid[2][2]

let matrix =[
    ["login","pass",200],
    ["checkout","fail",404],
    ["search","pass",180]
];

for(let i=0;i<matrix.length;i++)
{console.log();
    for(let j=0;j<matrix[i].length;j++)
    {
        console.log(matrix[i][j] )
    }
    
}

for (let row of matrix){
    console.log();
    for(let cell of row)
    {
        process.stdout.write(cell+' ')
    }
    
}
// console.log();
// console.table(matrix)
console.log('-------------------');
matrix.forEach(row =>{
    console.log();
    row.forEach(cell => process.stdout.write(cell+' '))

});
