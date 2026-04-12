

function add(a,b,c)
{
    return a+b+c;
}

let num = [1,2,3];
console.log(add(num));
console.log(add(...num));

function haserrors(...codes)
{
    return codes.some(c => c>=400)
}

let responses = [200,300,401];

console.log(haserrors(...responses))

