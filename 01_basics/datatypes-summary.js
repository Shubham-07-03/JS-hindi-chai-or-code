// diff between primitive & non primitive datatypes 

// Primitive Data Types:

      // Primitive data types are basic building blocks of a programming language.

      // They store single values directly (e.g., integers, floats, booleans).

      // They have fixed sizes and are simple to manipulate.


// Non-Primitive Data Types:

 //   Non-primitive data types are more complex and can store collections of data or structured information.
 //   Examples include arrays, lists, dictionaries, and objects.
 //   They are flexible in size and often require more memory compared to primitive types.
      



// Premitive Datatypes

//  7 types : string, Number, Boolean, null, undefined, symbol,BigInt



/*
 Return type of variables in JavaScript


 1) Primitive Datatypes

       Number => "number"
       String  => "string"
       Boolean  => "boolean"
       null  => "object"
       undefined  =>  "undefined"
       Symbol  =>  "symbol"
       BigInt  =>  "bigint"

 2) Non-primitive Datatypes

       Arrays  =>  "object"
       Function  =>  "function"
       Object  =>  "object"

*/


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);

const bigNumber = 342358735692n



// Refrence (Non Primitive)

// Array, Object, Functions



const heros = ["shaktiman", "naagraj", "krish"];

let myObj = {
    name: "shubham",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof )


// https://262.ecma-international.org/5.1/#sec-11.4.3