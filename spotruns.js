// class Environment {
//   constructor(name = "staging", port = 3000) {
//     this.name = name;
//     this.port = port;
//   }

//   getURL() {
//     return "http://" + this.name + ":" + this.port;
//   }
// }

// let env1 = new Environment();
// let env2 = new Environment("production", 8080);

// console.log(env1.getURL());
// console.log(env2.getURL());

// console.log(typeof NaN);

// const a=[1,2,3]
// a.push(4);
// console.log(a);

// console.log( 0 || 'hello');

// let a =5;
// b=a++;
// console.log(Boolean([]));

// if(null)
// {console.log('yes');

// }
// else
// {
//   console.log('No');
// // }
// // console.log('a' - 3);

// console.log(false + false);

// for (let i = 0; i < 5; i++) 
//   { 
//     if (i === 3) 
//       break; 

//   } 
// console.log(i);

// // var y;
// console.log(y)

// function test(){
// console.log('before' + b)
// for(i=1;i<3;i++)
// {
//   var b=10;


// }
// console.log('after' + b)
// }

// const post = {
//   id: 1,
//   content: "Hello World!",
//   stats: {
//     likes: 100,
//     retweets: 5
//   }
// };

// const updatepost = {
//     ...post, 
//     stats: {
//         ...post.stats, 
//         likes : 101
//     }
// }

// console.log(post.stats.likes)
// console.log(updatepost.stats.likes)
// console.log(post.stats.retweets)
// console.log(updatepost.stats.retweets)


function sum(...numbers) {
  // 'numbers' is now a real array: [1, 2, 3, 4]
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4,5)); // 10


function winners(gold, silver, ...everyoneElse) {
  console.log(`Gold goes to: ${gold}`);
  console.log(`Silver goes to: ${silver}`);
  console.log(`The other runners are: ${everyoneElse}`);
}

winners("Alex", "Sam", "Jordan", "Taylor", "Riley");
