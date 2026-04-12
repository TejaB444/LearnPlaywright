

function valdiateStatuscode(status)
{
    if(status>=200 && status<=300)
    {
        console.log("API request is fine")
    }
}

const valdiateStatuscode_exp = function (status)
{
    if(status>=200 && status<=300)
    {
        console.log("API request is fine")
    }
}

const valdiateStatuscode_Arrow = (status) =>
{
    if(status>=200 && status<=300)
    {
        console.log("API request is fine")
    }
}

valdiateStatuscode(200);
valdiateStatuscode_exp(200);
valdiateStatuscode_Arrow(200);