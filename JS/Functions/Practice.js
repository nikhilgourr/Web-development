// Practice Questions 

// Q1. Create a function using the "function" keyword that takes a string
// as an argument & returns the number of vowels in the string.

// Q2. Create an arrow function to perform the same task.

// Q1 Normal Function
function countVowels(str) {
    let count = 0;
    str.toLowerCase();

    for (let char of str) {
        if (char === "i" || char === "a" || char === "u" || char === "o" || char === "e") {
            count++;
        }
    }
    console.log(count);
    return count;
}
console.log("Doing is ,using normal Function");
countVowels("Hello");

// Q2 Arrow Function
const vowelCount = (str) => {
    let count = 0;
    for (let char of str) {
        if (char === "i" || char === "a" || char === "u" || char === "o" || char === "e") {
            count++;
        }
    }
    console.log(count);
    return count;
};
console.log("Doing it ,using Arrow Function");
vowelCount("Apna College");