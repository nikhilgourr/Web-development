// For Each is a Method and Loop in Array
// forEach(Passed a callback function as an argument);

let arr = [45,54,23,343,43,342];
arr.forEach((val)=>{  // Passed a callback function as an argument
    console.log(val);
});


let cities = ["udaipur","jaipur","Mumbai","Pune"];
cities.forEach((val)=>{  // Passed a callback function as an argument
    console.log(val.toUpperCase());
});


let city = ["banglore","gurgaon","jaipur","Pune"];
cities.forEach((val,indx,city)=>{  // Passed a callback function as an argument
    console.log(val.toUpperCase(),indx,city); // passed 3 parameters
});

// 3 parameters value(items), index(position) , arr(city)