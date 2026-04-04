

let responsecode=500;

switch(responsecode)
{
    case 200 :
        console.log("OK");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 403:
        console.log("Forbidden");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    case  502:
        console.log("Bad Gateway");
        break;
    case 503:
        console.log("Service Unavailable");
        break;
    case 504:
        console.log("Gateway Timeout");
        break;
    default:
        console.log("Unknown response code");   
}