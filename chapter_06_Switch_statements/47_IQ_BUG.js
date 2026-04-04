let fruit = "Banana"; //Break is missing . it fall through all the cases and execute all the statements until it finds a break or end of switch statement.

switch(fruit)
{
    case "Apple":
        console.log("This is an Apple");
    case "Mango":
        console.log("This is a Mango");
    case "Banana":
        console.log("This is a Banana");
    case "Orange":
        console.log("This is an Orange");
    default:    
        console.log("Unknown fruit");
}