// Singleton Object
// const tinderUser = new Object();

// Non Singleton Object
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "jahidul";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // Return the object all value in Object like { id: '123abc', name: 'jahidul', isLoggedIn: false }
console.log(Object.keys(tinderUser)); // Return the Object keys in array like [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // Return the Object value in array [ '123abc', 'jahidul', false ]
console.log(Object.entries(tinderUser)); // Return the Object value in Object [ [ 'id', '123abc' ], [ 'name', 'jahidul' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Return the value true

// Create complax object
const regularUser = {
    email: "jahidul@gmail.com",
    fullname: {
        userfullname: {
            firstname: "jahidul islam",
            lastname: "sabuz",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
//const allObject = Object.assign({}, obj1, obj2); // assign Object obj1 and obj2. Return the value like { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const allObject = {...obj1, ...obj2} // assign Object obj1 and obj2. Return the value like { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(allObject);

// Array Object 
const users = [
    {
        id: 1,
        email: "s1@gmail.com",
    },
    {
        id: 2,
        email: "s2@gmail.com",
    },
    {
        id: 3,
        email: "s3@gmail.com",
    },
    {
        id: 4,
        email: "s4@gmail.com",
    }
]

