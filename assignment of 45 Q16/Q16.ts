// 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//creating a guest list Array
let guestList = ["Fahad", "Tanzeel", "Mubashsir", "Sarim"];

//Making a variable for who those can't come
let dontCome = guestList[0];

//print the name of guest who can't come
console.log(dontCome, "guest who can't come at dinner");

//add or remove values from guest list Array
guestList.splice(0, 1, "Abdullah");

//massage print for bigger table
console.log("Good news ! we have found a bigger table for dinner");

//adding a new guest at starting index of Array
guestList.unshift("Haider");

// adding print a new guest at ending index of Array
guestList.push("Wheed");

//adding a new guest at middle index of Array
let middleindex: number = Math.floor(guestList.length / 2);

//adding a new guest to middle index of Array
guestList.splice(middleindex, 0, "Abid");

//print message of updated list
console.log("updated list of our guest");

//sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));
