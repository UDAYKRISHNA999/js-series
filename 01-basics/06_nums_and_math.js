const score = 400
// console.log(score);

const balance = new Number(100)  // type would be an object 
// console.log(balance); // output : Number {100}
const newVal = balance.toString();
//console.log(typeof(newVal)) // output: newVal:  100 & type would be string
// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // 1 denotes no. of 0's after point(.) Ex:- 100.0

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); //output: 123.9 provides precise val based on the value entered in ()

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // This will help in counting no. of 0's in a value , by mentioning ('en-IN') specifies that to show output in INDIAN decimal formate 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // abs() will take care of sign as it will convert -ve to +ve and no change for +ve
// console.log(Math.round(4.6)); 
// console.log(Math.ceil(4.2)); // output: 5.0
// console.log(Math.floor(4.9)); // output: 4.0
// console.log(Math.min(4, 3, 6, 8));  //output: 3
// console.log(Math.max(4, 3, 6, 8)); //output: 8

console.log(Math.random()); // To generate a random value 0.4729150140205223
console.log((Math.random()*10) + 1); // multiply with 10 and add 1 to it to avoid the risk of gettin value in 0.0.....(By adding 1 to it asssure that num will always not <1)
console.log(Math.floor(Math.random()*10) + 1); // This will apply floor to make it more precise

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
/* 
here we have min and max value and we want value in between by using the above formula we acan achive it.
*/