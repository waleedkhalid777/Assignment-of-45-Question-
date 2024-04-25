function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//
function make_greet(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicians names
var magician_names = ["Herry Poter", "Aanish", "Hassnain"];
// making a copy of original array through slice() function
var copy_magician_names = magician_names.slice();
//modify copied array to include "The Great " with their names
var copy_great_magicians = make_greet(copy_magician_names);
// show both array original and cpied
//original
console.log("Original Array\n");
show_magicians(magician_names);
//copy
console.log("\ncopied Array\n");
show_magicians(copy_great_magicians);
