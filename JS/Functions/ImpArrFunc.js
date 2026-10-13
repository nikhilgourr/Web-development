// Some important array functions 
// map()

let arr =[3,4,5,3,3,4,5,23,34,4,];

// map() returns new array, will not change the original array
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

