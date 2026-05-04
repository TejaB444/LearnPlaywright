function getString(name: string): string {
    return "Amit";
}

getString("pramod");
// getString(123);
console.log(getString("pramod"))

function getFirstResults<T>(results: T[]): T {
    return results[0]!;
}

let firstCode = getFirstResults<number>([200, 404, 500]);
let firstTest = getFirstResults<string>(["Login", "Signup", "Cart"]);

console.log("First code:", firstCode);
console.log("First test:", firstTest);