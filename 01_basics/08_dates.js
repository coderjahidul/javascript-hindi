// Dates
// let myDate = new Date(); // Date object or instens
// console.log(typeof myDate); // Return the Value Typeof Object
// console.log(myDate); // Return the date object Format Like 2024-08-01T18:02:48.166Z
// console.log(myDate.toString()); // Return the date Format Like Fri Aug 02 2024 00:02:48 GMT+0600 (Bangladesh Standard Time)
// console.log(myDate.toDateString()); // Return the date Format Like Fri Aug 02 2024
// console.log(myDate.toISOString()); // Return the date Format Like 2024-08-01T18:08:27.602Z
// console.log(myDate.toJSON()); // Return the date Format Like 2024-08-01T18:09:23.650Z
// console.log(myDate.toLocaleDateString()); // Return the date Format Like 8/2/2024
// console.log(myDate.toLocaleString()); // Return the date Format Like 8/2/2024, 12:10:55 AM
// console.log(myDate.toLocaleTimeString()); // Return the Time Format Like 12:12:09 AM
// console.log(myDate.toTimeString()); // Return the Time Format Like 00:13:20 GMT+0600 (Bangladesh Standard Time)
// console.log(myDate.toUTCString()); // Return the Date Format Like Thu, 01 Aug 2024 18:14:23 GMT

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString()); // Return the Date Format Like Mon Jan 23 2023

// let myCreatedDateTime = new Date(2023, 0, 13, 5, 29);
// console.log(myCreatedDateTime.toLocaleString()); // Return the Date Time Format Like 1/13/2023, 5:29:00 AM

// let myCreatedDateOne = new Date("2023-01-14");
// console.log(myCreatedDateOne.toLocaleString()); // Return the Date Time Format Like 1/14/2023, 6:00:00 AM
// let myCreatedDate = new Date("08-02-2024");
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp/1000));
let newDate = new Date();
console.log(newDate); // Return the date Format Like 2024-08-02T09:11:00.803Z
console.log(newDate.getDate()); // Return the Creant Month Day Like 2

console.log(newDate.getDay()); // The getDay() method in JavaScript returns the day of the week for the specified date according to local time. The return value is an integer corresponding to the day of the week, where: 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday

console.log(newDate.getFullYear()); // Return the Creant Year Like 2024

console.log(newDate.getHours()); // The getHours() method in JavaScript returns the hour for the specified date according to local time, and it is an integer between 0 and 23.

console.log(newDate.getMilliseconds()); // The getMilliseconds() method in JavaScript returns the milliseconds (from 0 to 999) for the specified date according to local time.

console.log(newDate.getMinutes()); // Return the Creant minutes Like 23

console.log(newDate.getMonth() + 1); // Return the Creant years Monthe Like 8

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
})); // Return the date Format Like Friday, August 2, 2024

console.log(newDate.getSeconds()); // Return the Creant Seconds Like 48


