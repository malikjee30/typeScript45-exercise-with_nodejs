// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

//inform that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");

//using while-loop to remove guests from the array until only two names remain  
while(guestList.length > 2){
let removedguest = guestList.pop();
console.log(`Sorry, ${removedguest} I cant invite you to dinner`);
}

//sending a invitations to the last two guests on the list
console.log("invitations to the last two guests");
guestList.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to dinner`));

//removing last two guest from the list
guestList.pop();
guestList.pop();

console.log("Empty list:", guestList);



