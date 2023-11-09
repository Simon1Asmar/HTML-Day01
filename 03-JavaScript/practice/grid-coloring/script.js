// Selecting DOM elements
const grid = document.querySelector("#grid");
const eraserTool = document.querySelector("#eraser");
const whiteboardTool = document.querySelector("#whiteboard");
const redColorSquare = document.querySelector("#red.color-square");
const redCounter = document.querySelector("#red-counter");
const blueColorSquare = document.querySelector("#blue.color-square");
const blueCounter = document.querySelector("#blue-counter");
const greenColorSquare = document.querySelector("#green.color-square");
const greenCounter = document.querySelector("#green-counter");

// setting styling for color buttons
redColorSquare.classList.add("red");
blueColorSquare.classList.add("blue");
greenColorSquare.classList.add("green");

// Adding event listeners
grid.addEventListener("click", gridEventListener);
eraserTool.addEventListener("click", updateCurrentAction);
whiteboardTool.addEventListener("click", updateCurrentAction);
redColorSquare.addEventListener("click", updateCurrentAction);
blueColorSquare.addEventListener("click", updateCurrentAction);
greenColorSquare.addEventListener("click", updateCurrentAction);

let currentFunction = "";

const numRows = 5;
const numCols = 12;

const gridSize = 100;

function gridDimensions(numRows, numCols, gridSize){
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = `repeat(${numCols}, ${gridSize}px)`;
  grid.style.gridTemplateRows = `repeat(${numRows}, ${gridSize}px)`;
}

function createDynamicGrid(numRows, numCols, gridSize){
  const gridData = [];
  gridDimensions(numRows, numCols, gridSize);

  for(let row = 0; row < numRows; row++){
    for(let column = 0; column < numCols; column++){

      const gridCell = document.createElement("div");
      gridCell.classList.add("grid-item");
      gridCell.id = `${row}-${column}`;
      grid.append(gridCell);
      gridData.push(gridCell);

    }
  }

  return gridData;
}

const gridData = createDynamicGrid(numRows, numCols, gridSize);

colorGridItems();

function colorGridItems(){
  gridData.forEach(cell => {
    let[row, column] = cell.getAttribute("id").split("-");
    drawRed(Number(row), Number(column), cell); 
    drawBlue(Number(row), Number(column), cell); 
    drawGreen(Number(row), Number(column), cell); 
    drawYellow(Number(row), Number(column), cell); 
  })
}

function drawRed(row, column, cell){
  if(row === 0 || row === 4 || column === 0 || column === 11){
    cell.classList.add("red")
  }
}

function drawBlue(row, column, cell){
  if(row > 0 && row < 4 && column > 0 && column < 8 && column !== 4 && !(row === 2 && column === 2) && !(row === 2 && column === 6) || (row === 2 && column === 9)){
    cell.classList.add("blue");
  }
}

function drawGreen(row, column, cell){
  if(row > 0 && row < 4 && column > 7 && column < 11 && !(row === 2 && column === 9) || (row === 2 && column === 2)){
    cell.classList.add("green");
  }
}

function drawYellow(row, column, cell){
  if(row > 0 && row < 4 && column === 4 || (row === 2 && column === 6)){
    cell.classList.add("yellow");
  }
}

const game = {
  currentAction:"",
  inventory: {
    red: 0,
    green: 0,
    blue: 0,
  },
} 

function gridEventListener(event){
  
  // checks if user clicked on cell
  if(event.target.classList.contains("grid-item")){ 
    const cell = event.target;

    //current function switch
    switch (game.currentAction) {
      case "eraser":
        if(cell.classList.contains("green")){
          cell.classList.remove("green");
          game.inventory.green++;
        } else if(cell.classList.contains("blue")){
          cell.classList.remove("blue");
          game.inventory.blue++;
        }
        break;
      case "whiteboard":
        if(cell.classList.contains("red")){
          cell.classList.remove("red");
          game.inventory.red++;
        }
        break;
      case "red":
        if(cell.classList.length === 1 && game.inventory.red > 0){
          game.inventory.red--;
          cell.classList.add("red");
        }
        break;
      case "blue":
        if(cell.classList.length === 1 && game.inventory.blue > 0){
          game.inventory.blue--;
          cell.classList.add("blue");
        }
        break;
      case "green":
        if(cell.classList.length === 1 && game.inventory.green > 0){
          game.inventory.green--;
          cell.classList.add("green");
        }
        break;
    
      default:
        break;
    }
    
  }

  updateCountersUI();

}

function updateCurrentAction(event){
  game.currentAction = event.target.id;
  
  //Remove selected-action style class from all elements
  eraserTool.classList.remove("selected-action");
  whiteboardTool.classList.remove("selected-action");
  redColorSquare.classList.remove("selected-action");
  blueColorSquare.classList.remove("selected-action");
  greenColorSquare.classList.remove("selected-action");

  // add style to target
  event.target.classList.add("selected-action");
}

function updateCountersUI(){
    redCounter.textContent = game.inventory.red;
    blueCounter.textContent = game.inventory.blue;
    greenCounter.textContent = game.inventory.green;
}