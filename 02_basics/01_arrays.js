//  Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman" , "Naagraj"]

const myArr2 = new Array (1, 2, 3, 4)
// console.log(myArr[0]);
// console.log(myArr2[1]);


// Array methods

// myArr.push(10)  //   [0, 1, 2, 3, 4, 5, 6] 
// myArr.push(7) //    [0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop()  // last wale array ko remove kr de ra [0, 1, 2, 3, 4, 5, 6]
// myArr.unshift(9) //   [9, 0, 1, 2, 3, 4, 5] 
// myArr.shift() //   [ 1, 2, 3, 4, 5 ]
// console.log(myArr);

// console.log(myArr.includes(9)); //  false
// console.log(myArr.indexOf(19)); //  -1
// console.log(myArr.indexOf(11)); //  -1
// console.log(myArr.indexOf(3)); //  3




// const newArr = myArr.join()

// console.log(myArr); //    [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //   0,1,2,3,4,5
// console.log(typeof newArr);  //  string





// Slice, Splice

console.log("A", myArr); //  A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) //  [ 1, 2 ]
console.log(myn1);

console.log("B", myArr); //  B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log("C", myArr); // C [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ]




