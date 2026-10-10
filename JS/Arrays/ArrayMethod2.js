// Array Methods

// Concat()
let heros1 = ["Ironman","Spiderman","Hulk"];
let heros2 = ["Superman","Batman"];

console.log(heros1.concat(heros2)); // Concat both array 
console.log(heros1);
console.log(heros2);

// unshift () - Add at start - like push()
console.log(heros1.unshift("Antmam"));
console.log(heros1); // add at starting

// shift () - Delete at Start - like pop()
console.log(heros2.shift());
console.log(heros2); // Delete at starting

// slice () // used for slicing 
console.log("Slicing",heros1.slice(1,4));
console.log("Slicing",heros1.slice(1)); // All elements

// splice () // Change original array (add,remove,replace)
let num =[3,4,5,6,7,8,9];
console.log(num.splice(2,3,56,60,61,62)); // startIndx(2),deleteCount(3),Newvalue(3,4,5)
console.log(num);

// add
console.log("ADD");
num.splice(9,0,101); // ADDED AT THE END
console.log(num);

//delete
console.log("DELETE");
num.splice(4,2);
console.log(num);

// replace delement 
console.log("REPLACE");
num.splice(2,0,22);
console.log(num);

// used as slice
console.log("Slicing using splice() ");
console.log(num.splice(4)) // It will return all elements from 4 to till end