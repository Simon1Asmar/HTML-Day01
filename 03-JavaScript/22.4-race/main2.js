const player1Race = document.querySelector("#player1-race");
const player2Race = document.querySelector("#player2-race");
const gameOverSection = document.querySelector("#game-over");
const winMsg = document.querySelector("#win-msg")
const playAgainForm = document.querySelector("form");

startNewGame();

function keyUpListener({ key }){
  //checks if d or D to avoid issues if capslock is on
  if (key === "d" || key === "D") {
    // move player 1
    moveRight(player1Race);
  } else if (key === "ArrowRight") {
    // move player 2
    moveRight(player2Race);
  }
}

function moveRight(playerRace) {
  //gets the current active element
  const currentActiveElement = playerRace.querySelector(".active");
  if (currentActiveElement) {
    //gets the next element sibling
    const nextActiveElement = currentActiveElement.nextElementSibling;
    if (nextActiveElement) {
      //removes the active class from current active element
      currentActiveElement.classList.remove("active");
      //adds active class to sibling
      nextActiveElement.classList.add("active");

      if(nextActiveElement.parentElement.lastElementChild === nextActiveElement){

        winMsg.innerText = `Player ${(playerRace.id).charAt(6)} Won!`

        gameOver();
      }
    }
  }
}

function gameOver(){
  // stop keylistenet
  document.body.removeEventListener("keyup", keyUpListener);

  // displays winner and offers to restart game
  gameOverSection.classList.remove("collapsed");

  // adds event listener to the play again form
  playAgainForm.addEventListener("submit", startNewGame);
}

function startNewGame(event){
  if(event){
    //stop form from refreshing page
    event.preventDefault();
  }

  //reset
  reset();

  //add keyup listener to body
  document.body.addEventListener("keyup", keyUpListener);
}

function reset(){
  // reset active cells
  const activeCellElements = [...document.getElementsByClassName("active")];
  activeCellElements.forEach((element)=>{
    element.classList.remove("active");
  });
  player1Race.firstElementChild.classList.add("active");
  player2Race.firstElementChild.classList.add("active");

  // Hide game over section
  gameOverSection.classList.add("collapsed");

  // remove event listener from play again form
  playAgainForm.removeEventListener("submit", startNewGame);
}