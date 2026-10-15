// DOM Manipulation
// 1st. getElementById , class , or tagName()
// 2nd. querySelector() for single element or all()

// 1. Accessing an elemnet using getElementById();
let heading = document.getElementById("heading"); 
console.log("Using getElementById");
console.log(heading); // Print the text
console.dir(heading); // return element

// 2. Accessing an elemnet using Class_Name
let cls = document.getElementsByClassName("heading2");
console.log("Using getElementByClassName");
console.log(cls); // Print the text
console.dir(cls); // return element

// 3. Accessing or selecting an element with a tag
let tag = document.getElementsByTagName("p");
console.log("Using getElementByTagName");
console.log(tag); // Print the text
console.dir(tag); // return element

// 2nd method for selecting elements 
// quesrySelector()

let b = document.querySelector("button");
console.log("Using querySelector()");
console.dir(b); // Returns 1st element 
console.log(b); // Print the text

let all = document.querySelectorAll("p");
console.log("Using querySelectorAll()");
console.dir(all); // Returns a Nodelist
console.log(all); // Print the text

// querySelector() with class before className use (.) operator
let cl = document.querySelector(".heading2");
console.log("Using querySelector to access class ");
console.log(cl); // Print the text
console.dir(cl); // return element

let clAll = document.querySelectorAll(".heading2");
console.log("Using querySelector to access class ");
console.log(clAll); // Print the text
console.dir(clAll); // return element

// querySelector () with Id using #
let id = document.querySelector("#heading");
console.log("Using querySelector to acces id");
console.log(id); // Print the text
console.dir(id); // return element