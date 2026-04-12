

//function with arguments/parameter but no return

function greetbyName(name)
{
    console.log("Hello!", name);
}

greetbyName("Teja");
greetbyName("Sam");
greetbyName("Raj");

// undefines since the function is not returning anything, it is jus printing on console.
let name1 = greetbyName("Teja");
console.log(name1);