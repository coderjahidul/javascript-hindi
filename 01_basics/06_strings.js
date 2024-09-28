// const name = "jahidul islam";
// const repoCount = 50;
// console.log(name + " " + repoCount + " " + "Value"); // The is old way

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // The is new way

// const gameName = new String("Supperman");
// console.log(gameName[4]);

// const name = "jahidul islam";
// const repoCount = 70;
// console.log(name + " " + repoCount + " " + "Value"); // The is old way

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // The is new way

// const gameName = new String("Supperman");
// console.log(gameName[0]);

// Creating Strings
// const string1 = "A string primitive";
// const string2 = `Also a string primitive`;
// const string3 = `Yet another string primitive`;
// console.log(string1, string2, string3);

// const string4 = new String("A string object");
// console.log(string4);

// Character Access
// "jahidul".charAt(1);
// "jahidul".charCodeAt(1);
// "jahidul".indexOf("u");
// console.log("jahidul".charAt(0)); // gives value of j
// console.log("jahidul"[2]); // gives value of h
// console.log("jahidul".charCodeAt(1)); // gives value of 97
// console.log("jahidul".indexOf("u")); // gives value of 5

// Comparison Strings
// const a = "a";
// const b = "b";
// if(a < b){
//     console.log(`${a} is less than ${b}`);
// }else if(a > b){
//     console.log(`${a} is greater than ${b}`);
// }else {
//     console.log(`${a} and ${b} are equal`);
// }

// function areEqualCaseInsensitive(str1, str2){
//     return str1.toUpperCase() === str2.toUpperCase();
// }

// console.log(areEqualCaseInsensitive("Jahidul", "jahidul"));

// const areEqualInUpperCase = (str1, str2) => str1.toUpperCase() === str2.toUpperCase();
// const areEqualInLowerCase = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

// areEqualInUpperCase("ß", "ss");
// areEqualInLowerCase("i", "I");
// console.log(areEqualInUpperCase("ß", "ss"));
// console.log(areEqualInLowerCase("i", "I"));

// const areEqual = (str1, str2, locale = "en-US") => str1.localeCompare(str2, locale, {sensitivity: "accent"}) === 0;

// console.log(areEqual("ß", "ss", "de")); // false
// console.log(areEqual("ı", "I", "tr")); // true

// const strPrim = "foo"; // A literal is a string primitive
// console.log(typeof strPrim); // "string"

// const strPrim2 = String(1);
// console.log(typeof strPrim2); // "string"

// const strPrim3 = String(true);
// console.log(typeof strPrim3); // "string"
// const strObj = new String(strPrim);
// console.log(typeof strObj); // "object"

// const s1 = "2 + 2"; // creates a string primitve
// console.log(eval(s1)); // returns the number 4

// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s2)); // returns the string "2 + 2"

// console.log(eval(s2.valueOf())); // returns the number 4


