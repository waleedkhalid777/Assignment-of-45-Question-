function makeSandwich(...items: string[]){
    console.log("Making a sandwich with the following items: \n");
 items.forEach(singleItem => console.log(singleItem));
 console.log("\nNow Enjoy Sandwich");
}

// call the function 3 items with different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Onion", "Tomato", "Cheese", "Lettuce", "Egg", "Chicken");