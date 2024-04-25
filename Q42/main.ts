function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}


//
function make_greet(magician: string[]){
    return magician.map(name => `The Great ${name}`);
}



// define an array of magicians names
let magician_name = ["Herry Poter", "Aanish", "Hassnain"];

let great_magicians = make_greet(magician_name);

show_magicians(great_magicians);