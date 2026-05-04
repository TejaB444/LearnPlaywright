//1. Define interfaces for user data 

interface userData{

    readonly userid:number;
    username : string;
    userGender : string;
        
}

let user1: userData = {
    userid:10,
    username : 'John',
    userGender :'Male'
}

console.log('userid : ', user1.userid,' username : ', user1.username,' gender : ', user1.userGender);
