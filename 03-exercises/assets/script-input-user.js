// How to accept user input

// 1. Easy Way = window prompt
// 2. Professional Way

let userName;


document.getElementById("mySubmit").onclick = function () {
    userName = document.getElementById("myText").value;
    console.log(userName);
    let h1 = "Welcome ";
    document.getElementById("myH1").innerText = h1 + userName;
    console.log(h1);
}

// Another Option.


document.getElementById("mySubmitTwo").onclick = function () {
    userName = document.getElementById("myTextTwo").value;
    console.log(userName);
    document.getElementById("myH1Two").textContent = "Hello " + userName;
}