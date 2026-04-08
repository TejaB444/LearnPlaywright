// Test Data Generator
// As an SDET, you frequently need to generate test data for form testing. 
// Write a JavaScript program that generates test user data using a for loop. 
// Each user should have a unique ID (USR-0001 format), name, email, and role 
// (cycling through: admin, editor, viewer, tester, manager). 
// Every 3rd user should be inactive (edge case testing). 
// Demonstrate proper use of var (global counter), let (loop variables),
//  and const (fixed values).

const role=['admin', 'editor', 'viewer', 'tester', 'manager'];
var Maxusercount=12;

for(let i=1; i<Maxusercount+1; i++)
{
const paddedNumber = String(i).padStart(4, '0');  // padding to implement the prefix
const userId = `USR-${paddedNumber}`;  //userID with 0 prefix.
const username = `TestUser_${i}`;  //username with userID sync
const useEmail = `testuser${i}@testingacademy.com`  //emailID in sync with userid and username
const userrole = role[Math.floor(Math.random()*role.length)]  // random role is assigned from input array
const userStatus= (i%3 ==0) ? 'INACTIVE': 'ACTIVE';  //every 3rd user is inactive

console.log(userId + ' | ' + username + ' | '+ useEmail + ' | '+  userrole + ' | '+ userStatus );
}

// console.log(role[Math.floor(Math.random()*role.length)]);

