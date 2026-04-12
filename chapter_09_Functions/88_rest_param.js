function logResults(SuiteName, ...results)
{
    console.log(`Suite : ${SuiteName}`);
    console.log(results);
    console.log(`Results : ${results.join(',')}`);
}

logResults("Auth Test", "pass","pass","fail","pass");