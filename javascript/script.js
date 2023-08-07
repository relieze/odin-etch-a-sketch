const gridBox = document.querySelector(".gridBox");

// buttons
const gridSizeBtn = document.querySelector(".gridSize");
const randomFillBtn = document.querySelector(".randomFill");

let gridRows = 16, gridColumns = 16;
createGrid(gridRows * gridColumns);
colorOnHover();

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.style.flexBasis = `${(100/gridRows)}%`
        square.style.height = `${(100/gridColumns)}%`
        gridBox.appendChild(square);
    }
}

gridSizeBtn.addEventListener("click", changeGridSize);
randomFillBtn.addEventListener("click", event => event.target.classList.toggle("on"));

function changeGridSize() {
    gridRows = prompt("What width do you want for the grid?");
    gridColumns = prompt("What height do you want for the grid?");
    
    while (gridBox.firstChild) gridBox.removeChild(gridBox.firstChild);
    createGrid(gridRows * gridColumns);
    colorOnHover();
}

function colorOnHover() {
    const squares = document.querySelectorAll(".gridBox div");

    squares.forEach(function(square) {
        square.addEventListener("mouseover", event => changeColor(event));
    });

    function changeColor(event) {
        let color = "black";
        if (randomFillBtn.classList.contains("on")) color = randomColor();

        event.target.style.backgroundColor = color;
    }
}

function randomColor() {
    function randNum() {return Math.floor(Math.random() * 256);}
    return (`rgb(${randNum()}, ${randNum()}, ${randNum()})`);
}