// datatypes

// Number 
let num = 5;
console.log(num);

// String
let name = "Nikhil";
console.log(name);

// Boolean 
let isfollow = true;
console.log(isfollow);

let isUnfollow = false;
console.log(isUnfollow);

// Undefined 
let a;
console.log(a);

// Null
let b = null;
console.log(b);

// bigint
let c = BigInt(12345);
console.log(c);

// Symbol
let y = Symbol("hello!");
console.log(y);
typeof y

// Object
const student ={
    fullName : "Rahul Kumar",
    age : 20,
    cgps : 8.2,
    ispass : true
};

// Accessing object's values 
console.log(student["fullName"]);
console.log(student.age);

// Updating value 
student.age = student["age"] + 1;
console.log(student.age);

student.fullName = "Rahul Sharma";
console.log(student.fullName);

const product={
    product_Name : "pen",
    product_Rating : 7002,
    product_Id : 10203,
    product_price : 270
};
console.log(product.product_Id);
console.log(product.product_Name);
console.log(product.product_Rating);
console.log(product.product_price);