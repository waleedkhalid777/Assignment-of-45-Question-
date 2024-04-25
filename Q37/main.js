// Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirts"));
}
// calling a function with the by-defualt message
make_shirt();
// calling a function now with medium size and defualt message
make_shirt("medium");
// calling a function now with small size and defualt message
make_shirt("Small", "I Love Javascript");
