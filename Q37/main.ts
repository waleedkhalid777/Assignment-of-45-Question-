// Making a function
function make_shirt (size: String = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirts`);
}

// calling a function with the by-defualt message
make_shirt();

// calling a function now with medium size and defualt message
make_shirt("medium");

// calling a function now with small size and defualt message
make_shirt("Small", "I Love Javascript");