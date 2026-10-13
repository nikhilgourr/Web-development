// Some important array functions 
// map()
// map() returns new array, will not change the original array

let arr =[3,4,5,3,3,4,5,23,34,4,];

let newArr = arr.map((val)=>{
    return val * 2;
});
console.log(newArr);

// filter() 
// It creates a new array of elements that give true for a condition.

let num = [2,3,4,5,6,7,7,8,9,10];

let evenNum = num.filter((val)=>{
    return val % 2 === 0; // return even values
})
console.log("Printing all Even Numbers, using filter () : ",evenNum);

// Reduce ()
// It returns a single value.

let sum=[1,2,3,4];

let addition = sum.reduce((res,current)=>{
    return res + current;
});
console.log("Addition is : ",addition);

// Find maxmium Element from an array using reduce()
// Reduce()
let max = [67,43,32,22,21,89,90,100];

let largest = max.reduce((prev,current)=>{
   return prev > current ? prev : current;
});
console.log(largest);