// Login Brute-Force Detection
// Write a JavaScript program that simulates a login system with brute-force detection. 
// The system should lock the account after 3 consecutive failed attempts. 
// Use a do...while loop to process login attempts from an array. 
// Demonstrate var (global counter), let (loop variables), and 
// const (credentials and threshold). 
// Validate using strict equality (===) and logical operators (&&).

// Input:
// Valid: admin@testingacademy.com / Test@1234 Attempts: [wrong, wrong, wrong, correct]

// Output:
// Attempt 1: ❌ FAILED - Strike 1/3 
// Attempt 2: ❌ FAILED - Strike 2/3 
// Attempt 3: ❌ FAILED - Strike 3/3 
// 🚨 ACCOUNT LOCKED Attempt 4: 
// 🔒 ACCOUNT LOCKED - Rejected

const emailID = 'admin@testingacademy.com'
const pswd = 'Test@1234'
const Attempts= ['correct','wrong', 'correct', 'wrong', 'wrong', 'wrong',]
const threshold=3;
let i=0;
var attemptcount=0;
var failcount=[];
do{
    
    if(Attempts[i]=='correct')
    {
        //console.log(Attempts[i]);
        console.log("Login Successful");
    }
    else
    {        
        console.log("login failed")
        failcount.push(attemptcount);
        console.log(failcount);
    }
    attemptcount=attemptcount+1;  
    if(failcount.length>=3)
    {
        for(let a=0; a<failcount.length-2; a++ )
            if(failcount[a+1] === failcount[a]+1 && failcount[a+2] === failcount[a]+2)
            {
                console.log("Account locked");
            }
        
    }

i++;
}
while(i<Attempts.length);
