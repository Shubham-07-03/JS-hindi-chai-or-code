// if

// const isUserloggedIn = true

// if (isUserloggedIn){
    
// }
// 2<=2; 3 != 2
// <, >, <=, >=, ==, !=, ===, !==



// const isUserloggedIn = true 

// if (2 == "2"){
//     console.log("executed"); //  executed
// }
  


// const isUserloggedIn = true 

// if (2 != 3){
//     console.log("executed"); //  executed
// }



// const temperature = 41

// if (temperature < 50 ) {
//     console.log("less than 50"); //  less than 50
// }
// console.log("temperature is greater than 50"); // temperature is greater than 50





// const temperature = 41

// if (temperature === 41 ){

//     console.log("less than 50");// less than 50

// } else {

// console.log("temperature is greater than 50");

// }
// console.log("Execute"); // Execute





// const temperature = 41
// if (temperature === 40 ){
//     console.log("less than 50");
// } else {
// console.log("temperature is greater than 50"); // temperature is greater than 50
// }
// console.log("Execute"); // Execute



// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`); // User power: fly
// }
// // console.log(`User power: ${power}`); //  power is not defined




// const score = 200
// if(score > 100) {
//     var power = "fly" // User power: fly ; that is why we do not use var
//     console.log(`User power: ${power}`); 
// }
// console.log(`User power: ${power}`); // User power: fly




// const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");
// es trh se code likhna shobha ni deta tumhe parth 


// const balance = 1000
// if (balance < 500){
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than < 900");
// } else {
//     console.log('less than 1200'); // less than 1200
// }



// const UserloggedIn = true
// const debitCard = true

// if (UserloggedIn && debitCard){
//     console.log("allow to buy course"); // allow to buy course
// }



// const UserloggedIn = true
// const debitCard = true

// if (UserloggedIn && debitCard && 2==2){
//     console.log("allow to buy course"); // allow to buy course
// }



// const UserloggedIn = true
// const debitCard = true

// if (UserloggedIn && debitCard && 2==3){
//     console.log("allow to buy course"); //nothing to print 
// }



const UserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
 
if (UserloggedIn && debitCard && 2==3){
    console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in"); // user logged in
}