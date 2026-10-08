// Strings
let str ="apnacollege";
let str1="hello";

// string length
console.log(str.length); // lenght is property of string

// string indices
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);

// Template Literlas uses BackTick ` string inside backtick `
// It is special string 
let sentence = ` This is template literal ` ;
console.log(sentence,"\n", "Type is" ,typeof sentence);

// Eg of Template Literals in sting
let obj = {
    item : "Pen",
    price :10,
};

// This phenomina is called string intepolation
console.log(`The item is ${obj.item} and the price of a ${obj.item} is ${obj.price}`);
console.log(`Addition is : ${1+2+3+4+5}`);

// Escapce Characters \n & \t 
console.log("Apna\ncollege");
console.log("Apna\tCollege");
let s = "Hello \n How are you";
console.log(s.length);