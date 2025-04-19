// const user = {
//     username: "jahidul islam",
//     loginCount: 10,
//     signedIn: true,
//     userLocation: "Dhaka",
//     userCountry: "Bangladesh",

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         // console.log(this);
        
//     }
// }

// console.log(user.userLocation);
// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this;
}

const userOne = new User("jahidul islam", 10, true);
const userTwo = new User("Gift Fashions", 5, false);
console.log(userOne);
console.log(userTwo); 


