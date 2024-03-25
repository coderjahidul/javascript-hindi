// Conversion Operations
// diclare a String type variable
let score = "jahidul islam";

// Check variable type
console.log(typeof(score));
console.log(typeof score);

// Convert string type to number type
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// Convert number type to string type
let valueInString = String(valueInNumber);
console.log(typeof valueInString);
console.log(valueInNumber);

/* 
1. if diclared variable is let number = "12abc"; 
and Convert string type to number type or number type to string type then it will give NaN.

2. if diclared variable is let number = null; and Convert string type to number type or number type to string type then it will give 0.

3. if diclared variable is let number = undefined; and Convert string type  to number type or number type to string type then it will give NaN.

4. if diclared variable is let number = true; and Convert string type to number type or number type to string type then it will give 1. and false will give 0.

5. if diclared variable is let number = "abc"; and Convert string type to number type or number type to string type then it will give NaN.

6. if diclared variable is let nubmebe = 33; and Convart string type to number type or number type to string type then it will give 33.
*/ 

let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

/*
1. if diclared variable is let isLoggedIn = 0; and Convert boolean type then it will give false. and 1 will give true.

2. if diclared variable is let isLoggedIn = ""; and Convert boolean type then it will give false. and let isLoggedIn = "jahidul islam"; will give true.

3. if diclared variable is let isLoggedIn = null; and Convert boolean type then is will give false.
and undefined will give false.
*/

