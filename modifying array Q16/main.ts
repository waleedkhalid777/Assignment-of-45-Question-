// create a guest list array
let guestList = ["Hamza", "talha", "nihal", "haris"];

// making verable for those  guest who can't come
let dontCome = guestList[3];

// Print the naame of guest who cant come
console.log(dontCome, "nahi Ahh skhtaa");

// add or remove values from Guest list Aray
guestList.splice(3, 1, "Hassnain");

// message print for bigger table
console.log("Good News ! we have found a bigger table for a Dinner");

// adding a new value at staarting index in array
guestList.unshift("Ali");

// adding a new value at ending index of array
guestList.push("Wasif");

// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);

// adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Wassaf");

//message print of updated list
console.log("Updated List of our Guests");

//sending a invitation message to our guests one by one with their Names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));