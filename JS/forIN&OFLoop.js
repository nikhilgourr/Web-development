// 2 specail loops to iterate on some special datatypes such as string , arrays.
// for-of loop
// for-in loop

let strvar = "Hello";
for(let i of strvar){
    console.log(i);
}

let str = "1242434";
for(let val of str){
    console.log(val);
}

// creating an object 
let student ={
    name:"Sam",
    age:18,
    cgpa:8.6,
    isPass:true
};

// for-in loop
for(let key in student){
    console.log(key,student[key]); // return key
}