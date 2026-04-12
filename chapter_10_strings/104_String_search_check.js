

let url = 'https:// staging.coa.home/ca/login.php'
//includes - returns true/false checking the searchtext aginst string
console.log(url.includes('Staging'));
//starts with
console.log(url.startsWith('staging'));
console.log(url.startsWith('https'));
console.log(url.startsWith('http'));

// indexof - return the index postion of the searchtext
console.log(url.indexOf('home'));

//lastindexof - retrun last appeared index position of searchtext
console.log(url.lastIndexOf('a'));

console.log(url.lastIndexOf('aaa')); //retrun -1 when not found
//seach() -- accepts regex and returns index
//it searches with regex
console.log(url.search(/login/))




