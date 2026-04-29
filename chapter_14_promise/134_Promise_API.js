

let apicall = new Promise(function(resolve,reject){
    resolve ({status : 200, body: "user data"})
    reject ("rejected")
})

apicall.then(function(response){
    console.log(response)
    console.log(response.status);
    console.log(response.body)
})

//then runs only when the promise resolves successfully