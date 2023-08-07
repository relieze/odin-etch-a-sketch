const body = document.querySelector("body");
const gridBox = document.querySelector(".gridBox");
const gridColumns = 16;
const gridRows = 16;
const gridArea = gridRows * gridColumns;

for (let i = 0; i < gridArea; i++) {
    const square = document.createElement("div");
    gridBox.appendChild(square);
}