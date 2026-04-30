async function getTestResults(){
    return "pass";

}

//async function always returns a promise
getTestResults().then(function(result){
    console.log(result)
})

let a = await getTestResults()
console.log("with await ",a)