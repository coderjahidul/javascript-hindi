const greetings = "hello jahidul islam";

for (const greeting of greetings) {
    // console.log(greeting);
}

// Maps
const Maps = new Map();
Maps.set("id", 1);
Maps.set("name", "jahidul");
Maps.set("email", "jahidul@imjol");
Maps.set("location", "Uttora, Dhaka");

// console.log(Maps);

// for of loop
for (const [key, value] of Maps){
    console.log(key, ": ", value);
}