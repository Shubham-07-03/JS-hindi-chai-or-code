// Object Literals

// const user = {
//     username: "Shubham",
//     loginCount: 8,
//     signedIn: true
// }

// console.log(user.username);



const user = {
    username: "Shubham",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database"); // Got user details from database
        // console.log(`username: ${this.username}`); // username: Shubham
        // console.log(this);

    }
}    
// console.log(user.username); // Shubham
// console.log(user.getUserDetails()); // undefined
// console.log(this); // {}




//  Constructor Function

// const promiseOne = new Promise()
// const data = new Data()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

// const userOne = User("Shubham", 12, true)// 'Shubham', 12, true
// const userTwo = User("ChaiAurCode", 11, false) // 'ChaiAurCode', 11, false
// console.log(userOne); 

const userOne = new User("Shubham", 12, true)// User { username: 'Shubham', loginCount: 12, isLoggedIn: true }
const userTwo = new User("ChaiAurCode", 11, false) //User { username: 'ChaiAurCode', loginCount: 11, isLoggedIn: false }
console.log(userOne); 
console.log(userTwo); 
// print =>
    /*
    User {
        username: 'Shubham',
        loginCount: 12,
        isLoggedIn: true,
        greeting: [Function (anonymous)]
      }
      User {
        username: 'ChaiAurCode',
        loginCount: 11,
        isLoggedIn: false,
        greeting: [Function (anonymous)]
      } */

console.log(userOne.constructor); // [Function: User]