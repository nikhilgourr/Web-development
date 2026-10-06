// Q1
let n = prompt("Enter a number");

if(n%5===0){
    console.log(n,"is a multiple of 5");
}else{
    console.log(n,"is not a multiple of 5");
}

// Q2 
let score = prompt("Enter Score");

if(score>=90 && score <=100){
    console.log("Grade is A");
}else if(score>=70 && score <=89){
    console.log("Grade is B");
}else if(score>=60 && score <=79){
    console.log("Grade is C");
}else if(score>=50 && score <=69){
    console.log("Grade is D");
}else if(score>=40 && score <=59){
    console.log("Grade is E");
}else{
    console.log("Grade is F");
}