// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5
// console.log(Math.PI);  // 3.141592653589793

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

/* print
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}                            */

const chai = {
    name: 'Adrak wali chai',
    price: 25,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bni");
    }
}
// console.log(chai); // { name: 'Adrak wali chai', price: 25, isAvailable: true }
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {

        console.log(`${key} : ${value}`);
    }
    
}
