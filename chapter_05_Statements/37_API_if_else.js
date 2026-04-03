
let statuscode = 504 // API call is successful

if (statuscode === 200) {
    console.log("API call is successful");
}
else if (statuscode === 404) {
    console.log("API call is unsuccessful");
}
else if (statuscode === 500) {
    console.log("Internal server error");
}
else if (statuscode === 401) {
    console.log("Unauthorized error");
}
else if (statuscode === 403) {
    console.log("Forbidden error");
}   
else if (statuscode === 400) {
    console.log("Bad request error");
}
else if (statuscode === 503) {
    console.log("Service unavailable error");
}
else if (statuscode === 504) {
    console.log("Gateway timeout error");
}
else if (statuscode === 502) {
    console.log("Bad gateway error");
}
else if (statuscode === 429) {
    console.log("Too many requests error");
}
else {
    console.log("API call is unsuccessful");
}