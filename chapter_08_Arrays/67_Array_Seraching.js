

//searching

let results = ['pass','fail','fail','pass','pass','fail'];

//indexof return first index of the search element or -1 if not found

console.log(results.indexOf('fail',4)); //searches from index 4 and returns index postion of 'fail' 

console.log(results.indexOf('skip')); //resturn -1 since no match for search

console.log('------------lastIndexOf----------------')
console.log(results.lastIndexOf('pass')) // retruns index of last instance of search element in array

console.log('-------------includes---------------')
console.log(results.includes('skip')) //returns boolean 

//find - returns first macthing element

let nums = [10,20,30,40]
console.log(nums.find(x=> x>=20))

console.log(nums.findIndex(n=> n>=20))

console.log(nums.findLast(a=>a))
console.log(nums.findLastIndex(a=>a))

