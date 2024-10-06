const myObject = {
    name: "jahidul islam",
    email: "sobuz@gmail",
    password: "123456",
    address: "laksham",
    city: "laksham",
    state: "dhaka",
    country: "Bangladesh",
    zip: 123456,
    phone: 1234567890,
    age: 26,
}

// for in loop
for( const key in myObject){
    console.log(`${key}: ${myObject[key]}`);
}