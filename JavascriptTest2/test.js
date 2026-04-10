const emailID = 'admin@testingacademy.com'
const pswd = 'Test@1234'
const Attempts= ['wrong', 'wrong', 'wrong', 'wrong']
const threshold=3;
let i=0;
var attemptcount=0;
do{
    if(attemptcount>=threshold)
    {
        console.log("Account locked");
    }
    else if(Attempts[i]=='correct')
    {
        console.log(Attempts[i]);
        console.log("Login Successful");
    }
    else
    {
        
        Console.log("login failed")
    }
    attemptcount=attemptcount+1;  

i++;
}
while(i<Attempts.length);