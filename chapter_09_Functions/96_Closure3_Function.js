

function maxRetryTracker(max)
{
    let attempts = 0;
    function tryAgain(testname)
    { 
        attempts++;
        if(attempts>max)
        {
            return `${testname} exceeds max retry attempts (${max})`
        }

        return `Attempt ${attempts}/${max} for ${testname}`       

    }; 

    return tryAgain

}

let retry = maxRetryTracker(3)
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));