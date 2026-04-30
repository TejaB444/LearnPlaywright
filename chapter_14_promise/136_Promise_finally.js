let testRun = new Promise(function(resolve,reject){
        resolve("test success")
        //reject("Assertion failed")

})

testRun
.then(function(msg){  //resolve
    console.log(msg)
})
.catch (function(error){  //reject
    console.log(error)
})
.finally(function(msg){  //always executed
    console.log("i will be execulted always")
})

//finally() always runs whether the test failed or passed.

