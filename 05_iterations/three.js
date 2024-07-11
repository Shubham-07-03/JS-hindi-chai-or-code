// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num); // 1 2 3 4 5
}


const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`); // Each char is H, e, l, l, o, Each char is, W, o, r, l, d
}



//  +++++++++ MAP +++++++++

// newFunction()

// function newFunction() {
//     const map = new Map()
//     map.set('IN', "India")
//     map.set('USA', "United States of America")
//     map.set('FR', "France")
//     map.set('IN', "India") // MAPS unique values ke liye jani jati hai & jis order m humne rkha hai usi order m rehti hai 

//     console.log(map)
// }
// print =>
// Map(3) 
// {
// 'IN' => 'India',
// 'USA' => 'United States of America',
// 'FR' => 'France'
// }



/*

 newFunction()

 function newFunction() {
     const map = new Map()
     map.set('IN', "India")
     map.set('USA', "United States of America")
     map.set('FR', "France")
     map.set('IN', "India") 


     for (const key of map) {
        console.log(key);
     }
 }
 //  print = 
 //  [ 'IN', 'India' ]
 //  [ 'USA', 'United States of America' ]
 //  [ 'FR', 'France' ]
*/

newFunction()

function newFunction() {
    const map = new Map()
    map.set('IN', "India")
    map.set('USA', "United States of America")
    map.set('FR', "France")
    map.set('IN', "India") 


    for (const [key, value] of map) {
    //    console.log(key, '=>', value);
    }
}
//  print = 
    // IN => India
    // USA => United States of America
    // FR => France

const myObject = {
    game1: 'NFS'
}
for (const [key, value] of myObject) {
    console.log(key, '=>', value);
}
// TypeError: myObject is not iterable