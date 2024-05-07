// in arrays we have shallow copy and deep copy 
/*
 Shallow copy: A copy which points to same reference of the original array (meaning when we make changes in copy will also EFFECTS in the original array) 
*/

/* 
 Deep copy: A copy which doesn't points to the reference of the OG array. (meaning changes in copy will NOT effect the OG array)
*/

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1 ,2)

console.log("slice: ",myn1);
console.log("B ", myArr); 


const myn2 = myArr.splice(1, 3) // The splice() method can be used to add new items to an array.
/* 
 NOTE: splice() method will alter the original array.
 In ES2023: added a new method toSpliced() which will not alter the original array insted creates a new array 
*/
console.log("C ", myArr);
console.log('splice: ',myn2);
console.log(typeof myArr);
