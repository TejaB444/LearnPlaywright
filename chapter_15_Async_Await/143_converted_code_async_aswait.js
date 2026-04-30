
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


// openBroswer().then(function(msg){
//     console.log("step 1 ", msg)
//     return gotoLogin()
// }).then(function(msg){
//     console.log("step 2 ", msg)
//     return enterCreds()
// }).then(function(msg){
//     console.log("Step 3 ", msg)
//     return clickLogin()
// }).then(function(msg){
//     console.log("step 4 ",msg)
// }).catch(function(error){
//     console.log("error is ", error)
// })


async function runLoginflow(){
    let msg1 = await openBroswer();
    console.log("Step1 : ", msg1)

    let msg2 = await gotoLogin();
    console.log("Step2 : ", msg2)

    let msg3 = await enterCreds();
    console.log("Step3 : ", msg3)

    let msg4 = await clickLogin();
    console.log("Step4 : ", msg4)

}

runLoginflow()