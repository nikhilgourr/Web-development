// Array 

let mark = [65,43,45,54,34,65,24,65];
console.mark(mark);
console.log(mark.length); // Data Property 

let heros = ["Hulk","Ironman","Thor","Spideman","Antman"];
console.log(heros);
console.log(typeof heros);  // It is Special type of Object
                            // Where we use index instead of using key value
                            // Pare to access the element or a value.

// Array Indices 
let arr = [65,43,45,54,34,65,24,65];
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);

// Array is mutable in js 
// Updating Array Values ,and it will actually update or change the original value
let ar =  [65,43,45,54,34,65,24,65];
ar [0] =  70;
ar [0] =  80;
ar [0] =  90;
ar [0] =  100;
ar [0] =  120;

console.log(ar[0]);
console.log(ar[1]);
console.log(ar[2]);
console.log(ar[3]);
console.log(ar[4]);