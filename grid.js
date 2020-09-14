function createBalloonArray() {
  // Create and return a grid array

  let grid = []
  let grid2 = []

  for(let n = 0; n < NUM_ROWS; n++) {
    for(let i = 0; i < NUM_COLS; i++) {
      let rand = Math.random();
      if(rand > 0.9) {
        grid.push(1);
      } else {
        grid.push(0);
      }
    }
    grid2.push(grid);
    grid = [];
  }
  

  console.log(grid2);

  return grid2;

/*

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
           */
}

function createDivGrid(grid) {
  for(let row = 0; row < NUM_ROWS; row++) {
    for(let col = 0; col < NUM_COLS; col++) {
      // Create a div for each element in 2D grid
      let divEl = document.createElement("div");

      // Add an id to each divEl
      divEl.id = "cell" + row + "-" + col;

      // Add Appropriate Class
      if(grid[row][col] == 1) {
        divEl.classList.add("bomb");
      }
      
      divEl.classList.add("hidden");
        
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

  if(event.which == 1) {
    // Get row and col of the clicked cell
  let row = +event.target.dataset.row;
  let col = +event.target.dataset.col;

  // remove flag if there

  // Check if there's a balloon
  if(grid[row][col] == 1) {
    console.log("game over!");
    for(let n = 0; n < grid.length; n++) {
      for(let i = 0; i < grid[row].length; i++) {
        // should probably add check for if item has class hidden
        // removes "hidden" class from every cell
        document.getElementById("cell" + n + "-" + i).classList.remove("hidden");
        if(grid[n][i] == 1) {
          console.log("boom");
        } else if(grid[n][i] == 0) {
          // if there is a number, then put the number there
          if(checkAroundCell(n, i) != 0) {
            document.getElementById("cell" + n + "-" + i).innerHTML = checkAroundCell(n, i);
          }
        }
      }
    }
  } else {
    console.log("safe....");
    revealCell(row, col);
    let balloonsAdj = checkAroundCell(row, col);
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
  } else if(event.which == 3) {
    img = document.createElement("img");
    img.src = "flag.png";
    img.height = "40";
    src = event.target.appendChild(img);
  }
  
}

function revealCell(row, col) {
  //target = target cell
  let target = document.getElementById("cell" + row + "-" + col);
  target.classList.remove("hidden"); //reveal the cell
  if(checkAroundCell(row, col) == 0) {
    //if there is no mines around, then reveal all cells around

    //check if cell is not revealed, and if not reveal it
    // (also check if it is an invalid cell)
    if(row != 0) {
      if(col != 0) {
        if(document.getElementById("cell" + (row - 1) + "-" + (col - 1)).classList.contains("hidden")) {
          revealCell(row - 1, col - 1); // up left
        }
      }
      if(document.getElementById("cell" + (row - 1) + "-" + col).classList.contains("hidden")) {
        revealCell(row - 1, col); // up
      }
      if(col != 9) {
        if(document.getElementById("cell" + (row - 1) + "-" + (col + 1)).classList.contains("hidden")) {
          revealCell(row - 1, col + 1); // up right
        }
      }
    }
    
    if(row != 9) {
      if(col != 0) {
        if(document.getElementById("cell" + (row + 1) + "-" + (col - 1)).classList.contains("hidden")) {
          revealCell(row + 1, col - 1); // down left
        }
      } 
      if(document.getElementById("cell" + (row + 1) + "-" + col).classList.contains("hidden")) {
        revealCell(row + 1, col); // down
      }
      if(col != 9) {
        if(document.getElementById("cell" + (row + 1) + "-" + (col + 1)).classList.contains("hidden")) {
          revealCell(row + 1, col + 1); // down right
        }
      }
      
    }
    if(col != 0) {
      if(document.getElementById("cell" + row + "-" + (col - 1)).classList.contains("hidden")) {
        revealCell(row, col - 1); // left
      }
    }
    if(col != 9) {
      if(document.getElementById("cell" + row + "-" + (col + 1)).classList.contains("hidden")) {
        revealCell(row, col + 1); // right
      }
    }
    
//    if(row > 9 && row < 1) {
      
//    }

  } else {
    target.innerHTML = checkAroundCell(row, col);
    return;
  }
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