function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//
function make_greet(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicians names
var magician_name = ["Herry Poter", "Aanish", "Hassnain"];
var great_magicians = make_greet(magician_name);
show_magicians(great_magicians);
