
function retry(TestName , MaxRetries =3, delay = 1000)
{
    console.log(`retrying ${TestName} up to  ${MaxRetries} times, with ${delay} ms apart.`)
}

retry("Login");
retry("checkout", 5);
retry("APi test", 2, 500);
