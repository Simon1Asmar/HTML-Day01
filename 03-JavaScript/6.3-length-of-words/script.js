const favoriteTvShows = ["Power", "Martin", "Chappelle Show", "Breaking Bad", "Game of thrones"];

//Without using loop
const numOfChars = [
  favoriteTvShows[0].length, 
  favoriteTvShows[1].length, 
  favoriteTvShows[2].length, 
  favoriteTvShows[3].length, 
  favoriteTvShows[4].length, 
];

console.log("Without using a loop (manually)", numOfChars);

//USING A LOOP
arrayOfCharNums(favoriteTvShows);

function arrayOfCharNums(array){
  const output = []
  for(let i=0; i<array.length; i++){
    output.push(array[i].length);
  }

  console.log("Using a loop", output);
}