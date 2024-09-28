// Array
// const myArr = [0,1,2,3,4,5];
// console.log(myArr[4]);
// const myHeors = ["shaktiman", "naagraj", "jahidul"];
// console.log(myHeors[2]);

// const myArray2 = new Array(1,2,3,4,5,6,7,8,9);
// console.log(myArray2);

// Array Methods
const myArray = [0,1,2,3,4,5]; // This is my array
// console.log(myArray); // Return the value [0,1,2,3,4,5]

// myArray.push(6); // add a new value in my Array end 6
// console.log(myArray); // Return the value [0,1,2,3,4,5,6]

// myArray.push(7); // add a new value in my Array end 7
// console.log(myArray); // Return the value [0, 1, 2, 3, 4, 5, 6, 7]

// myArray.pop(); // Remove last value in my array
// console.log(myArray); // Return the value [0, 1, 2, 3, 4, 5, 6]

// myArray.unshift(9); // add a new value in my array stating 
// console.log(myArray); // Return the value [9, 0, 1, 2, 3, 4, 5, 6]

// myArray.shift(); // Remove First value in my array 
// console.log(myArray); // Return the value [0, 1, 2, 3, 4, 5, 6]

// const myArray1 = myArray.includes(9); // find the specific value in array 9
// console.log(myArray1); // Return the value false 
// console.log(myArray.indexOf(3)); // Return the value 3
// const myArray2 = [5,7,8,9,1,5,6,2];
// console.log(myArray2.indexOf(2)); // Return the value 7

// const newArray = myArray.join(); // Change type object to String and Return value 0,1,2,3,4,5
// console.log(myArray);
// console.log(newArray);

// Slice And Splice
console.log("A ", myArray);

const myn1 = myArray.slice(1, 3);
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3);
console.log("C ", myArray);
console.log(myn2);







