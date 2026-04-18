const ENV = {
    baseurl : "https://staging.myapp.com",
    browser : "Chrome",
    timeout : 2000,
    retries : 2
}

const expected_response = {
    status : 200,
    body : {
        user : {role : "admin", active : true}
    }
}