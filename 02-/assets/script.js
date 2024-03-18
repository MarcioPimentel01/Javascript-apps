let welcomeEl = document.getElementById("welcome-el");
console.log(welcomeEl);

let greeting = "Welcome Back, "
let fullName = "Marcio Pimentel"

welcomeEl.innerText = greeting + fullName;

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += "👋🏼";