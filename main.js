// JAVASCRIPT

// Variables
let NUM_ROWS = 10;
let NUM_COLS = 10;

let firstClick = true;
let totalMines = 0;


// Create an array to represent balloons
let grid = createBalloonArray();

// Create divs to model the grid array
createDivGrid(grid);

document.addEventListener("keydown", keydownHandler);
document.getElementById("new").addEventListener("click", newGrid);

function keydownHandler(event) {
  if(event.code == "KeyR") { // if u hit the r key generate new game
    newGrid();
  }
}

function newGrid() {
  document.getElementById("winText").innerHTML = "" //reset game conditions
  totalMines = 0;
  firstClick = true;
  document.getElementById("grid").innerHTML = "";
  NUM_ROWS = +document.getElementById("row").value; // get no. of rows to gen
  if(NUM_ROWS == 0) { //if it's 0 then set it to 10
    NUM_ROWS = 10;
    document.getElementById("row").value = 10;
  }
  NUM_COLS = +document.getElementById("col").value; // get no. of cols to gen
  if(NUM_COLS == 0) { //if it's 0 then set it to 10
    NUM_COLS = 10;
    document.getElementById("col").value = 10;
  }
  // set grid width to correspond to grid size
  document.getElementById("grid").style.width = (NUM_COLS / 2) * 100 + "px"; 
  grid = createBalloonArray();
  createDivGrid(grid); // create game
}
