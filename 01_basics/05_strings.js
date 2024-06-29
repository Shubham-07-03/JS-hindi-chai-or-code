const name = "shubham" 
const repoCount = 50
 
// console.log(name + repoCount + " Value" );
// these type of syntex doesn't look good

// in a modern day->

// console.log(` Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation
// Hello my name is shubham and my repo count is 50
  
 
// const gameName = new String('shubhamhc')

// console.log(gameName[01]);   // h
// console.log(gameName.__proto__);  // {}
// console.log(gameName.length);   // 9
// console.log(gameName.toUpperCase); //   [Function: toUpperCase]
// console.log(gameName.toUpperCase());  //  SHUBHAMHC

// console.log(gameName.charAt(2)); //  u
// console.log(gameName.indexOf('b'));  //  3

// const newString = gameName.substring(0, 4)
// console.log(newString);    //  shub

// const anotherString = gameName.slice(-9, 4)
// console.log(anotherString);


const newStringOne = "    Shubham      ";
console.log(newStringOne);  //   ->    Shubham      // space created
console.log(newStringOne.trim());// Shubham



const url = "https://shubham.com/shubham%20kumar"
console.log(url.replace('%20', '-')); // https://shubham.com/shubham-kumar
console.log(url.includes('shubham')); // true
console.log(url.includes('hitesh'));// false



const gameName = new String('shubham-hc-com')
console.log(gameName.split('-')); // [ 'shubham', 'hc', 'com' ]

