const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

console.log(obj1)

const copy = {...obj1};
// obj1.retry = 2
console.log(copy)

const copymerged = {...obj1,...obj2}
console.log(copymerged)

//this keywrod

const user = {
    name : 'Bhanu ',
    sayMyName(lastname) {
        this.name += lastname;
        return this.name;

    }
}
console.log(user.sayMyName('Teja'))
