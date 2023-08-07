const gridBox = document.querySelector(".gridBox");
let gridRows = 16;
let gridColumns = 16;
createGrid(gridRows * gridColumns);

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.style.flexBasis = `${(100/gridRows)}%`
        square.style.height = `${(100/gridColumns)}%`
        gridBox.appendChild(square);
}}


const gridSizeBtn = document.querySelector(".gridSize")
gridSizeBtn.addEventListener("click", changeGridSize);

function changeGridSize() {
    gridRows = prompt("What width do you want for the grid?");
    gridColumns = prompt("What height do you want for the grid?");
    
    while (gridBox.firstChild) gridBox.removeChild(gridBox.firstChild);
    createGrid(gridRows * gridColumns);
}

const squares = document.querySelectorAll(".gridBox div");
squares.forEach(square => square.addEventListener("mouseover", changeColor));

function changeColor() {
    this.classList.add("changeColor");
}