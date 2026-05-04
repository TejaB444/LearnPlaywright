//2. Create interfaces with optional properties


interface userData{

    readonly userid:number;
    username : string;
    userage?: number;
    userGender : string;
        
}

let user1: userData = {
    userid:10,
    username : 'John',
    userGender :'Male'
}

let user2: userData = {
    userid:10,
    userage : 30,
    username : 'Jenny',
    userGender :'Female'
}

console.log('userid : ', user2.userid,'| username : ', user2.username,'| Age : ',user2.userage,'| gender : ', user2.userGender);
console.log('userid : ', user1.userid,'| username : ', user1.username,'| gender : ', user1.userGender);
