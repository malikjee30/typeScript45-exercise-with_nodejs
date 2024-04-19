"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
//  reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
//   size with a different message.
function make_shirt(size = "Large", printMessage = "I Love typScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`);
}
//calling a function with by defoult value
make_shirt();
//calling a function now with medium size and defoult message
make_shirt("medium");
//calling a function now with small size and also print different message
make_shirt("small", "I Love javaScript");
