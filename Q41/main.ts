// define a function to print each magician name from an array

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}


// define an array containing magicians name
let magician_names = ["Harray Poter", "Aanish", "Hassnain"]

//call the function to print each magician name
show_magicians(magician_names);