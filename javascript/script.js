const gridBox = document.querySelector(".gridBox");

// buttons
const buttons = document.querySelectorAll(".buttons button");
const gridSizeBtn = document.querySelector(".gridSize");
const randomFillBtn = document.querySelector(".randomFill");
const lightShadeBtn = document.querySelector(".lightShade");
const darkShadeBtn = document.querySelector(".darkShade");

let gridRows = 16, gridColumns = 16;
createGrid(gridRows * gridColumns);
handleHover();

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.style.flexBasis = `${(100/gridRows)}%`
        square.style.height = `${(100/gridColumns)}%`
        gridBox.appendChild(square);
    }
}

gridSizeBtn.addEventListener("click", changeGridSize);

buttons.forEach(function(btn) {
    btn.addEventListener("click", event => clearOtherButtons(event.target));
})

function clearOtherButtons(target) {
    buttons.forEach((btn) => {
        target === btn && target != gridSizeBtn ? 
        btn.classList.toggle("on") : btn.classList.remove("on");
    })
}

function changeGridSize() {
    gridRows = prompt("What width do you want for the grid?");
    gridColumns = prompt("What height do you want for the grid?");
    
    while (gridBox.firstChild) gridBox.removeChild(gridBox.firstChild);
    createGrid(gridRows * gridColumns);
    handleHover();
}

function handleHover() {
    const squares = document.querySelectorAll(".gridBox div");

    squares.forEach(function(square) {
        square.addEventListener("mouseover", event => changeColor(event));
    });
}

function changeColor(event) {
    let color = "hsl(0, 0%, 0%)";
    if (randomFillBtn.classList.contains("on")) color = randomColor();
    event.target.dataset.color = color;

    event.target.style.backgroundColor = color;
}

function randomColor() {
    function randNum(max) {return Math.floor(Math.random() * max);}
    return `hsl(${randNum(360)}, ${randNum(31) + 70}%, ${randNum(71) + 15}%)`;    
}