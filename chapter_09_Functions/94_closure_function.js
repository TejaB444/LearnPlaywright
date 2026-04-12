function outer(){
    let message ="hello";
    console.log("outer is called")

    function inner(){
        console.log(message);
        console.log("inner is called")
    }
    return inner;
}

outer();

let fn_inner= outer();

fn_inner();