// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


//define variables
let alianColor = "green";
//version 1
//using if and else-if condition
if(alianColor === "green"){
    console.log("(version 1)if you shot down green alian you earned 5 points.");
}
else if(alianColor === "Yellow"){
  console.log(" if you shot down yellow alian you earned 10 points");
}
else if(alianColor === "Red"){
    console.log("if you shot down red alian you earned 15 points");
}

//version 2
let alianColor2 = "Yellow";
if(alianColor2 === "green"){
    console.log("if you shot down green alian you earned 5 points.");
}
else if(alianColor2 === "Yellow"){
  console.log("(version 2) if you shot down yellow alian you earned 10 points");
}
else if(alianColor2 === "Red"){
    console.log("if you shot down red alian you earned 15 points");
}
//version 3
let alianColor3 = "Red";
if(alianColor3 === "green"){
    console.log("if you shot down green alian you earned 5 points.");
}
else if(alianColor3 === "Yellow"){
  console.log("if you shot down yellow alian you earned 10 points");
}
else if(alianColor3 === "Red"){
    console.log("(version 3)if you shot down red alian you earned 15 points");
}