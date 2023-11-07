import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood} from "./food.js"
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

//Game Loop
function main(currentTime){
  if(gameOver){
    if(confirm("You lost. Press ok to restart.")){
      //sets the window location to the current page we're on (so it refreshes it)
      // window.location = "/";
      // NOT WORKING ON LOCAL HOST

      // THIS WA WORKS
      window.location.reload(true);

    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime;

  update();
  draw();
}

//we use this to start the loop
window.requestAnimationFrame(main);

function update(){
  updateSnake();
  updateFood();
  checkDeath();
}

function draw(){
  clearChildren(gameBoard); //to remove everything before redrawing

  drawSnake(gameBoard);
  drawFood(gameBoard);
}

// this function removes all children of a certain element
function clearChildren(domElement){
  while(domElement.children.length > 0){
    domElement.firstChild.remove();
  }
}

function checkDeath(){
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}