const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

countLetters(array);



function countLetters(array){
  const letterCounter = {
    letterWithMostOccurences: "",
  }

  for (const word of array) {
    
    for(const char of word){
      console.log(char);
    }
  }

  // for (let i = 0; i<array.length; i++){
  //   for(let j=0; j<array[i].length;j++){
  //     if(/[a-z]/.test(array[]))
  //     letterCounter[array[i].charAt(j)]++;
  //   }
  // }

  console.log(letterCounter)
}
