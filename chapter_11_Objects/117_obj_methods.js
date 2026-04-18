const obj = {a:1,b:2,c:3};

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


const user = {name : 'john', age : 30}
//for loop
for (const key in user)
{
    console.log(`${key} : ${user[key]}`)
}

console.log('-----for each ---------')
//for each loop
//Object.keys/values/entries
Object.keys(user).forEach(key => {
    console.log(key)

});

Object.entries(user).forEach(([key,value]) => {
     console.log(`${key} : ${value}`)
});