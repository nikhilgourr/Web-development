// Dom Manipulation
// Properties - > we can change , set , get or check their values . 

// tagName
// innerText
// innerHtml
// textContent

// 1. tagName
let b = document.querySelector("button");
console.dir(b); // Returns element
console.dir(b.tagName); // Returns element tag name like in this case it will return 
// button
console.log(b.tagName);


// Accessing Children 
let fchild = document.body.children;
console.log(fchild); // Prints All childrens
console.dir(fchild); // Returns All childrens


// 2. innerText
// It will Print all innerText of all children and parent also
let div = document.querySelector("div");
console.dir(div); // do div.innerText - you will get all fruits name only
console.log(div.innerText);


// 3. innerHTML
// It will print all html elements 
let htmlEl = document.querySelector("div");
console.dir(htmlEl); // do div.innerHTML - you will get tag name and text 
// like - <p>text<p> , <h1>Hello<h1>
console.log(div.innerHTML);


// 4. textContent
let heading = document.querySelector("h1");
console.log(heading);
console.log(heading.tagName); // Tag Name
console.log(heading.innerHTML); // Returns tag and their content
console.log(heading.innerText); // Gives content and text of child and parent
console.log(heading.textContent); // Gives hidden details also 