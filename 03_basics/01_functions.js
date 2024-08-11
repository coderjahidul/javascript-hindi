// javascript function
// function myfunction(){
//     console.log("Hello World");
//     console.log("Hello World");
//     console.log("Hello World");
//     console.log("Hello World");
// }
// myfunction();

// function addTwoNumbers(number1, number2){
//     return number1 + number2;
// }

// $restult = addTwoNumbers(10, 20);
// console.log($restult); // Function Execution and store value in variable

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(10, 20); // Function Execution but not store in variable
// console.log(result);

// function loginUserMessage(username = "Jahidul"){
//     return `${username} just logged in`;
// }
// console.log(loginUserMessage("Emon"));


// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(10, 20, 30, 40, 50)); // This will print [10,20,30,40,50]

// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(10, 20, 30, 40, 50));

// const user = {
//     name: "jahidul islam",
//     price: 500
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.name} and price is ${anyobject} and price is ${anyobject.price}`);
// }

// // handleObject(user);
// handleObject({
//     name: "jahidul islam",
//     price: 500
// });

// Array function
const myNewArray = [10, 20, 30, 40, 50];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
