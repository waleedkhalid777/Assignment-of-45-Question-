//array of current users
var currentUsers = ["Aanish", "nihal", "Talha", "Shoaib"];
// array of new users 
var newUsers = ["Hamza", "Aanish", "Hassnain", "Shoaib"];
// loop through new users to check for usernames availiblity
newUsers.forEach(function (newoneUser) {
    // Making a condition for username already exist and save in our condition veriable
    var ourCondition = currentUsers.some(function (currentoneUser) { return currentoneUser.toLocaleLowerCase() === newoneUser.toLocaleLowerCase(); });
    // print different using if else statements
    if (ourCondition) {
        console.log("Sorry ".concat(newoneUser, " is already taken"));
    }
    else {
        console.log("This username ".concat(newoneUser, " is available"));
    }
});
