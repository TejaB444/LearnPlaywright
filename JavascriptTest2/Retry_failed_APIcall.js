// Retry Failed API Call
// In automation testing, API calls sometimes fail due to network issues. 
// Write a JavaScript program that simulates retrying a failed API call 
// using a do...while loop. The program should retry a maximum of 5 times. 
// Simulate random success/failure using Math.random() 
// (40% chance of success: randomValue > 0.6). 
// Log each attempt and print the final result.

let MAX_ATTEMPTS = 5;
let retryattempt=0;
const Threshold = 0.6;

do{
retryattempt=retryattempt+1;

const randomvalue= Math.random();
console.log(randomvalue);

isSuccess = randomvalue>Threshold;
console.log(isSuccess);

if(isSuccess)
{
    console.log(`Attempt ${retryattempt} : ✅ SUCCESS (Repsonse 200 OK) API call PASSED after ${retryattempt} attempt(s).`)
}
else
   {
    console.log(`Attempt  ${retryattempt} : ❌ FAILED(Timeout/Error)`)
} 
    
}
while (!isSuccess && retryattempt< MAX_ATTEMPTS );


