var userNames = ["Hamza", "Aanish", "Admin", "User", "Hassnain"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is empty. We need to find some users!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
