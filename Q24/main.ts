// define veriables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "mango", "Amrode"]; 


// test for equality an inequality with strings

console.log("\nIs aaple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

// test using lowercase function
console.log("\nIs APPLE is  equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");

// numerical tests
console.log("\nIs ten is equal to twenty?");
console.log(ten == 20);

// not equal to
console.log("\nIs ten is not equal to 20?");
console.log(ten != twenty);

// greater then
console.log("\nIs ten is greater than 0");
console.log(10 > 0);

//less than
console.log("\nIs twenty is less than 10?");
console.log(20 < 10);

// greater than or equal to 
console.log("\nIs ten is greater then or equal to 5?");
console.log(10 >= 5);

// less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(20 <= 10);

// Tests using "and" & "or" operaters
// using &&
console.log("\nTwenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && 20 > 10);

console.log("\nTwenty is not equal to 10 and twenty is greater than 30?");
console.log(twenty != 10 && 20 > 30);

// using || (or)
console.log("\n20 is greater than 50 or 20 is equal to 20?");
console.log(20 > 50 || 20 == 20)

console.log("\n20 is greater than 50 or 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20)

// Tests weather and item in include in array
console.log("\nIs apple include in my fruits array?");
console.log(fruits.includes("apple"));

console.log("\nIs Bannana is not include in my fruits array");
console.log(fruits.includes("Bannana"));
