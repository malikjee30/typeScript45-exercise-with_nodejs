"use strict";
// 32. Checking Usernames: Do the following to 
// create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users.
//  Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used.
//  If it has, print a message that the person will need to enter a new username.
//   If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. 
// If 'John' has been used, 'JOHN' should not be accepted.
Object.defineProperty(exports, "__esModule", { value: true });
// Array of current user  
let current_users = ["Hassan", "Fozia", "afiya", "Hasnain", "Hunain"];
// Array of new user
let new_users = ["Nasir", "Ayesha", "Afiya", "Faiqa", "Fozia"];
// loop through new_user to check for username availability
new_users.forEach(new_one_user => {
    //making a condition for user name already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    //print different message usin if else statement
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`this user name ${new_one_user} is available`);
    }
});
