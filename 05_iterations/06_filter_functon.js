const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // filter function
// const newNumber = myNumber.filter((item) => item > 5);
// console.log(newNumber);

// // filter function
// const newNumber2 = myNumber.filter((name) => name > 4);
// console.log(newNumber2);

// // filter function
// const newNumber3 = myNumber.filter((name) => {
//     return name > 2;
// });
// console.log(newNumber3);


// // filter function
// const newNumber4 = myNumber.filter((name) =>{
//     return name > 6;
// });
// console.log(newNumber4);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    { title: 'Book Ten', genre: 'Fiction', publish: 2012, edition: 2018 },
    { title: 'Book Eleven', genre: 'Non-Fiction', publish: 2008, edition: 2015 },
    { title: 'Book Twelve', genre: 'Fiction', publish: 2010, edition: 2019 },
    { title: 'Book Thirteen', genre: 'History', publish: 2004, edition: 2016 },
    { title: 'Book Fourteen', genre: 'Science', publish: 1995, edition: 2017 },
    { title: 'Book Fifteen', genre: 'Fiction', publish: 2005, edition: 2018 }
];


// filter function
const userBook = books.filter((books) => books.genre === 'Fiction');
console.log(userBook);

// filter function
const userBook2 = books.filter((books) => books.genre === 'History');
console.log(userBook2);

// filter function
const userBook3 = books.filter((books) => books.genre === "Non-Fiction");
console.log(userBook3);

// filter function
const userBook4 = books.filter((books) => books.genre === "Science");
console.log(userBook4);

// filter function publish date > 2000 
const userBook5 = books.filter((books) => books.publish > 2000);
console.log(userBook5);

// filter function publish date > 2000 && genre === "Fiction"
const userBook6 = books.filter((books) => {
    return books.publish <= 2000 && books.genre === "Fiction";
});
console.log(userBook6);


// filter function publish date > 2000 && genre === "Non-Fiction" && edition > 2000
const userBook7 = books.filter((books) => {
    return books.publish <= 2000 && books.genre === "Non-Fiction" && books.edition > 2000;
});
console.log(userBook7);