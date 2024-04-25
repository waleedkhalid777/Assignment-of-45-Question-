function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}


//
function make_greet(magician: string[]){
    return magician.map(name => `The Great ${name}`);
}



// define an array of magicians names
let magician_names = ["Herry Poter", "Aanish", "Hassnain"];


// making a copy of original array through slice() function

let copy_magician_names = magician_names.slice();

//modify copied array to include "The Great " with their names
let copy_great_magicians = make_greet(copy_magician_names);

// show both array original and cpied

//original
console.log("Original Array\n");
show_magicians(magician_names);

//copy
console.log("\ncopied Array\n");
show_magicians(copy_great_magicians);