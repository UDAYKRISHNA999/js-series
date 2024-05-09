// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // if (greet === " ") {
    //     console.log("space detected unable to go forther")
    //     break
    // }
    // console.log(`Each char is ${greet}`)
}

// Maps
/* 
Maps contains unique values, remembers the original insertion order of the keys.
Map is an object(type) holds key-value pairs 
*/

const map = new Map()
map.set('IN', "India") //('key', "value")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }