// Response Time SLA Analyzer
// As a performance tester, you collect API response times in milliseconds.
//  Write a JavaScript program using a while loop that analyzes an array of 
// response times and prints a performance report with min, max, average, 
// and how many responses breached the SLA threshold (> 500ms). 
// Use comparison operators for min/max tracking.

// input
// responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500

// Output:
// Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED

let responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500
let i=0;
let min=responseTimes[0], max=responseTimes[0], average,totalreq=0,totalresponse=0;
let breach=0;
while(responseTimes[i])
{
    totalreq=totalreq+1;
    min=min>responseTimes[i]?responseTimes[i]:min;
    max=max<responseTimes[i]?responseTimes[i]:max;
    totalresponse = totalresponse + responseTimes[i];
    if(responseTimes[i]>SLA_LIMIT)
        breach=breach+1;

    i++;
}
average = Math.round(totalresponse/totalreq);
console.log("Total Requests: "+ totalreq);
console.log("Min Response: " + min + "ms");
console.log("Max Response: " + max + "ms");
console.log("Avg Response: " + average + "ms");
console.log(`SLA breaches ${breach} (${(breach/totalreq*100).toFixed(2)}%)`);
console.log("❌ SLA VIOLATED");




