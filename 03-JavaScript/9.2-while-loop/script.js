let isGuessCorrect = false;

let min = 0;
let max = 50;
let randomNum = Math.round(Math.random() * (max - min) + min)

while (!isGuessCorrect) {
  let guess = prompt("Guess the number. (0-50)");

  guess = parseInt(guess);

  if(guess === randomNum){
    isGuessCorrect=true;
    console.log("Correct! The answer was " +randomNum);
  } else if(guess > randomNum){
    console.log(guess + " is too high");
  } else {
    console.log(guess + " is too low");
  }
}
