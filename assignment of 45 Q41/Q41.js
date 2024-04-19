"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
//define a function to print each magician name in an array
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
//define an array containing magicians name
let Magician_names = ["Harry potter", "jai sharma", "Harry houder"];
//call the functioin to print each magician name
show_magicians(Magician_names);
