function createBalloonArray() {
  // Create and return a grid array
  return [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
           [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
           [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
           [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
           [1, 1, 1, 0, 0, 1, 0, 1, 0, 0] ]
}

function createDisplayArray() {
  //Create and return a grid array
  return [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ]
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
        
      // Add dataset values for row and col
      divEl.dataset.row = row;
      divEl.dataset.col = col;

      // Add an event listener to each DivEl
      divEl.addEventListener("mousedown", cellClicked);

      // Add div to container
      document.getElementById("grid").append(divEl);
    }
  }
}

function cellClicked(event) {
  //console.log(event.target);
  //console.log(event.which);

  // Get row and col of the clicked cell
  let row = +event.target.dataset.row;
  let col = +event.target.dataset.col;


  // Check if there's a balloon
  if(grid[row][col] == 1) {
    console.log("game over!");
  } else {
    console.log("safe....");
    let balloonsAdj = checkAroundCell(row, col);
    console.log(balloonsAdj);
    if(balloonsAdj == 0) {
      // Logic for empty square
    } else {
      event.target.innerHTML = balloonsAdj;
    }
  }


  /*
  // Update cell Color
  event.target.classList = ""; // Empty cell class list
  grid[row][col] = 0;
  if(event.which == 1) {
    event.target.classList.add("grey");
    grid[row][col] = 1;
  } else if(event.which == 3) {
    // Empty cell is white;
  }
*/
}

function checkAroundCell(row, col) {
  let num = 0;

  // Top Row
  if(row != 0) {
    if(grid[row - 1][col - 1] == 1) {
      num++;
    }
    if(grid[row - 1][col] == 1) {
      num++;
    }
    if(grid[row - 1][col + 1] == 1) {
      num++;
    }
  }
  
  // Middle Row (minus center)
  if(col != 0) {
    if(grid[row][col - 1] == 1) {
      num++;
    }
  }
  if(col != 9) {
    if(grid[row][col + 1] == 1) {
      num++;
    }
  }

  // Bottom Row
  if(row != 9) {
    if(grid[row + 1][col - 1] == 1) {
      num++;
    }
    if(grid[row + 1][col] == 1) {
      num++;
    }
    if(grid[row + 1][col + 1] == 1) {
      num++;
    }
  }
  

  return num;
}
