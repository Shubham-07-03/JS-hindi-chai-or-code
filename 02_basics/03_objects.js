 // singleton 

 // OBJECT LITERALS 

 const mySym = Symbol("key1")

const JsUser = {
    name: "Shubham",
    "full name": "Shubham Kumar",
    [mySym]: "myKey1",
    age: 18,
    location: "Jamalpur",
    email: "shubham@google.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(JsUser.email);    // shubham@google.com
// console.log(JsUser["email"]); // shubham@google.com
// console.log(JsUser["full name"]); // Shubham Kumar
// console.log(JsUser.mySym); // myKey1
// console.log(typeof JsUser.mySym); //  string

// console.log(JsUser[mySym]); // myKey1

JsUser.email = "shubham@chatgpt.com"
// console.log(JsUser);


// Object.freeze(JsUser) // after this all case going to be frezze

JsUser.email = "shubham@microsoft.com"
// console.log(JsUser);




JsUser.greeting = function(){
    console.log("Hello JS user"); // Hello JS user
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, $(this.name)`); // Hello JS user, $(this.name)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
// console.log(JsUser.greeting); // [Function (anonymous)]