const body = document.querySelector("body");
const gridBox = document.querySelector(".gridBox");
const gridRows = 16;
const gridColumns = 16;
const gridArea = gridRows * gridColumns;

for (let i = 0; i < gridArea; i++) {
    const square = document.createElement("div");
    square.style.flexBasis = `${(100/gridRows)}%`
    square.style.height = `${(100/gridColumns)}%`
    gridBox.appendChild(square);
}

const squares = document.querySelectorAll(".gridBox div");
squares.forEach(square => square.addEventListener("mouseover", colorChange));

function colorChange(event) {
    this.classList.add("colorChange");
}