// let myName = "Hitesh    "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shubham = function(){
    console.log(`shubham is present in all objects`);
}

Array.prototype.heyShubham = function(){
    console.log(`Shubham says hello`);
}

// heroPower.shubham()              // shubham is present in all objects
// myHeros.shubham()                // shubham is present in all objects
// myHeros.heyShubham()             // Shubham says hello
// heroPower.heyShubham()           // TypeError: heroPower.heyShubham is not a function



// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = " ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);  // ChaiAurCode
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"shubham".trueLength()
"iceTea".trueLength()
