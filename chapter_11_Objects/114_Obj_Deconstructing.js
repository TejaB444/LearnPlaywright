const user = {name1 : 'john', age : 30 , city : 'NYC'}

//basic destructuring
const {name1, age} = user
console.log(name1)
console.log(age)

//rename variables
const {name1: userName , age : userAge} = user
console.log(userName)
console.log(userAge)

//default values
const {country = "USA"} = user
console.log(country)
console.log(userName)
console.log(name1)
console.log(user)

const data = {user : {name : "john", address : {city : "NYC"}}}
const {user : {address : {city }} } = data

console.log(data)
console.log(data.user)

console.log(data.user.address)
console.log(data.user.address.city)
console.log({address : {city }})


