//Array

let fruits = [];  //empty

let fresh_fruits=["apple", "banana", "pineapple"]; //3
//index 0,1,2

let arr= [10,20,30,40]; // 4 // 0-3

console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);




let testresults = ['pass','fail','pass','pass','fail'];

let mixed = [1, 'hello', true, null] // heteregenous

console.log(mixed.length);
console.log(mixed[0]);
console.log(mixed[1]);
console.log(mixed[2]);
console.log(mixed[3]);
console.log(mixed[4]);


//creating arrays

let browsers = ["chrome","edge","firefox","safari"]


//Array constructor
let scores2 = new Array(1,2,3,4); // creates [1,2,3,4] 
let scores = new Array(3); // new empty array with size as 3
// scores=[12,23,34,45]
scores.push(1)
scores.push(2)
scores.push(3)
scores.push(4)

console.log(scores.length);
console.log(scores[0]);
console.log(scores[1]);
console.log(scores[2]);
console.log(scores[3]);

//Array.of it is as same as Array
let test = Array.of(10,20,30,40,50) //5 //0-4
console.log(test)
console.log(test[0])

//Array.from  - it splits string to chars and store them as an array
let chars = Array.from("Hello");
console.log(chars);



