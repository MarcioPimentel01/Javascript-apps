let count = 0 // Declares a variable named 'count' and initializes it with the value 0.
let countEl = document.getElementById("count-el"); // Logs the retrieved HTML element to the console. - There is an id called count-el on the h2 element.
let saveEl = document.getElementById("save-el");
let sumEl = document.getElementById("sum-el");
console.log(countEl); //Just to display, and debug porpuses.
function increment() { //defines the name of the function
    console.log("clicked"); //Just to display, and debug porpuses.
    count += 1; // increment the variable by 1
    console.log(count); //Just to display, and debug porpuses.
    countEl.innerText = count; // Updates the text content of the HTML element stored in countEl to display the updated value of 'count'.
}

function save() {
    console.log(count);
    alert(`the value ${count} was saved`);
    let valueDash = count + " - ";
    saveEl.innerText += valueDash;
    sumTotal += count;
    count = 0;
    countEl.innerText = count;
}

function sum() {
    sumEl.innerText = sumTotal;
}