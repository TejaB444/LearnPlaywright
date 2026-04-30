let apicall = new Promise(function (resolve, reject)
{
    reject("500 error")
    
})

apicall
.then(function(data){
    console.log("This is success")
})

.catch(function(error){
    console.log(error)
})