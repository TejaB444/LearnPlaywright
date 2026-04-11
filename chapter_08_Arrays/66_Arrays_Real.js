
let broswers = ["chrome","Edge","Safari","Firefox","Opera"];

console.log(broswers.length);
console.log(broswers);
console.log('--------------------')
broswers.pop();
console.log(broswers);
console.log('--------------------')
broswers.shift();
console.log(broswers);
console.log('--------------------')
broswers.unshift('testbroswer');
console.log(broswers);

for(let i=0;i<broswers.length;i++)
{
    console.log(broswers[i]);
}