class Basetest{
    setup(){
        console.log("Base open browser")
    }
}

class APITest extends Basetest {

      setup(){
        console.log("APItest open browser")
    }
}

let test = new APITest()
test.setup()