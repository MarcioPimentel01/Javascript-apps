// counter program 2


// //MY WAY
// let count = 0;
// const countLabel = document.getElementById("count-Label")


// function decrease() {
//     count = count - 1;
//     console.log(count);
//     decreaseBtn.innerText = count;
// }

// function reset() {
//     count = 0;
//     countLabel.innerText = count;
// }

// function increase() {
//     count = count + 1
//     countLabel.innerText = count;
// }


// ANOTHER WAY

const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn = document.getElementById("increase-btn");
const countLabel = document.getElementById("count-Label")
let count = 0;

increaseBtn.onclick = function increase() {
    count++;
    countLabel.innerText = count;
}

resetBtn.onclick = function reset() {
    count = 0;
    countLabel.innerText = count;
}

decreaseBtn.onclick = function decrease() {
    count--;
    countLabel.innerText = count;
}