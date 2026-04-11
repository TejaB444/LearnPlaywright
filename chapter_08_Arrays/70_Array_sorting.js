
//sorting
let fruits = ['banana', 'apple','dragon_Fruit','cherry'];

fruits.sort();  //alphabetical by deafult 
console.log(fruits);

let nums = [40, 1,20,2,6,3];
// console.log(nums.reverse())  // reverses the array

nums.sort(); // sorts based on the string not number.
console.log(nums);
nums.sort((a,b) => a-b);  // sorts the numberrs based on value in ascending
console.log(nums);

nums.sort((a,b) => b-a);  // sorts the numberrs based on value in descending
console.log(nums);


