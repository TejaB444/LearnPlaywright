//error handling -- Try/catch

//with promises you use .catch()
//with async/await you use try/catch - similar to js error handling

async function testAPI(){
    try{
        let result=await Promise.reject("500 error")
        console.log("result is : ",result)

    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("clean up")
    }
}
testAPI()

// try/catch/finally maps directly to .then()/.catch()/.finally() - same logic, cleaner syntax.