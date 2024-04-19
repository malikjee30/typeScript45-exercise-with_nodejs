// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. 
//  Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
//Define variables
let orange = "orange";
let uppercaseOrange = "ORANGE";
let ten = 10;
let twenty = 20;
let vegetables = ["carrot", "ladyfinger", "tomato"];

//test for equality and inequality with string
console.log("Is orange is equal to orange?" );
console.log(orange == orange);
console.log("\nIs orange is not equal to orange?");
console.log(orange != orange);

//test using lowercase function
console.log("\nIs orange is equal to orange after converting to lowercase?");
console.log(uppercaseOrange.toLowerCase() == "orange");

console.log("\nIs orange is not equal to orange after converting to lowercase?");
console.log(uppercaseOrange.toLowerCase() != "orange");

//numerical tests
//equal to
console.log("\nIs ten is equal to 20?");
console.log(ten == twenty);

//is not equal to
console.log("\nIs twenty not equal to ten?");
console.log(20 != ten);

//greater than
console.log("\nIs ten greater than zero?");
console.log(ten > 0);

//smaller than
console.log("\nIs 10 less than five?");
console.log(ten < 5);

//greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(10 >= 5);

//less than or equal to
console.log("\nIs twenty less than or equal to 10?");
console.log(20 <= ten);

//tests using "and" and "or" operators
//using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);

//using || (or)
console.log("\ntwenty is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\ntwenty is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// test whether an item is include in array
console.log("\nIs ladyfinger include in my vegetables array");
console.log(vegetables.includes("ladyfinger"));

console.log("\nIs ladyfinger not include in my vegetables array");
console.log(!vegetables.includes("ladyfinger"));
















