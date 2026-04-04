
let status=null;
switch(status){
    case false:
        console.log("The status is false");
        break;
    case 0:
        console.log("The status is zero");
        break;
    default:
        console.log("Unknown status");
}

let name4 = true ? "Default" : "non";
console.log(name4);

let name2 =" " || "DDefault";
console.log(name2);

let name5 = null ?? "default";
console.log(name5);
