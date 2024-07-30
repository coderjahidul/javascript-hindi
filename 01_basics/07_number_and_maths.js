const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString()); // Return the value [Number: 100]
console.log(typeof balance); // Return the typeof object
console.log(balance.toString().length); // Return object length 3
console.log(balance.toFixed(2));  // Return the value 100.00
console.log(balance.toFixed(1)); // Return the value 100.0
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // Return The value 123.9
console.log(otherNumber.toPrecision(3)); // Return the value 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString('bn-BD')); // Return value the ১০,০০,০০০
console.log(hundreds.toLocaleString('en-IN')); // Return value the 10,00,000
console.log(hundreds.toLocaleString()); // Return value the 1,000,000

