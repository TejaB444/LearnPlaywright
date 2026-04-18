const user ={
    name : "pramod",
    age : 35
}

const calculator  = {
    value : 0,
    add(n) {
        this.value+=n;
        return this;
    },
    subtract(n)
    {
        this.value-=n;
        return this;
    }
}

console.log(calculator.add(5).subtract(6));
// { value: 0, add: [Function: add], substract: [Function: substract] }