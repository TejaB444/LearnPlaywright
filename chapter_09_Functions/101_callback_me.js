function doing_work(worker,callback){
    console.log("started class");
    let work= worker;
    //
    console.log("class done");
    callback();
}

function callfriend()
{
    console.log("call a friend once work done")
}

doing_work("PW_class",callfriend);