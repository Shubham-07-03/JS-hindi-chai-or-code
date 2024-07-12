const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key); // js cpp rb swift
    // console.log(myObject[key]); // javascript c++ ruby swift by apple
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
// print ->
// js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


const programming = ["js", "rb", "py", "java", "cpp", ]

for (const key in programming) {
    // console.log(key);    // 0 1 2 3 4
    // console.log(programming[key]); //  js rb py java cpp
}

// const map = new Map()
// map.set('IN', "India") 
// map.set('UK', "United kingdom") 
// map.set('Fr', "France") 
// map.set('USA', "United States of America") 
// map.set('IN', "India") 

// for (const key in map) {
//     console.log(key);
// }