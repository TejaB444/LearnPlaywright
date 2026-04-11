
// 
let scores = [45, 50, 55, 60, 71,95,98];

//map - transforms every element, retruns NEW array
let grades = scores.map(s => s>70 ? 'pass': 'fail');
console.log("grades " + grades);


//filter - keeps elemets that pass a test

let passed = scores.filter(s => s>70 );
console.log(passed);

//reduce - accumulates to a single value

let total = scores.reduce((sum,s)=>sum + s,0);
console.log(total);

//flat - flattens nested arrays to single array

let nestedArr= [1, [2,3],[4]];
console.log(nestedArr.flat())
