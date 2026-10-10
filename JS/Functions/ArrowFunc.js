// Arrow Functions

// Q1
const hello =()=>{
    for(let i=0;i<5;i++){
    console.log("hello");
    }
};
hello();

// Q2
const sum=(a,b)=>{
    console.log("Sum of 2 number is :",a+b);
};
sum(20,30);

// Q3 Using Return
const multi=(a,b)=>{
    return a * b;
};
console.log("Mulitplication of 2 number is :",multi(5,5));

// Q4 Writing Arrow Function Without Using {} in a single line
const hi =()=> console.log("Hi");
hi();