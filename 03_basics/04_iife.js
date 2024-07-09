//         Immediately Invoked Function Expressions(IIFE)

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai() // DB CONNECTED



// (function chai() {
//     console.log(`DB CONNECTED`);  // DB CONNECTED
// })()



// (function chai() {
//     console.log(`DB CONNECTED`);  // DB CONNECTED
// })();

// (() => {
//     console.log(`DB CONNECTED TWO`);  // DB CONNECTED TWO
// })()



(function chai() {
    //  named IIFE
    console.log(`DB CONNECTED`);  // DB CONNECTED
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);  // DB CONNECTED TWO hitesh
})('hitesh')

