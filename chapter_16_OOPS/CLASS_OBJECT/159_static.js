class testRunner{
    static TotTests =0
    static passcount = 0

    constructor(name, passed)
    {
        this.name=name;
        testRunner.TotTests++
        if(passed){
            testRunner.passcount++
        }
    }

    static summary(){
        return testRunner.passcount + "/" + testRunner.TotTests + "passed"
    }

}


new testRunner("Login", true);
new testRunner("signup", false);
new testRunner("cart", true);
new testRunner("checkout", true);

console.log(testRunner.summary())


// let t = new testRunner('Amanda',true)
// console.log(t.name)
// console.log(testRunner.TotTests)
// console.log(testRunner.passcount)
// console.log(testRunner.summary())
// t.TotTests=10

// let t2 = new testRunner('Sanjay',true)
// console.log(t2.name)
// console.log(testRunner.TotTests)
// console.log(testRunner.passcount)
// console.log(testRunner.summary())

// let t3 = new testRunner('Paul',false)
// console.log(t3.name)
// console.log(testRunner.TotTests)
// console.log(testRunner.passcount)
// console.log(testRunner.summary())