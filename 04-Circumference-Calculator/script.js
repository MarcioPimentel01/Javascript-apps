// CONST = A VARIABLE THAT CAN'T BE CHANGED.
// A GOOD EXAMPLE IS TO USE PI TO CALCULATE A CIRCUMFERENCE, BECAUSE OTHERWISE IT'S NO GOING TO BE A PERFEC CIRCLE.

let circumferenceEl = document.getElementById("circumference-result")
const PI = 3.14159;
let circumference;
// radius = window.prompt("please, enter here the radius of a circle");


function circumferenceCalc() {
    let radius = parseFloat(document.getElementById("radius").value);
    circumference = 2 * PI * radius; //formula
    console.log(circumference);
    circumferenceEl.innerText = circumference;
}

//another way (need to be fixed)

// document.getElementById("radius").onclick = function () {
//     radius = parseFloat(document.getElementById("radius").value);
//     circumference = 2 * PI * radius; //formula
//     console.log(circumference);
//     circumferenceEl.innerText = circumference;
// }