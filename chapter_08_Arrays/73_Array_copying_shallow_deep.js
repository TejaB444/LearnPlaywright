//

let og= [1,2,3,4];

let copy1 = [...og];
console.log(copy1);

let copy2 = og.slice()
console.log(copy2);

let copy3 = Array.from(og)
console.log(copy3);

let copy4 = og.concat()
console.log(copy4);

//deep copy

og.push(99);
console.log('-----------');
console.log(og);
console.log(copy1);
