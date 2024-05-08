const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //known as string interpolation

const gameName = new String('hite,shh,c-com')

// console.log(gameName[0]); // h
// console.log(gameName.__proto__);// {}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); // t returns character at that index
// console.log(gameName.indexOf('t')); // 2 returns index of that character

const newString = gameName.substring(0, 4);
// console.log(newString); //hite (includes the initial position and excludes the range)

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString); // logges nothing to console (beacuse here -8 is the starting index and -ve indicates that to start indexing reversly )

const newStringOne = "   hitesh    ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); // hitesh (.trim() will remove the white spaces)

const url = "https://hitesh.com/hitesh%20choudhary";



// console.log(url.replace('%20', '-')); // https://hitesh.com/hitesh-choudhary

// console.log(url.includes('esh')); // true

// console.log(gameName.split(',')); // [ 'hite', 'shh', 'c-com' ]