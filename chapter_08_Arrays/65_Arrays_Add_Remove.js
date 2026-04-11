//Add and Remove

let num = [10,20,30,40];

console.log(num);

//Add
num.push(50); //add an element to the last 

console.log(num);

//Remove
num.pop();  //removes the last element
console.log(num);

// num.push(60,70);
// console.log(num);

//add to beginning

num.unshift(0);
console.log(num);

//remove first element from beginning
num.shift();
console.log(num)

// //splice
// num.splice(2,2) //removes 1 item at index 2
// console.log(num)

num.splice(2,0,99,100) // removes 1 element at index 2 and add these new elements to array in that place
console.log(num) 
