// 31 .No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

//creating a Array with 5 value
let userNames = ["Affan", "Hunain", "Hasnain", "Admin", "Saarim",];
// remove all values from our Array now our Array is empty
userNames = []
// if statement for checking length of our Array is empty
if(userNames.length === 0){
    console.log("your Array is empty we need to find some users!");
}else{
    // if Array is not empty use forEach loop on Array
    userNames.forEach(oneUser =>{
        if(oneUser === "admin"){
            console.log(`Hello ${oneUser}, would you like to see status report?`);
        }else{
            console.log(`Hello ${oneUser}, thank you for loging in again`);
            
        }
    })
}