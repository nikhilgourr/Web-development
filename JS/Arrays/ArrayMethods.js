// Array Methods 

// push () - add to end
let fruit = ["litchi","PomoGranate","Apple","Pineapple","Mango"];
console.log(fruit);

fruit.push("sapodilla");
console.log(fruit);


// pop () delete from end & return
console.log(fruit);

fruit.pop("Apple"); // pop will delete from edn & return not from the middle 
console.log(fruit);

console.log(fruit.pop(), "String Deleted");
console.log(fruit); // pop Will delete from end & return deleted value