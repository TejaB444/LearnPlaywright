//void : function which doesn't return any thing

function sayHello(): void {
    console.log("hello")
}

sayHello()

// Function annotations
function greet(name: string): string {
    return 'Hello, ${name}!';
}

// never - function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

throwError('testerror')