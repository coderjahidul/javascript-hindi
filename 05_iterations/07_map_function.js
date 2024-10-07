const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map function multiply by 2 
const NewNumber = myNumber.map((num) => num * 2);
console.log(NewNumber);

// map function add 10
const NewNumber2 = myNumber.map((num) => num + 10);
console.log(NewNumber2);

// map function multiply by 2 and add 10
const NewNumber3 = myNumber.map((num) => {
    return num * 2 + 10;
});
console.log(NewNumber3);

// map function multiply by 10, add 2, filter by >= 40
const NewNumber4 = myNumber.map((num) => num * 10).map((num) => num + 2).filter((num) => num >= 40);
console.log(NewNumber4);

