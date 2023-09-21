const string = "The more you know, the more you know that you don't know";
console.log('string', string)

console.log("Using .lastIndexOf(\"you\")", string.lastIndexOf("you"));

//part 2 do it using indexOf();
console.log('custom functin: getLastIndexOf(string, "you")', getLastIndexOf(string, "you"))

function getLastIndexOf(sentence, part){
  let lastIndexOf = sentence.indexOf(part);

  for(let i = 0; i<sentence.length; i++){
    if(sentence.indexOf(part, i) != -1){
      // console.log(sentence.indexOf(part, i));
      lastIndexOf = sentence.indexOf(part, i);
    }
  }

  return lastIndexOf;
}