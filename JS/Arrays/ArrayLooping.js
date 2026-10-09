// Looping over an Array

let arr = [3,545,234,23,43,2,56,7,675,423,454,234];

for(let i=0;i<arr.length;i++){
    console.log(`${arr[i]}\n`); // ${ Item} - Template Literals
} 

// For of 
for(let el of arr){
    console.log(el);
}

// Q1
let studentMarks = [85,97,83,45,67];
let sum = 0;

for(let i = 0;i<studentMarks.length;i++){
    sum += studentMarks[i];
}
console.log("Average marks of the is :",sum/studentMarks.length);