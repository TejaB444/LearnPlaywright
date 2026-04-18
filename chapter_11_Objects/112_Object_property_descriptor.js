let obj = {name : "login"}
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

// {
//   value: 'login',
//   writable: true,  // can change the value
//   enumerable: true,  // shows in for...in /Object.keys()
//   configurable: true  //can delete or redefine
// }