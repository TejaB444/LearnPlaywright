let checkAuth = Promise.resolve("Auth ok")

let checkDB = Promise.resolve("DB ok")
let checkCache = Promise.resolve("cache ok")

Promise.all([checkAuth,checkDB,checkAuth]).then(function(results){
    console.log("All checks ", results)
})

Promise.all([
    Promise.resolve("OK"),
    Promise.resolve("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); })
    .catch(function (err) { console.log("Failed:", err); });