//higher order functions (HOF)

// a function that takes a function as an argument 
// or returns a function as result

function runWithLogging(testfn, testName)
{
    console.log(`starting : ${testName}`)
    let result = testfn();
    console.log(`finished : ${testName} -> ${result}`)
    return result;

}

function loginTest(){
    return "pass"
}
function loginTestFail(){
    return "failed"
}
runWithLogging(loginTest, "login Test");
runWithLogging(loginTestFail, "login fail Test");
