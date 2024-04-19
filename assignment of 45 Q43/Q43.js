"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
//  array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate
//   array. Call show_magicians() with each array to show that you have one array of the original names and 
//   one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
//Ans 43
////define the function to show magician names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// function to make magocians great through .map() it modify Array
function make_great(magician) {
    return magician.map(name => `The great ${name}`);
}
//define an array of magician names
let magician_names = ["Harry potter", "Andresson", "Harry houder"];
//making a copy of original Array through .slice() function
let copy_magician_names = magician_names.slice();
//modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names);
//show both arrays original and copied
//original
console.log("Original Array\n");
show_magicians(magician_names);
//copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
