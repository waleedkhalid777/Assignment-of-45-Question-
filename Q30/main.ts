// creating a array
let userNames = ["Aanish", "Hamza", "User", "Admin", "Muneeb"];

// using foreach  loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
         console.log(`Hello ${oneUser}, would like to see a status report?`);
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
})