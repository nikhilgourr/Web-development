// Q3

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix","Ola"];
console.log(companies);
// Q1. Remove the fisrt company from the array 
// Q2. Remove Uber * Ola in its Place
// Q3. Add Amazon at the end

// Q1 
console.log("Removed element is Bloomberg");
companies.shift();
console.log(companies);

// Q2
console.log("Removes elements is Uber & Ola");
companies.splice(1,1);
companies.splice(4,1);
console.log(companies);

// Q3
console.log("Pushed element is 'Amazon' at the end");
companies.push("Amazon");
console.log(companies);
