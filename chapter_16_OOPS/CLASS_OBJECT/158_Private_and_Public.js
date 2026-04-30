// private , public
//protected is not present in javascript

//private fields - (#) - hidden data

class Credentials{
    #apiKey;   // private attribute

    constructor(user,key){
        this.user = user //public
        this.#apiKey= key;
    }

    getAuthHeader(){
        return "bearer token : " + this.#apiKey
    }

}

let cred = new Credentials("Alice", "Secret-Key-a12345")
console.log(cred.user)
// console.log(cred.apiKey)
// console.log(cred.#apiKey)

console.log(cred.getAuthHeader())


// cred.apikey is undefined
// (it doesn't exist).
// cred.#apikey would throw a SyntaxError.
// The ONLY way to access it is through the public method getAuthHeader()