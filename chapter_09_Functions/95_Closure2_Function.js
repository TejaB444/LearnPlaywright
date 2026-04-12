
function makeCounter(start=0)
{
    let count = start 

    // function increment()
    // {
    //     count++;
    // }
    // function descrement()
    // {
    //     count--;
    // }
    // function get()
    // {
    //     return count;
    // }

    return {
        increment() {count++;},
        descrement() {count--;},
        get() {return count;}

    }
}

let counter = makeCounter(5)
counter.increment();
counter.increment();
console.log(counter.get())
counter.descrement()
console.log(counter.get())