// real QA sceanrio : E2E login flow app.vwo.com

function openBrowser(callback){
    console.log("open the browser")
    setTimeout( () => {
        console.log(" step 1 : broswer starting")
        callback();
    }, 500);
}

function gotoLoginPage(callback){
    setTimeout( () => {
        console.log(" step 2 : login page")
        callback();
    }, 500);
}

function enterCredentials(callback){
    setTimeout( () => {
        console.log(" step 3 : enter credentials")
        callback();
    }, 500);
}

function clickLogin(callback){
    setTimeout( () => {
        console.log(" step 4 : click login")
        callback();
    }, 500);
}

openBrowser(function (){
    gotoLoginPage(function (){
        enterCredentials(function (){
            clickLogin(function (){
                console.log("test complete")
            })
        })
    })
})

