// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see 
// that the list has actually been modified.

//Ans 42
//define the function to show magician names
function show_magicians(magicians: string[]){
     magicians.forEach(name => console.log(name));
}

// function to make magocians great through .map() it modify Array
function make_great(magician: string[]){
    return magician.map(name => `The great ${name}`);
}

//define an array of magician names
let magician_names = ["Harry potter", "Andresson", "Harry houder"];

// call make_great functions to modify magician names
let great_magicians = make_great(magician_names);

// call show_magicians that show modified list of magician
show_magicians(great_magicians)