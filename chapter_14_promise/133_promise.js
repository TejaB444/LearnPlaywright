let order =new Promise(function(resolve,reject){

    let foodready=true;
    if(foodready){
        resolve("pizza is delivered")
    }
    else{
        reject("order cancelled")
    }
})

console.log(order)
//promise is an object that wraps a value that will be available later.

