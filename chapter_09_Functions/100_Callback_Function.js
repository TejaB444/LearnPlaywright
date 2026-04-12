//callback
// a function passed as an argument to a function, to be called later


function runtest(testname, callback)
{
    let result ="pass";
    //100 lines of code
    callback(testname, result)
}


function onComplete(name,result)
{
    console.log( `test ${name} is ${result}`)
}

runtest("LoginTest",onComplete)
