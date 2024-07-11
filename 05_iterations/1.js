// // for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }
// print = 0 1 2 3 4 5 6 7 8 9 


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");        
//     }
//     console.log(element);
    
// }
// print = 0 1 2 3 4 5 is best number 5 6 7 8 9 10



for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);  //  Outer loop value: 0 ...+ Outer loop value: 10
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`); 
        // console.log(i + '*' + j + ' = ' + i*j );
    }   
}


let myArray = ["Spiderman", "Tonystark", "Ironman"]
// console.log(myArray.length); // 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


  
// Break and Continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`); // Value of i is 1 ..., Value of i is 4 , Detected 5
//         break
//     }

//     console.log(`Value of i is ${i}`); // Value of i is 1 ....+, Value of i is 20
    
// }





for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`); // Value of i is 1 ..., Value of i is 4 , Detected 5, Value of i is 6,...+, Value of i is 20
        continue
    }

    console.log(`Value of i is ${i}`); // Value of i is 1 ....+, Value of i is 20
    
}
