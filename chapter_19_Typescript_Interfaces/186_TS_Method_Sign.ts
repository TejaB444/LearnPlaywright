interface Calculator{
    // x: number
    // y:number
    add(a:number,b:number):number
    subtract(a:number,b:number):number
    multiply : (a:number,b:number) => number
}

const calc: Calculator = {
    add: (a, b) => (a+b),
    subtract :(a, b) => (a-b),
    multiply : (a, b) => (a*b)
}

console.log(calc)