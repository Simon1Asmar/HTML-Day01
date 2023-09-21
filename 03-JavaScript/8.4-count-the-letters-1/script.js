const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

console.log(countLetters(array));


function countLetters(array) {
  const letterCounter = {
    letterWithMostOccurences: "",
  };
  
  for (itemIndex in array) {
    for (charIndex in array[itemIndex]) {
      const currentChar = array[itemIndex].charAt(charIndex).toLowerCase();


      if (/[a-z]/.test(currentChar)) {
        if (letterCounter[currentChar] === undefined) {
          letterCounter[currentChar] = 1;

          if(letterCounter.letterWithMostOccurences.length === 0){
            letterCounter.letterWithMostOccurences = currentChar;
          }
        } else {
          letterCounter[currentChar]++;

          if(letterCounter[currentChar]>letterCounter[letterCounter.letterWithMostOccurences]){
            letterCounter.letterWithMostOccurences = currentChar;
          }
        }
      }
    }
  }

  return letterCounter;
}
