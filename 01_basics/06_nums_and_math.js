const score = 400
// console.log(score); // 400

const balance = new Number(100) 
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00



// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)); // 23.9


// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); // 124



// const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3)); // 1.12e+3


// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); //  123.9


// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // 1,000,000



// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //  10,00,000






// *****************   Maths   ************************

// console.log(Math); //  Object [Math] {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.abs(4));  // 4
// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.6));  // 5

// console.log(Math.ceil(4.3));  // 5; upper 
// console.log(Math.floor(4.9)); // 4; lower

// console.log(Math.min(5,4,5,7,9,6,2)); // 2
// console.log(Math.max(5,4,5,7,9,6,2)); // 9

// console.log(Math.random());
// 0.5661842135636503
// 0.5661842135636503
// 0.7666198827992232



// console.log(Math.random()*10);
// console.log(Math.random()*10);

// 4.825820415883415
// 0.6782903871860335

// 4.214462405278754
// 0.31987984861102436




// console.log((Math.random()*10)+ 1);
// 3.8382294965067456 //6.6741577101339 // 5.997439640077788


// console.log(Math.floor(Math.random()*10)+ 1);
// 3 // 3 // 4 // 8 // 9 // 7

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min );
console.log(Math.floor(Math.random() * (max - min + 1 )) + min );
// 18 //19 //15 //12 //16 //11 //19 //12 //18