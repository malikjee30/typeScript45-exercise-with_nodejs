"use strict";
// 44. Sandwiches: Write a  function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered. Call the function three times,
//   using a different number of arguments each time.
//Ans 44.
//Define a function with a rest parameter that accept items arguments representing our sandwices
function makeSandwich(...items) {
    console.log("\nprepering the sandwich with following items:");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich");
}
//call the function 3 times with 3 diferent numbers of arguments
makeSandwich("catchup", "mayonise", "chicken", "cheese");
makeSandwich("egg", "butter");
makeSandwich("catchup", "mayonise", "chicken", "cheese", "egg", "butter", "chicken spread", "oliv");
