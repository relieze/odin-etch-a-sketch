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
        square.dataset.color = "hsl(000, 000%, 100%)";
        square.style.backgroundColor = square.dataset.color;
        gridBox.appendChild(square);
    }
}

gridSizeBtn.addEventListener("click", changeGridSize);

buttons.forEach((btn) => {
    btn.addEventListener("click", () => clearOtherButtons(btn));
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

    squares.forEach((square) => {
        square.addEventListener("mouseover", () => changeColor(square));
    });
}

function changeColor(square) {
    let color = "hsl(000, 000%, 000%)";
    if (randomFillBtn.classList.contains("on")) color = randomColor();
    color = shadeEffect(square, color);
    square.dataset.color = color;

    square.style.backgroundColor = color;
}

function randomColor() {
    function randNum(max, add = 0) {
        return `${Math.floor(Math.random() * max) + add}`.padStart(3, "0");
    }
    return `hsl(${randNum(360)}, ${randNum(31, 70)}%, ${randNum(71, 15)}%)`;    
}

function shadeEffect(square, color) {
    if (lightShadeBtn.classList.contains("on")) {
        color = square.dataset.color;
        let lightnessValue = parseInt(color.slice(15,18));
        if (lightnessValue < 100) lightnessValue += 10;
        color = color.slice(0, 15) + `${lightnessValue}`.padStart(3, "0") + color.slice(18);
    } else if (darkShadeBtn.classList.contains("on")) {
        color = square.dataset.color;
        let darknessValue = parseInt(color.slice(15,18));
        if (darknessValue > 0) darknessValue -= 10;
        color = color.slice(0, 15) + `${darknessValue}`.padStart(3, "0") + color.slice(18);
    }
    return color;
}