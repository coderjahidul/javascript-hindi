// singleton
// Object.create

//Object Literals

const mySym = Symbol("key1");
const jsUser = {
    name: "jahidul",
    "full name": "Jahidul Islam Sabuz",
    [mySym]: "mykey1",
    age: 26,
    location: "Uttora, Dhaka",
    email: "jahidul@imjol.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday", "Friday"]
}

// console.log(jsUser.email); // Return the value like jahidul@imjol.com
// console.log(jsUser["email"]); // Return the value like jahidul@imjol.com
// console.log(jsUser['full name']); // Return the value like Jahidul Islam Sabuz
// console.log(jsUser[mySym]);
// jsUser.email = "jahidul@chatgpt.com"; // Change Object value
// Object.freeze(jsUser); // Freeze Object value. Use Freeze to not change Object value
// jsUser.email = "jahidul@microsoft.com"; 
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this["full name"]}`);
}
console.log(jsUser.greetingTwo());
