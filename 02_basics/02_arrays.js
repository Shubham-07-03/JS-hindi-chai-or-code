const marvel_heroes = ["Ironman", "Thor", "Spiderman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// marvel_heroes.push(dc_heroes); // [ 'Ironman', 'Thor', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]); // Batman

// const allHeroes = marvel_heroes.concat(dc_heroes) // [ 'Ironman', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash' ]
// console.log(allHeroes);


// const all_new_Heroes = [...marvel_heroes, ...dc_heroes] // [ 'Ironman', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash' ]
// console.log(all_new_Heroes);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// console.log(real_another_array);

// console.log(Array.isArray("Shubham"))// false
console.log(Array.from("Shubham")) //['S', 'h', 'u', 'b', 'h', 'a', 'm']
    
console.log(Array.from({name: "Shubham"})) // []  //interesting 




let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
