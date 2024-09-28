// Immediately invoked function expression


// Create named llfe function
(function grocoder(){
    // named IIFE
    console.log("DB CONNECTED");
})();


// Create named llfe function and use parameter
(function chai(name){
    // named IIFE
    console.log(`DB CONNECTED ONE ${name}`);
})("jahidul islam sabuz");

// Create named llfe function in arrow function
(function rimi(databaseName, databaseUser, databasePassword){
    // named IIFE
    console.log(`Database Connection Successfully. Database Name ${databaseName}, Database User: ${databaseUser}, Database Password: ${databasePassword}`);
})("grocoder", "jahidul", "123456");



// Create unnamed llfe function in arrow function
( () => {
    // unnamed IIFE
    console.log("DB CONNECTED TWO");
} )();


// Create unnamed llfe function in arrow function and use parameter
( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED THREE ${name}`);
} )("jahidul");


// Create unnamed llfe function in arrow function and use parameter
( (dbname, username, password) => {
    // unnamed IIFE
    console.log(`Database Connection Successfully. Database Name ${dbname}, Database User: ${username}, Database Password: ${password}`);
} )("grocoder_rimi", "admin", "123456");

