// PROMISE ONE

const promiseOne = new Promise(function(resolve, reject){
    //  DB an async task
    //  DB calls, cryptography, network 
    setTimeout(function (){
        console.log('Async Task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})


// PROMISE Two

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)

}).then(function() {
    console.log("Async 2 resolved");
})

// PROMISE Three

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function (user){
    console.log(user);
})


// PROMISE Four

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)  
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);   
})
.finally(() => console.log("The promise is either resolved or rejected"))



//  Promise Five

const promiseFive = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript" , password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getallusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data);        
//     } catch (error) {
//         console.log("E", error);        
//     }
// }

// getallusers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);    
})
.catch((error) => console.log(error))
