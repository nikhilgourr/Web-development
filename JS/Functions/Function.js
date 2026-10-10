// Function

// function Definition
function hello(){
    console.log("Hello");
}
hello(); // function Calling

// Passing Arguments to a Function
function Greet(msg){ // msg as an input - parameter
    // Parameter -> Input
    console.log(msg);
}
Greet("Good Morning"); // argument

// Q1. Sum of 2 numbers function
console.log("Performed Addition");
function sum(a,b){
    let ans = a + b;
    console.log(`Sum of ${a} or ${b} is :`,ans);
    console.log(`Sum of ${a} or ${b} is : ${ans}`);
}
sum(20,30);

// Q2. USING RETURN
console.log("Performed Subtraction");
function sub(a,b){
    let s;
    return s = a - b;
}
console.log("Subtraction is:",sub(10,5));