// 45. Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs,
//   such as a color or an optional feature. Print the Object that’s returned to make sure 
//   all the information was stored correctly.

//Ans 45,
// Define a function to create a car object with optional option...
       
function storeCarInfo(manufacturer: string, modelName: string, ...extraoption:{[key: string]: any} []):
object {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraoption)
}
    return carInfo;
};

let answer = storeCarInfo('Toyota', "Corola", {color:'Black'}, {features: ['Navigation', 'Power window']})

console.log(answer);
