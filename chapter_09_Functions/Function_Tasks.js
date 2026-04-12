// 1. What is the output?
// console.log(greet("Alice"));
// function greet(name) {
//   return `Hello, ${name}!`;
// }
//Answer: Hello, Alice!

// 2. What is the output?
// console.log(getStatus(200));
// const getStatus = (code) => code >= 200 ? "ok" : "error";

//ReferenceError -- Cannot access 'getStatus' before initialization

// 3. What does this function return?
// function analyze(scores = []) {
//   return scores.filter(s => s >= 70).length;
// }
// console.log(analyze()); 
//ans : 0 - coz scores is an empty object
//filtering an empty object results empty object 

// 4. What is the output?
// function makeCounter() {
//   let count = 0;
//   return () => ++count;
// }
// let counter = makeCounter();
// counter();
// counter();
// console.log(counter());  //Ans: 3

// 5. Which is a pure function? 

// a) function log(msg) { console.log(msg); } 
// b) function add(a, b) { return a + b; } 
// c) function getTime() { return Date.now(); } 
// d) function push(arr, val) { arr.push(val); return arr; }

//Ans : b since output depends on input

// 6. What is the output?

// function test(...args) {
//   return args.length;
// }
// console.log(test("login", "pass", 200, true));
//Ans: 4

// 7. What is the output?

// const obj = {
//   env: "staging",
//   getEnv: () => {
//     return this.env;
//   }
// };
// console.log(obj.getEnv());
//Ans : undefined  as arrow function points this to global

// 8. What does this return?

// function double(n) { return n * 2; }
// function addOne(n) { return n + 1; }
// console.log([1, 2, 3].map(double).map(addOne));
//Ans [3,5,7]  -- first doubles and adds 1


// 9. What is the output?

// function run(fn) {
//   return fn("Login");
// }
// console.log(run(name => `Running: ${name}`));

//Ans: Running: Login

// 10. What is the output?

function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());

//Ans : 30
