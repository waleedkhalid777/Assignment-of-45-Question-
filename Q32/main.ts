//array of current users
let currentUsers = ["Aanish", "nihal", "Talha", "Shoaib"];

// array of new users 
let newUsers = ["Hamza", "Aanish", "Hassnain", "Shoaib"];

// loop through new users to check for usernames availiblity
newUsers.forEach(newoneUser => {

    // Making a condition for username already exist and save in our condition veriable
    let ourCondition = currentUsers.some(currentoneUser => currentoneUser.toLocaleLowerCase() === newoneUser.toLocaleLowerCase())
    
    // print different using if else statements
    if(ourCondition){
        console.log(`Sorry ${newoneUser} is already taken`)
        }else{
            console.log(`This username ${newoneUser} is available`)
        }
})