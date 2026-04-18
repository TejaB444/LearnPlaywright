let user = {
    name : "john",
    age : 30 ,
    email : "john@example.com"
}

console.log(user)

// accessing properties
console.log(user.name)
console.log(user["age"])
console.log(user['email'])

//Dynamic property keys
const key = 'age'
console.log(user[key]);

//adding and modifying properties

user.city = "hyd"
user.age = 29

console.log(user)