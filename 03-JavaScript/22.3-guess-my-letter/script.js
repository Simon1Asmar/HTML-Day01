const letters = "abcdefghijklmnopqrstuvwxyz"
let randomLetter;
const guessedLetters = [];

//selecting dom elements
const pKeysGuessed = document.querySelector("#keys-guessed");
const guessFeedback = document.querySelector("#guess-feedback");
const sectionPlayAgain = document.querySelector("#play-again-section");
const letterSection = document.querySelector("#letter-section");
const correctLetter = letterSection.querySelector("p");
const playAgainForm = document.querySelector("#play-again-form");

StartNewGame();

function StartNewGame(){
  Reset();
  generateRandomLetter();

  // adds keydown key listener
  document.body.addEventListener("keydown", keydownEventListener);
}

function Reset(){
  //collapse play again section
  sectionPlayAgain.classList.add("collapsed");

  //reset guess feedback paragraph
  guessFeedback.innerText = `Guess a key`;
  guessFeedback.classList.remove("greenText", "redText");

  //reset pKeysGuessed
  pKeysGuessed.innerText = "";  
  //reset guessedLetters array
  guessedLetters.length = 0;
  
  //resetCorrectLetter
  correctLetter.innerText = "?";
  letterSection.classList.remove("greenText");
}

//generates a random letter
function generateRandomLetter(){
  randomLetter = letters[Math.floor(Math.random() * letters.length)];
}

function keydownEventListener({key}){
  let currentGuess = key.toLowerCase();
  //check if user clicked a letter key
  if(letters.includes(currentGuess)){
    console.log(currentGuess);
    //if the user didn't guess this letter before, add it to the guessed letters array
    if(!guessedLetters.includes(currentGuess)){
      guessedLetters.push(currentGuess);
      pKeysGuessed.innerText += `${currentGuess}, `;
      guessFeedback.classList.add("redText");
      guessFeedback.classList.remove("greenText");

      // tell user if guess is wrong and sets it's color to red
      if(currentGuess!==randomLetter){
        guessFeedback.innerText = `Nope, it's not ${currentGuess}`
        guessFeedback.classList.add("redText");
        guessFeedback.classList.remove("greenText");
      } else {
        guessFeedback.innerText = `Correct it's ${currentGuess}!`
        guessFeedback.classList.remove("redText");
        guessFeedback.classList.add("greenText");
        
        letterSection.classList.add("greenText");
        correctLetter.innerText = `${currentGuess}`

        //stop event listener
        document.body.removeEventListener("keydown", keydownEventListener);

        sectionPlayAgain.classList.remove("collapsed");
      }

    } else {
      //display message that the current letter has already been guessed
      guessFeedback.innerText = `You already guessed ${currentGuess}`
      guessFeedback.classList.add("redText");
    }
  } else {
    //If the user types a non-alphabetical letter, display a message that this is not allowed.
    guessFeedback.innerText = `${currentGuess} is not a letter`
    guessFeedback.classList.add("redText");
  }
}

playAgainForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  StartNewGame();
})