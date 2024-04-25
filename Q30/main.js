// creating a array
var userNames = ["Aanish", "Hamza", "User", "Admin", "Muneeb"];
// using foreach  loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Hamza") {
        console.log("Hello ".concat(oneUser, ", would like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
