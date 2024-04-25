"use strict";
let guestList = ["Hamza", "Nihal", "Ali", "Haris"];
let dontCome = guestList[3];
console.log(dontCome, "Nai Ahh sakhta");
guestList.splice(3, 1, "Hassnain");
guestList.forEach(guest => console.log(`Salam ${guest}, would you like to Dinner with me?`));
