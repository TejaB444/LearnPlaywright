function step1(callback){
    console.log("opem broswer")
    callback();
}

function step2(callback){
    console.log("navigate to a page")
    callback();
}

function step3(callback){
    console.log("click a button")
    callback();
}

step1(function(){
    step2(function(){
        step3(function(){
            console.log("done")
        })
    })
})