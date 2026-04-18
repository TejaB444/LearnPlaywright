

let str = ' Hello, World!  '
console.log(str.length)
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//follows locale language standards
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

//trim() - removes extra spaces from both ends of the string
console.log(str.trim().length)
//removes spaces from start
console.log(str.trimStart().length)
//removes spaces from end
console.log(str.trimEnd().length)

//replace
let msg = 'test: fail, retry : fail'

//replaces first only instance
console.log(msg.replace('fail','pass'));
//replaces all instances from string
console.log(msg.replaceAll('fail','pass'));
//using regerx for replaceall
console.log(msg.replace(/fail/g,'pass'));

//split

console.log("pass,fail,skip".split(","))

console.log("Hello".split(""))

console.log("test_login_pass".split("_").join("-"))

let parts = ['2026','04','13']
let date = parts.join("-")
console.log(date);

console.log(["chromium", "firefox"].concat("|"))










