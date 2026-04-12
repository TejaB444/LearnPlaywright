//Immediately Invoked Function Expression

//They don't need to be called

function name1(user)
{
    console.log("Hi(regular) " + user)
}
//IIFE
(function(user)
{
    console.log("Hi(IIFE) " + user)
}) ("Teja");

//IIFE with arrow
((user) =>
{
    console.log("Hi(Arrow) " + user)
}) ("Teja");

name1("Teja");