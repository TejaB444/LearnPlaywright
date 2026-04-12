//pure function
//always returns same output for the same input and has no side effects

// pure -- no side effects, predictable output
function calculatepassrate(total,passed)
{
    return ((passed/total)*100).toFixed(2);
}

console.log(calculatepassrate(10,7));
console.log(calculatepassrate(10,7));
console.log(calculatepassrate(10,7));

//impure --depends on external state
let threshold=70;

function isPassScore(score)
{
    return score>=threshold; // depends on external variable
}