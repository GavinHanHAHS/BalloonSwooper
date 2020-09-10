function createGridArray() {
  // Create and return a grid array
  return [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
           [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
           [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
           [1, 1, 1, 0, 0, 1, 1, 1, 0, 0] ]
}

function createDivGrid(grid) {
  for(let row = 0; row < NUM_ROWS; row++) {
    for(let col = 0; col < NUM_COLS; col++) {
      // Create a div for each element in 2D grid
      let divEl = document.createElement("div");

      // Add Appropriate Class
      if(grid[row][col] == 1) {
        divEl.classList.add("grey");
      }

      // Add an event listener to each DivEl
      divEl.addEventListener("click", cellClicked);

      // Add div to container
      document.getElementById("grid").append(divEl);
    }
  }
}

function cellClicked(event) {
  console.log(event.target);
}