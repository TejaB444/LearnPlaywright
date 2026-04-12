// Write a function makeRateLimiter(limit) that returns a function.
// Each call to the returned function should track usage and return 
// true if under limit , false when limit is exceeded.

function makeRateLimiter(limit)
{
    let call=0;

    function check()
    {
        call++
        return call<=limit;
    }
    return check; 
}

let limiter = makeRateLimiter(3); // calls makeRateLimiter and stores check in limiter
// whereas the check (closure) preserves both call and limit in its pocket(memory)
let secondLimiter = makeRateLimiter(5); // secondLimiter is independent of limiter
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(secondLimiter()) // since it is independent it start freshly
