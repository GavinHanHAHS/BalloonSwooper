// JAVASCRIPT

// Variables
const NUM_ROWS = 10;
const NUM_COLS = 10;

let firstClick = true;


// Create an array to represent balloons
let grid = createBalloonArray();

// Create divs to model the grid array
createDivGrid(grid);

document.addEventListener("keydown", keydownHandler);
document.getElementById("new").addEventListener("click", newGrid);

function keydownHandler(event) {
  if(event.code == "KeyR") {
    firstClick = true;
    document.getElementById("grid").innerHTML = "";
    grid = createBalloonArray();
    createDivGrid(grid);
  }
}

function newGrid() {
  firstClick = true;
  document.getElementById("grid").innerHTML = "";
  grid = createBalloonArray();
  createDivGrid(grid);
}
