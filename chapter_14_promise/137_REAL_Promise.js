
//Promise chaining is solution to callback hell

function openBroswer(){
    return new Promise(function(resolve)
    {
        resolve("broswer opened")
    })
}

function gotoLogin(){
    return new Promise(function(resolve)
    {
        resolve("login page loaded")
    })
}

function enterCreds(){
    return new Promise(function(resolve)
    {
        resolve("Creds entered")
    })
}

function clickLogin(){
    return new Promise(function(resolve)
    {
        resolve("login success")
    })
}


openBroswer().then(function(msg){
    console.log("step 1 ", msg)
    return gotoLogin()
}).then(function(msg){
    console.log("step 2 ", msg)
    return enterCreds()
}).then(function(msg){
    console.log("Step 3 ", msg)
    return clickLogin()
}).then(function(msg){
    console.log("step 4 ",msg)
}).catch(function(error){
    console.log("error is ", error)
})