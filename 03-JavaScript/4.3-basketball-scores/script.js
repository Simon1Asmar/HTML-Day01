// JOHN'S TEAM
let johnScore1 = 89;
let johnScore2 = 120;
let johnScore3 = 121;

let johnAvg = (johnScore1 + johnScore2 + johnScore3) / 3;
console.log("John's team's Average Score: " + johnAvg);

// MIKE'S TEAM
let mikeScore1 = 110;
let mikeScore2 = 94;
let mikeScore3 = 123;

let mikeAvg = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
console.log("Mike's team's Average Score: " + mikeAvg);

// MARY'S TEAM
let maryScore1 = 116;
let maryScore2 = 94;
let maryScore3 = 123;

let maryAvg = (maryScore1 + maryScore2 + maryScore3) / 3;
console.log("Mary's team's Average Score: " + maryAvg);

// CHECKING WINNER
let winnerAvg;
let winnerName;
let isDraw = false;

// First I set mike as the winner
winnerAvg = mikeAvg;
winnerName = "Mike's Team";

// Here I checked if john's avg is greater than the winner's avg then he'd become the winner
// If his average is equal to the winner's average it's classified as a draw
if (johnAvg > winnerAvg) {
  winnerAvg = johnAvg;
  winnerName = "John's Team";
  isDraw = false;
} else if (johnAvg === winnerAvg) {
  isDraw = true;
  winnerName += " and John's Team";
}

if (maryAvg > winnerAvg) {
  winnerAvg = maryAvg;
  winnerName = "Mary's Team";
  isDraw = false;
} else if (maryAvg === winnerAvg) {
  isDraw = true;
  winnerName += " and Mary's Team";
}

// if its a draw it prin't the draw message, if there's one winner it prints that message
if (isDraw) {
  console.log(`Draw between ${winnerName}, Avg: ${winnerAvg}`);
} else {
  console.log(winnerName + "'s team wins on average. Avg: " + winnerAvg);
}