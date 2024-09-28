// array length method
let myarray = ["jahidul", "salma", "rimi"];
console.log(myarray.length);

// for loop function
// for(let i=0; i<myarray.length; i++){
//     console.log(myarray[i]);
// }

// break and continue
for(let i=1; i<=20; i++){
    
    if(i==5){
        console.log("Ditacted 5");
        break;
    }
    console.log(`The Value is a ${i}`);
}

// continue
for(let i=1; i<=20; i++){
    
    if(i==5){
        console.log("Ditacted 5");
        continue;
    }
    console.log(`The Value is a ${i}`);
}