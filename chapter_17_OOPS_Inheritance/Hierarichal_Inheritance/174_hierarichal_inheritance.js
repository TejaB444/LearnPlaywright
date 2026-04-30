class father{

    f_test(){
        console.log("a method from father")
    }

}

class son extends father {

    test(){
        console.log("A menthod from son")
    }

}

class daughter extends father {

    D_test(){
        console.log("A menthod from daughter")
    }

}

let s= new son()
s.test()
s.f_test()
console.log('-----------------------')
let d=new daughter()
d.D_test()
d.f_test()