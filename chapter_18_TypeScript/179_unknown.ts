let unknown: unknown = 123

if (typeof unknown === "string") {
    console.log("Hi")
}

let message: string = "Hello"
let userid: number;

// Function annotations
function greet(name: string): string {
    return 'Hello, ${name}!';
}

// Arrow function annotations
const multiply = (a: number, b: number): number => a * b;

// Object annotations
let user: { name: string; age: number } = {
    name: "John",
    age: 30
}
