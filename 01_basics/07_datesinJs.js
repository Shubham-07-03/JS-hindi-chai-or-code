//  Dates

// let myDate = new Date ()
// console.log(myDate);   // 2024-06-29T11:20:06.751Z
// console.log(myDate.toString()); // Sat Jun 29 2024 11:21:25 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sat Jun 29 2024
// console.log(myDate.toLocaleString());// 6/29/2024, 11:24:06 AM
// console.log(typeof myDate); // object



// let myCreatedDate = new Date (2023, 0, 23)
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023


// let myCreatedDate = new Date (2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM


// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM


// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM





let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // 1719661682196
// console.log(myCreatedDate.getTime()); // 1673654400000

// console.log(Date.now()/1000)  // 1719661835.423 ; but we don't want in decimal

// console.log(Math.floor(Date.now()/1000)); // 1719661983





 
let newDate = new Date()
// console.log(newDate); //   2024-06-29T12:06:12.095Z
// console.log(newDate.getMonth() + 1 ); //  6
// console.log(newDate.getDay()); // 6
// console.log(`${new Date()} ${ newDate.getMonth() + 1 } ${newDate.getDay()} `);
// Sat Jun 29 2024 12:07:27 GMT+0000 (Coordinated Universal Time) 6 6 

newDate.toLocaleString('default', {
    weekday: "long",

})
console.log(newDate.toLocaleString()) // 6/29/2024, 12:13:55 PM