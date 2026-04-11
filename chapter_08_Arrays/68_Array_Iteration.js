//Iteration - nothing but traversing

let tests = ['login','search','checkout'];

for (let i=0; i<tests.length;i++)
{
    console.log(tests[i]);
}

console.log('------------separator -------------')

// for....of (cleanest for values)
for(let test of tests)
{
    console.log(test);
}

console.log('------------separator -------------');

//foreach (no return value)

tests.forEach((test,index)=>{
    console.log(`${index} ${test}`);
});

console.log('------------separator -------------');

//enrties() -- index + value

for (let [i,test] of tests.entries())
{
    console.log(i,test);
}


let students = ['methi','senthil','arya','rahul'];

for(let student in students)
{
    console.log(students[student]);
}