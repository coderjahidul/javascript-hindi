// This will work in Object
// const user = {
//     username: "jahidul islam",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to our website`);
//         // console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username = "jahid";
// user.welcomeMessage();
// console.log(this);
// This will not work in function
// function chai(){
//     let username = "Emon";
//     console.log(this.username);
// }
// chai();

// This will not work in variable function
// const chai = function (){
//     let username = "jahidul";
//     console.log(this.username);
// }

// chai();

// Create arrow function
// const chai = () => {
//     let username = "jahidul";
//     console.log(this);
// }

// chai();

// Basic arrow function
// () => {}

// Create arrow function addTwo 
// const addTwo = (num1, num2) => {
//     return num1 + num2; // Carly braces use to write return
// }
// console.log(addTwo(10, 20)); // Return value 30

// const addThree = (num1, num2) => num1 + num2;
// console.log(addThree(50, 20)); // Return value 70

// const addThree = (num1, num2) => (num1 + num2) * 2; // Used prenthesis to not write return
// console.log(addThree(50, 20));

// Create arrow object
const addTwo = () => ({username: "jahidul islam"});
console.log(addTwo());



