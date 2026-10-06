// Operators in Javascript

// Arithmetica operators + , - , * , /, ** , % 
// Assignment operators +=, -+, *=, **=, %=, /=
// Unary operators ++a, --a, a++, a--
// ternary operator -> condition ? expressionIfTrue : expressionIfFalse;

// comparison operators
let a = 5;
let b = 6;

let s = "6"

// Equal to 
console.log("5 == 6", a == b);

// Equal to & type
console.log("6 === '6'", 6 === "6");

// Not Equal to 
console.log("5 != 6", a != b);

// Not Equal to & type
console.log("6 !== '6'", 6 !== "6");

// Logical operators

// AND
let x=2;
let z=5;

let cond1 = x>z;
let cond2 = x===z;

console.log(cond1 && cond2);


// OR
let y=8;
let g=5;

let cond3 = y>g;
let cond4 = y===g;

console.log(cond3 || cond4);

// NOT
let k=8;
let l=8;

let cond5 = l>k;
let cond6 = k===l;

console.log(! (cond5)); // false -> true
console.log(! (cond6)); // ture -> false

// ternary operator

let n = 18;
console.log(n>18 ? "adult" : "Not adult");