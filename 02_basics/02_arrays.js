// Arrays
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heors = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heors); // Marge the array

// console.log(marvel_heros); // Return the value like [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]); // Return the value flash

// const allHeros = marvel_heros.concat(dc_heors); // Concat the marvel_heros and dc_heors

// console.log(allHeros); // Return the Value like [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heors]; // The spread syntax in JavaScript is used to expand an array into individual elements. In your code, you're combining two arrays (marvel_heros and dc_heors) into a new array all_new_heros. Make sure you have both arrays defined before using the spread operator.

console.log(all_new_heros); // Return the value like [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]];
const real_another_array = another_array.flat(Infinity); // The flat() method in JavaScript is used to create a new array with all sub-array elements concatenated into it recursively up to the specified depth. When you pass Infinity as the depth, it will flatten the array recursively to an infinite depth, effectively flattening all nested arrays completely.
console.log(real_another_array); // Return value like [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(Array.isArray("Jahidul")); // The Array.isArray() method in JavaScript is used to determine whether a given value is an array. It returns true if the value is an array and false otherwise. Return value is False

console.log(Array.from("Jahidul")); // The Array.from() method in JavaScript creates a new, shallow-copied array instance from an array-like or iterable object. When you pass a string to Array.from(), it creates an array of characters from the string. Return value like ['J', 'a', 'h', 'i', 'd', 'u', 'l']

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // The Array.of() method in JavaScript creates a new Array instance with a variable number of arguments, regardless of the number or type of the arguments. It's similar to the Array constructor but doesn't have the special cases for a single integer argument. Return The value like [ 100, 200, 300 ]