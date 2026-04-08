

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
console.log(testResults.length)
let passcount=0,failcount=0,skipcount=0;
for(let i=0; i<testResults.length;i++)
{
    if(testResults[i]=='pass')
    {
        passcount=passcount+1;

    }else if (testResults[i]=='fail')
    {
        failcount=failcount+1;

    }
    else 
        {
        skipcount=skipcount+1;

    }
}
let TotalTests= (passcount+failcount + skipcount);
console.log(`Total Tests : ${TotalTests} passed: ${passcount} Failed: ${failcount} Skipped: ${skipcount} Rate: ${(passcount/TotalTests)*100}% VERDICT: Minor failures. Review before release. `)