//Making a Array of countries and print its original order
let countriesToVisit: string[] = ["Pakistan", "Newzealand", "UAE", "USA"];
console.log("original Order:", countriesToVisit);

// print the array in Alphabetical order without modifying the actual Array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// show that the array is still in its original order
console.log("still in Original Order:", countriesToVisit)

//print the array in reverse order without modifying the Actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// show that the array is still in its original order
console.log("still in Original Order:", countriesToVisit)

//we have the changed the original Array Order Now
console.log("Original Array Reverse:", countriesToVisit.reverse());

//print the array to show that its back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

// print the array to show that its order has been changed in alphabetical order now
console.log("sorted in Alphabetical order:", countriesToVisit.sort());

//we have the changed the original Array Order Now in reverse order again
console.log("Original Array Reverse:", countriesToVisit.reverse());
