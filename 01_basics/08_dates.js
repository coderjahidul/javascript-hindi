// Dates
let myDate = new Date(); // Date object or instens
console.log(typeof myDate); // Return the Value Typeof Object
console.log(myDate); // Return the date object Format Like 2024-08-01T18:02:48.166Z
console.log(myDate.toString()); // Return the date Format Like Fri Aug 02 2024 00:02:48 GMT+0600 (Bangladesh Standard Time)
console.log(myDate.toDateString()); // Return the date Format Like Fri Aug 02 2024
console.log(myDate.toISOString()); // Return the date Format Like 2024-08-01T18:08:27.602Z
console.log(myDate.toJSON()); // Return the date Format Like 2024-08-01T18:09:23.650Z
console.log(myDate.toLocaleDateString()); // Return the date Format Like 8/2/2024
console.log(myDate.toLocaleString()); // Return the date Format Like 8/2/2024, 12:10:55 AM
console.log(myDate.toLocaleTimeString()); // Return the Time Format Like 12:12:09 AM
console.log(myDate.toTimeString()); // Return the Time Format Like 00:13:20 GMT+0600 (Bangladesh Standard Time)
console.log(myDate.toUTCString()); // Return the Date Format Like Thu, 01 Aug 2024 18:14:23 GMT

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); // Return the Date Format Like Mon Jan 23 2023

let myCreatedDateTime = new Date(2023, 0, 13, 5, 29);
console.log(myCreatedDateTime.toLocaleString()); // Return the Date Time Format Like 1/13/2023, 5:29:00 AM

let myCreatedDateOne = new Date("2023-01-14");
console.log(myCreatedDateOne.toLocaleString()); // Return the Date Time Format Like 1/14/2023, 6:00:00 AM
