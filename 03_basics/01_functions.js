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

function loginUserMessage(username = "Jahidul"){
    return `${username} just logged in`;
}
console.log(loginUserMessage("Emon"));