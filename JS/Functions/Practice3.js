// Practice Questions Part 3
// Q1 We are given array of marks of students . Filter out of the marks of students
// that scored 90.

// Q2 Take a number n as input from user . Crate an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

// Q2
let mark = [75, 90, 92, 95, 67, 98, 41];

let toppers = mark.filter((val) => {
    return val > 90; // Return Greater then 90 Value -> 92 , 95 , 98
});
console.log(toppers);


// Q3
let n = prompt("Enter a number ");
let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i; // 1[0] , 2[1] , 3[2] , 4[3], 5 [4]
}
console.log(arr);

// Q3 - Sum of all elemetns of array
let sum = arr.reduce((prev, current) => {
    return prev + current;
})
console.log("Additon of above array elements is : ", sum);


// Q3 - Product of all elemetns of array
let product = arr.reduce((prev, current) => {
    return prev * current;
});
console.log("Product of above array elements is : ", product);