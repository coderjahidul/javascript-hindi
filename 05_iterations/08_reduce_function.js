const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce function
const NewNumber = myNumber.reduce((accval, currval) => {
    console.log("accval: ", accval, "currval: ", currval);
    return accval + currval;
}, 0);
console.log(NewNumber);

// reduce function 
const NewNumber2 = myNumber.reduce((accval, currval) => {
    console.log("accval: ", accval, "currval: ", currval);
    return accval + currval;
}, 100);
console.log(NewNumber2);

// reduce function
const NewNumber3 = myNumber.reduce(function (accval, currval){
    console.log("accval: ", accval, "currval: ", currval);
    return accval + currval;
}, 0);
console.log(NewNumber3);

// reduce function in arrow function
const NewNumber4 = myNumber.reduce((accval, currval) => accval + currval, 0);
console.log(NewNumber4);

// product object
const shoppingCard = [
    {
        id: 1,
        name: "iPhone",
        price: 10000
    },
    {
        id: 2,
        name: "iPad",
        price: 5000
    },
    {
        id: 3,
        name: "MacBook",
        price: 100000
    },
    {
        id: 4,
        name: "AirPods",
        price: 2000
    }
];

// reduce function
const PriceToPay = shoppingCard.reduce((accval, currval) => accval + currval.price, 0);
console.log(PriceToPay);

// product object
const shoppingCard2 = [
    {
        id: 1,
        product_name: "T-Shirt",
        price: 200
    },
    {
        id: 2,
        product_name: "Pant",
        price: 550
    },
    {
        id: 3,
        product_name: "Shoes",
        price: 600
    },
    {
        id: 4,
        product_name: "Watch",
        price: 500
    }
];

// reduce function
const PriceToPay2 = shoppingCard2.reduce((accval, currval) => accval + currval.price, 0);
console.log(PriceToPay2);


