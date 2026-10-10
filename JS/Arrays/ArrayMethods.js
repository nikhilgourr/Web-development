// Array Methods 

// push () - add to end
// Change in Existing array
let fruit = ["litchi","PomoGranate","Apple","Pineapple","Mango"];
console.log(fruit);

fruit.push("sapodilla");
console.log(fruit);


// pop () delete from end & return
// Change in Existing array
console.log(fruit);

fruit.pop("Apple"); // pop will delete from edn & return not from the middle 
console.log(fruit);

console.log(fruit.pop(), "String Deleted");
console.log(fruit); // pop Will delete from end & return deleted value

// toString()
// Change and return New array
let num = [45,54,2,5,4,35,54,3455,454,45];
console.log(num.toString()); // Converst The array into string 

let food = ["Burger","Pizaa","Meggie","Pasta"];
console.log(food.toString()); // It will convert the array into string and return new array

console.log(food); // toString do not change in Original array 

