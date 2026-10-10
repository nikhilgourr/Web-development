// Practice Question 

// Q1. For a given array of numbers, print the square of each value using 
// the forEach(); loop

let num = [4, 5, 3, 2, 5, 4, 5, 3];

num.forEach((num) => { // Call Back Function
    console.log(num * num); // Sqaure of Each Element of the arr
});

// We can also do it like this - (num**2)s

// we can alos write arrow function like this 
console.log("Using Diffrent Method for Arrow Function");

let calculatSquare = (num) => {
    console.log(num ** 2);
};

num.forEach(calculatSquare); // Callback Function 