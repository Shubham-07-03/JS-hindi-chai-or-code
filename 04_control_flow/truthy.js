// const userEmail = "s@shubham.ai"

// if (userEmail){
//     console.log("Got user email"); // Got user email
// }else {
//     console.log("Don't have user email");
// }



// const userEmail = "" // empty string; Don't have user email
// if (userEmail){
//     console.log("Got user email"); 
// }else {
//     console.log("Don't have user email"); // Don't have user email
// }




// const userEmail = [] // Empty array ; Got user email
// if (userEmail){
//     console.log("Got user email");  // Got user email
// }else {
//     console.log("Don't have user email");
// }




// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}



// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("Array is empty");// Array is empty
// }


// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty"); // object is empty
// }

/*  false == 0
    > true
    false == ''
    > true
    0 = ''
    > true   */


// Nullish Coalescing Operator (??): null undefined

 // let val;
 // // val1 = 5 ?? 10               // 5
 // // val1 = null ?? 5             // 5
 // // val1 = undefined ?? 5        // 5
 // // val1 = null ?? 15 ?? 10      // 15
 // // val1 = null ?? undefined     // undefined
 // val1 = undefined ?? null ?? 11  // 11

 // console.log(val1);

 
// ++++++ Ternary Operator ++++++

//  condition ? true : false

 const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// more than 80 
