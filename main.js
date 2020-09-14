// JAVASCRIPT

// Variables
const NUM_ROWS = 10;
const NUM_COLS = 10;


// Create an array to represent balloons
let grid = createBalloonArray();

// Create divs to model the grid array
createDivGrid(grid);

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  if(event.code = "KeyR") {
    document.getElementById("grid").innerHTML = "";
    grid = createBalloonArray();
    createDivGrid(grid);
  }
}
