//task 1
// ✅ Validate URL contains expected environment

// let url = "https://staging.myapp.com/dashboard";

// console.log(url.includes("staging"));  //true

// console.log(url.startsWith("https")); //true

// console.log(url.endsWith("/dashboard")); //true

//task 2

// let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";

// let status = log.match(/Status: (\d+)/)[1];  //500

// console.log(status)

//task 3

// let env = "staging"; 
// let module = "auth"; 
// let count = 7; 

// let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;
// console.log(testId)
//staging_auth_007

//task 4
// let actual = " PASS "; 
// let expected = "pass"; 

// let result = actual.trim().toLowerCase() === expected; //true
// console.log(result)

//task 5

// let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; 
// console.log(testUrl.split("?")[1])
// console.log(testUrl.split("?")[1].split("&"))
// console.log(testUrl.split("?")[1].split("&").map(p => p.split("=")))
// let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );
// console.log(params)

//{ query: 'login', page: '2', sort: 'asc' }

//task 6
// let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
// let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
// console.log(masked) //Bearer ***REDACTED***

let a = { status: "pass" };
let b = a;
b.status = "fail";
console.log(a.status); //fail coz both references ar pointed to same object


console.log("Error: 404 Not Found".match(/\d+/g))