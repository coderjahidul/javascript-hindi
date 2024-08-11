// Global scope
// let a = 10;
// const b = 20;
// var c = 30;

// if(true){
//     let a = 100;
//     const b = 200;
//     let c = 300;
// }

// console.log(a);
// console.log(b);
// console.log(c);

// let a = 10;

// if(true){
//     let a = 100;
//     console.log(a);
// }

// console.log(a);


// Local scope (inside the function) this will not affect global scope. child function can access parent function variables. but parent function can not access child function variables
// function one(){
//     const username = "jahidul islam";

//     function two(){
//         const website = "grocoder.com";
//         console.log(`username is ${username} and website name is ${website}`);
//     }

//     two();

// }

// one();


// Block scope (this will not affect global scope). child function can access parent function variables. but parent function can not access child function variables
// if(true){
//     const username = "jahidul islam";
//     if(username === "jahidul islam"){
//         const website = "grocoder.com";
//         console.log(`username is ${username} and website name is ${website}`);
//     }
//     console.log(`username is ${username}`);
// }

/********************** Interasting **********************/

// addone function can before diclearation of function and addone function can after diclearation of function
console.log(addone(5));
function addone(num){
    return num + 1;
}


// addtwo function can be before diclearation of function and addtwo function can not after diclearation of function
const addtwo = function(num){
    return num + 2;
}

console.log(addtwo(5));


