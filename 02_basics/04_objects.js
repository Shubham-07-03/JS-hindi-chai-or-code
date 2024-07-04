// const tinderUser = new Object() // {}; singleton obj

const tinderUser = {}    // {}; non-singleton obj

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "shubham@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shubham",
            lastname: "kumar",
        }
    }
}

// console.log(regularUser.fullname);// { userfullname: { firstname: 'shubham', lastname: 'kumar' } }
// console.log(regularUser.fullname.userfullname); // { firstname: 'shubham', lastname: 'kumar' }
// console.log(regularUser.fullname.userfullname.firstname); // shubham




const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj3 = {...obj1, ...obj2, ...obj4} // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj3);




const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

users[1].email

// console.log(tinderUser); // { id: '123abc', name: 'Samay', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser)); // [ '123abc', 'Samay', false ]

// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Samay' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLogged')); // false

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // 







const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor); // Hitesh

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}.
]