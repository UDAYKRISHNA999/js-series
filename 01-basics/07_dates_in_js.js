// Dates
//
let myDate = new Date()
// console.log(myDate);// 2024-05-10T05:36:51.319Z

// console.log(myDate.toString()); //Fri May 10 2024 05:35:05 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());// Fri May 10 2024

// console.log(myDate.toLocaleString()); //5/10/2024, 5:35:05 AM

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // 1/23/2023, 12:00:00 AM

// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // 1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14") //1/14/2023, 12:00:00 AM

let myCreatedDate = new Date("12-14-2023") //12/14/2023, 12:00:00 AM

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // 1715319824055
// console.log(myCreatedDate.getTime()); // 1702512000000
// console.log(Math.floor(Date.now()/1000)); //1715319899

let newDate = new Date()
console.log(newDate.getMonth()); // 2024-05-10T05:46:07.864Z
// console.log(newDate.getMonth() + 1); // 5 (We add 1 because in JS month count starts from 0 (this eefective only when we use .getMonth() method))

// console.log(newDate.getDay()); //5

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})