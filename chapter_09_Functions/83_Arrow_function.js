//Arrow function(ES6)

const greet1 = function (name1) {
    return `Hello, ${name1}!`;
};
//Arrow function
const greet2 = (name2) =>  `Hello, ${name2}!`;

console.log(greet1("Alice"));
console.log(greet2("Alice"));

//Arrow function generally works for one liner codes
const doubleIt= n => n*2;
console.log(doubleIt(10));

// no params requires
 const getEnv = () => "Staging"
 console.log(getEnv());

 // can we use arrow function for Multi line?
 const getResult = (score) => {
    if(score >=70) return "pass";
    return "fail";
 };

 console.log(getResult(90));
 console.log(getResult(60));


