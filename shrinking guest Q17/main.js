// create a guest list array
var guestList = ["Hamza", "Talha", "Nihal", "Haris"];
// making variable for those guests who can't come
var dontCome = guestList[3];
// Print the name of guest who can't come
console.log(dontCome, "cannot come.");
// add or remove values from Guest list Array
guestList.splice(3, 1, "Hassnain");
// message print for bigger table
console.log("Good News! We have found a bigger table for dinner.");
// adding a new value at starting index in array
guestList.unshift("Ali");
// adding a new value at ending index of array
guestList.push("Wasif");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// adding a new guest to the middle index of array
guestList.splice(middleIndex, 0, "Wassaf");
// message print of updated list
console.log("Updated list of our guests:");
// sending an invitation message to our guests one by one with their Names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to have dinner with me?")); });
// inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive on time, so I can only invite two guests to dinner with me.");
// using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
// printing invitations to the last two guests on the list 
console.log("Invitations to the last 2 guests:");
guestList.forEach(function (lasttwo) { return console.log("Lucky ".concat(lasttwo, ", you are still invited.")); });
// removing the last two guests from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
