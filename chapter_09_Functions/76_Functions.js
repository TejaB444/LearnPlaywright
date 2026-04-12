

//without functions - repeat the logic for each need

// let score =90;
// let result= score>=70 ? "pass" : "fail";
// console.log(result);

// let score1 =65;
// let result1= score1>=70 ? "pass" : "fail";
// console.log(result1);

//with function - declare once and we can use any number of times

//defining a function getResult
function getResult(score)
{
    return score>=70 ? "pass" : "fail";
}

//calling a function
console.log(getResult(90));
console.log(getResult(65));

