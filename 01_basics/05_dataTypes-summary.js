// javaScript is a dynamic Language. It can change its data type.
// callbyvalue and callbyreference
// Primitive Data Types Summary 
// 01. string
// 02. number
// 03. boolean
// 04. null
// 05. undefined
// 06. symbol
// 07. bigint

// const score = 100; // number
// const scoreValue = 100.5; // number
// const isLoggedIn = false; // boolean
// const outsideTemp = null; // object
// let userEmail; // undefined
// const score = 120; // number
// console.log(typeof score);
// console.log(score);
// console.log("\n");

// const scoreValue = 120.5; // number
// console.log(typeof scoreValue);
// console.log(scoreValue);
// console.log("\n");

// const isLoggedIn = true; // boolean
// console.log(typeof isLoggedIn);
// console.log(isLoggedIn);
// console.log("\n");

// const outsideTemp = null // object
// console.log(typeof outsideTemp);
// console.log(outsideTemp);
// console.log("\n");

// let userEmail; // undefined
// console.log(typeof userEmail);
// console.log(userEmail);
// console.log("\n");

// dataType symbol is unique. This two symbol value is not equal. 
// const id = Symbol('123'); // symbol
// const anotherId = Symbol('123'); // symbol
// console.log(id === anotherId); // false

//dataType bigint
// const bitNumber = 2324154496545n; // bigint
// console.log(typeof bitNumber);






// Reference Data Types Summary (Non Primitive)
// 01. object
// 02. function
// 03. array

// dataType object
// let user = {
//     name: "jahidul islam",
//     age: 26,
//     address: "laksham",
//     isMarried: false,
//     isaCometead: true,
//     girlfrindsName: ["Rimi", "Choity", "Salma", "Sowon"],
//     exGrilfrindsName: "Priya",
// }

// let user = {
//     name: "jahidul islam",
//     age: 26,
//     address: "Laksham",
//     isMarried: false,
//     isaCometead: true,
//     girlfrindsName: ['Rimi', 'Choity', 'Salma', 'Sowon'],
//     exGrilfrindsName: ['Priya', 'Min', 'Bonna', 'Bristy', "Akhi", 'Nishat', 'Suborna', 'Munni'],
// }
// console.log(typeof user);
// console.log(user);

// dataType function
// let myfunction = function(){
//     console.log("jahidul islam");
// }

// myfunction();

// function myfunction(){
//     console.log("jahidul islam");
// }
// myfunction();

// function myfunction(a, b) {
//     console.log(a * b);
// }
// myfunction(2, 3);

// dataType array
// const heros = ['marvel', 'ironman', 'superman']; // array

// const heros = ['marvel', 'ironman', 'superman']; // array
// console.log(typeof heros);

// console.log(typeof user);
// console.log(typeof myfunction);
// console.log(typeof heros);






// css is not a language. It is a style sheet.
// html is not a language. It is a markup language.
// JavaScript is a language. it is a programming language.
// jQuery is a library. it is a javascript library.
// php is a language. it is a server side programming language.
// mysql is a database. it is a relational database.
// laravel is a framework. it is a PHP framework.
// angular is a framework. it is a javascript framework.
// react is a framework. it is a javascript framework.
// vue is a framework. it is a javascript framework.
// node is a framework. It is a javascript framework.
// python is a language. It is a server side programming language.
// c++ is a language. It is a server side programming language.
// c# is a language. It is a server side programming language.
// java is a language. It is a server side programming language.
// swift is a language. It is a server side programming language.
// ruby is a language. It is a server side programming language.
// go is a language. It is a server side programming language.
// kotlin is a language. It is a server side programming language.
// scala is a language. It is a server side programming language.
// typescript is a language. It is a server side programming language.
// rust is a language. It is a server side programming language.
// deno is a language. It is a server side programming language.


// +++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive), Heap (Non Primitive)

// let myYoutubename = "jahidulislam";
// let anothername = myYoutubename;
// anothername = "grocoder";
// console.log(anothername);
// console.log(myYoutubename);

// let userOne = {
//     email: "user@name.com",
//     upi: "jahidul@gmail",
//     password: "123456",
//     address: "laksham",
//     city: "laksham",
// }

// let userTwo = userOne;
// userTwo.email = "sobuz@gmail.com"

// console.log(userOne);
// console.log(userTwo);

// let myFacebookname = "jahidulislam";
// let anothername = myFacebookname;
// anothername = "grocoder";
// console.log(anothername);
// console.log(myFacebookname);

// let userOne = {
//     email: "user@name.com",
//     upi: "jahidul@gmail",
//     password: "123456",
//     address: "laksham",
//     city: "laksham",
// }
// let userTwo = userOne;
// userTwo.email = "sobuz@gmail.com";
// console.log(userOne);
// console.log(userTwo);