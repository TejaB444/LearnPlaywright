//

let og= [1,2,3,4];

let copy1 = [...og];
// console.log(copy1);

let copy2 = og.slice()
// console.log(copy2);

let copy3 = Array.from(og)
// console.log(copy3);

let copy4 = og.concat()
// console.log(copy4);

copy1.push(99);
console.log('-----------');
console.log(og);
console.log(copy1);

//deep copy (JSON)
let c=og // deep copy
c.push(99);
console.log('-----deep copy------');
console.log(og);
console.log(c);


