

// let order = new Promise(function (resolve, reject) {
//     let foodready = true;
//     if (foodready) {
//         resolve("Pizza is delivered!");
//     } else {
//         reject("Order Cancelled!")
//     }
// })

// console.log(order);


// let apiCall = new Promise(function (resolve, reject) {
//     reject("500 Error");
// });

// apiCall.then(function (data) {
//     console.log("Data is success!!")
// }).catch(function (error) {
//     console.log(error)
// });


// let testRun = new Promise(function (resolve, reject) {
//     reject("Assertion Failed");

// });

// testRun.then(function (data) { // Resolve
//     console.log(data);
// }).catch(function (error) { // Reject
//     console.log(error);
// }).finally(function () { // Always Executed!
//     console.log("I will be executed anyhow!!");
// });


function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened!");
    });
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}

openBrowser()
    .then(function (msg) {
        console.log("Step 1", msg);
        return goToLogin();
    }).then(function (msg) {
        console.log("Step 2 :", msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("Step 3 :", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step 4 :", msg);
    }).catch(function (error) {
        console.log("Error:", error);
    });