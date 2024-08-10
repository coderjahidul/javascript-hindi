// singleton
// Object.create

//Object Literals

// const mySym = Symbol("key1");
// const jsUser = {
//     name: "jahidul",
//     "full name": "Jahidul Islam Sabuz",
//     [mySym]: "mykey1",
//     age: 26,
//     location: "Uttora, Dhaka",
//     email: "jahidul@imjol.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Sunday", "Friday"]
// }

// console.log(jsUser.email); // Return the value like jahidul@imjol.com
// console.log(jsUser["email"]); // Return the value like jahidul@imjol.com
// console.log(jsUser['full name']); // Return the value like Jahidul Islam Sabuz
// console.log(jsUser[mySym]);
// jsUser.email = "jahidul@chatgpt.com"; // Change Object value
// Object.freeze(jsUser); // Freeze Object value. Use Freeze to not change Object value
// jsUser.email = "jahidul@microsoft.com"; 
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello js user");
// }

// console.log(jsUser.greeting());

// jsUser.greetingTwo = function(){
//     console.log(`Hello js User, ${this["full name"]}`);
// }
// console.log(jsUser.greetingTwo());

// Real life Object
// const car = {
//     type: "Fiat",
//     model: "500",
//     color: "white",
// }

// console.log(car.model);

// Create JavaScript Object. Spaces and line breaks are not important. An object initializer can span multiple lines
// const user = {
//     firstName: "Jahidul Islam",
//     lastName: "Sabuz",
//     age: 26,
//     location: "Uttora, Dhaka",
//     email: "jahidul@imjol.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Sunday", "Friday"],
// }
// console.log(user["location"]);

// Create JavaScript Object This example creates an empty JavaScript object, and then adds properties
// const user2 = new Object();

// Add properties
// user2.fristName = "Jahidul Islam";
// user2.lastName = "Sabuz";
// user2.age = 26;
// user2.location = "Uttora, Dhaka";
// user2.email = "jahidul@imjol.com";
// user2.isLoggedIn = false;
// user2.lastLoginDays = ["Monday", "Sunday", "Friday"];
// user2.fullName = function(){
//     return this.fristName + " " + this.lastName;
// }

// Object.freeze(user2);
// console.log(user2.email);
// user2.email = "imJol@example.com";
// console.log(user2["fullName"]());




// Create JavaScript Object
// const person = {
//     firstName: "Jahidul Islam",
//     lastName: "Sabuz",
//     age: 26,
//     location: "Uttora, Dhaka",
//     email: "jahidul@imjol.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Sunday", "Friday"],
//     fullName: function(){
//         return this.fristName + " " + this.lastName;
//     }
// }
// const x = person;
// x.age = 27;
// console.log(person);

const course = {
    coursename: "Javascript",
    price: 500,
    isPaid: true,
    courseInstructor: "Jahidul Islam"
}

// console.log(course.courseInstructor);
// console.log(course["courseInstructor"]);

// Object Destructuring
const {courseInstructor} = course; // Return the value Jahidul Islam
const {courseInstructor: instructor} = course; // Return the value Jahidul Islam
const {price} = course; // Return the value 500

console.log(instructor);
console.log(price);