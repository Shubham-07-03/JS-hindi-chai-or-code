
function sayMyName(){
    console.log("H"); // H
    console.log("I"); // I
    console.log("T"); // T
    console.log("E"); // E
    console.log("S"); // S
    console.log("H"); // H
} 
// sayMyName()


/*
function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}
// addTwoNumbers() // NaN
// addTwoNumbers(3, 4) // 7
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, "a") // 3a
// addTwoNumbers(3, null) // 3


const result = addTwoNumbers(3, 5)
console.log("Result: ", result);
// 8 ; output mil gya but result undefined aa ra abhi v 
// Result:  undefined
*/






// function addTwoNumbers(number1, number2){

//     return number1 + number2
   
// //    let result =  number1 + number2
// //    console.log("Shubham");
// //    return result
// //    console.log("Shubham"); // after return console print nahi hoga
// }

// const result = addTwoNumbers(3, 5)

// // console.log("Result:", result);




// function loginUserMassage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMassage("hitesh"));//hitesh just logged in
// console.log(loginUserMassage(""));//  just logged in
// console.log(loginUserMassage()); // undefined just logged in




// function loginUserMassage(username){
//     if(username === undefined){ 
//         console.log("Please enter a username"); // Please enter a username
        
//     }
//     return `${username} just logged in` // undefined just logged in
// }
// // console.log(loginUserMassage); // [Function: loginUserMassage]
// console.log(loginUserMassage()); 




// function loginUserMassage(username){
//     if(username === undefined){ 
//         console.log("Please enter a username");
//     }
//     return `${username} just logged in` 
// }    
// console.log(loginUserMassage()); 
// //Please enter a username
// //undefined



// function loginUserMassage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMassage());
// //Please enter a username
// //undefined



// function loginUserMassage(username = "sam"){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMassage());
// // sam just logged in



// function loginUserMassage(username = "sam"){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMassage("Shubham"));
// //Shubham sam just logged in





// function addTwoNumbers(number1, number2){
//     return number1 + number2
// }
// const result = addTwoNumbers(3, 5)
// function loginUserMassage(username = "sam"){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2)); // 2





// function addTwoNumbers(number1, number2){
//     return number1 + number2
// }
// const result = addTwoNumbers(3, 5)
// function loginUserMassage(username = "sam"){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500));// 200 





// function addTwoNumbers(number1, number2){
//     return number1 + number2
// }
// const result = addTwoNumbers(3, 5)
// function loginUserMassage(username = "sam"){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// function calculateCartPrice(...num1){ // ...num -> rest operator
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500)); // [ 200, 400, 500 ]





function addTwoNumbers(number1, number2){
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
function loginUserMassage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 700)); //[ 500, 700 ]; val1 = 200, val2 = 400


const user = {
    username: "Shubham",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)// username is Shubham and price is 199

handleObject({
    username: "sam",
    price: 299
})      // username is sam and price is 299

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3] // 300
}

// console.log(returnSecondValue(myNewArray)); // 300
console.log(returnSecondValue([200, 400, 100, 600])); // 600