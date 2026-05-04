// 3. Extend interfaces for inheritance

interface userData{
    readonly userid:number;
    username : string;
    userage?: number;
    userGender : string;        
}

interface Admin extends userData{
    role : string;        
}

let admin1: Admin = {
    userid : 111,
    username :'Michael',
    userGender : 'M',
    role : 'QA'
}

console.log('userid : ', admin1.userid,'| username : ', admin1.username,'| gender : ', admin1.userGender,'| role : ',admin1.role);
