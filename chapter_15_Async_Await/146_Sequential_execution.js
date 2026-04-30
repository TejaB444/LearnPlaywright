 //when step 2 depends on step1 - we need to run them sequentially

 function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve (name, "200 ok!")
        },1000)
    })
 }

 async function sequentialTest(){
    console.log("start of the Test")
    let start = Date.now();

    let r1 = await apiCall("login")
    console.log(r1);
    
    let r2 = await apiCall("Dashboard")
    console.log(r2);
    
    let r3 = await apiCall("Report")
    console.log(r3);

    console.log("Time : ~" + (Date.now()-start)+ "ms")
 }

 sequentialTest()