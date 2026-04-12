// Exercise 3 — Deep vs Shallow Copy (Tricky)
// What is the output and why? How would you fix it?
// javascript

let suite1 = [{ name: "login", status: "pass" }];
//let suite2 = [...suite1];
let suite2 =structuredClone(suite1);
suite2[0].status = "fail";
console.log(suite1[0].status);

// let suite1 = [1,2,3,4];
// let suite2 = [...suite1];
// suite2[0] = 99
// console.log(suite1[0]);
// console.log(suite2[0]);
