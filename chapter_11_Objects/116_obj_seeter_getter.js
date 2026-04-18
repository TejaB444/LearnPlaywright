
const user = {
    firstname : 'Bhanu ',
    lastname : 'Teja',
    get FullName() {
        return this.firstname + this.lastname
    },

    set FullName(value) {
        [this.firstname, this.lastname] = value.split(" ");

    }
}
console.log(user.firstname)
console.log(user.lastname)
console.log(user.FullName)
user.FullName ="Pramod Dutta"
console.log(user.FullName)