// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.



//making a Array of countries and print its original order
let countriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina", "England"];
console.log("Original order:", countriesToVisit);

//print the Array in Alphabetical order without modifying the actual Array list
console.log("Alphabetical order:",[...countriesToVisit].sort());

//show that the Array is still in its original order
console.log("Still in original order:", countriesToVisit);

//print the array in reversed order without modifying the actual array list
console.log("Reverse order:", [...countriesToVisit].reverse());

// show that the array is still in its original order
console.log("Still in original order", countriesToVisit);

// we have changed the original Array order now
console.log("Original Array Reversed:", countriesToVisit.reverse());

//print the Array to show that it's back to its original order
console.log("Back to original order:", countriesToVisit.reverse());

//print the Array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());

// we have changed again the original array order now in reverse order again 
console.log("Original Array Reversed again:", countriesToVisit.reverse());







 


 