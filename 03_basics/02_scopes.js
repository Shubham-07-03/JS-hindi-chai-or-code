// var c = 300 // never print thats why we do not use var

// if (true) {
//     let a = 20    // a is not defined
//     const b = 20  // b is not defined
//     var c = 30    // 30
// }

// console.log(a); 
// console.log(b);
// console.log(c); 



let a = 300
if (true) {
    let a = 10 
    const b = 20
    // console.log("INNER:", a); // INNER: 10
}
// console.log(a); // 300


// for (let i = 0; i < array.length; i++) {
//     const element = array [i];
    
// }


// ++++++++++++++++   NESTED SCOPE  ++++++++++++++++ \\


function one(){
    const username = "shubham"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); // hitesh youtube
    }
    // console.log(website); // error
}

// console.log(username); // error



// +++++++++++++ interesting +++++++++++++

console.log(addone(5)); //6

function addone(num){
    return num + 1
}


addTwo(5) //  Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

