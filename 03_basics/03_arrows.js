const user = {
    username: "shubham",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage() // shubham , welcome to website
// user.username = "sam"
// user.welcomeMessage() // sam , welcome to website

// console.log(this); // {}


/*
print=> 

shubham , welcome to website
{
  username: 'shubham',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam , welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/  


/*

function chai(){
    let username = "shubham"
    console.log(this);
}
chai()

print => 
    <ref *1> Object [global] {
        global: [Circular *1],
        clearImmediate: [Function: clearImmediate],
        setImmediate: [Function: setImmediate] {
          [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        clearInterval: [Function: clearInterval],
        clearTimeout: [Function: clearTimeout],
        setInterval: [Function: setInterval],
        setTimeout: [Function: setTimeout] {
          [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        queueMicrotask: [Function: queueMicrotask],
        structuredClone: [Function: structuredClone],
        atob: [Getter/Setter],
        btoa: [Getter/Setter],
        performance: [Getter/Setter],
        fetch: [Function: value],
        navigator: [Getter],
        crypto: [Getter]
      }
*/



// function chai(){
//     let username = "shubham"
//     console.log(this.username); // undefined
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }
// chai()


// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }
// chai()


// const chai = () => {
//     let username = "hitesh"
//     console.log(this); // {}
// }
// chai() 


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4)) // 7 


// const addTwo = (num1, num2) =>  (num1 + num2)
// console.log(addTwo(3, 4)) // 7 


// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3, 4)) // 7 

// const addTwo = (num1, num2) =>  ({username: "shubham"})
// console.log(addTwo(3, 4)) //  { username: 'shubham' }




// const myArray = [2, 3, 4, 5, 6, 7]

// myArray.forEach()