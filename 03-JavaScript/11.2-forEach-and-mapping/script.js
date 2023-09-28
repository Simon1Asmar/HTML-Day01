const nums = [12, 1, 26, 237, 66, 0, 9];
console.log('nums', nums)

//this function doubles the values using the map method
function doubleValues(arrayOfInts){
  return arrayOfInts.map((num) => {
    return num*2;
  });
}



// this function doubles the calues using the forEach method
function doubleValues2(arrayOfInts){
  const arrayOfDoubles = [];

  arrayOfInts.forEach(num => {
    arrayOfDoubles.push(num*2);
  });

  return arrayOfDoubles;

}

console.log("1. double (map):", doubleValues(nums));
console.log("1. double (forEach):", doubleValues2(nums));

// takes array and returns new array with only with even values
function onlyEvenValues(arrayOfNums){
  const arrayOfEvens = [];

  arrayOfNums.forEach(num => {
    if(num%2 === 0){
      arrayOfEvens.push(num);
    }
  });

  return arrayOfEvens;
}

console.log("2. even values (forEach)", onlyEvenValues(nums));

// takes an array and returns an array of the first and last elements as strings
function showFirstAndLast(array){
  const firstAndLast = [];
  array.forEach((element, index) => {
    if(index === 0 || index === array.length-1){
      firstAndLast.push(element.toString());
    }
  });

  return firstAndLast;
}

console.log("3. first and last (forEach): ", showFirstAndLast(nums));

//accepts string as an argument and returns an object containing vowels and a counter for how many times they appeared in the string
function vowelCount(str){
  str = str.toLowerCase();
  const regexPattern = new RegExp(/[aeiou]/);
  
  const arrayOfChars = str.split("");
  const vowelsCounterObj = {};

  arrayOfChars.forEach(char => {
    if(regexPattern.test(char)){
      if(vowelsCounterObj[char]===undefined){
        vowelsCounterObj[char] = 1;
      } else {
        vowelsCounterObj[char]++;
      }
    }
  })

  return vowelsCounterObj;
} 

console.log('4. vowelCount: "Hello my name is Simon Asmar" (forEach)', vowelCount("Hello my name is Simon Asmar"));

// takes in a string and returns it 
function capitalize(str){
  //[...str] is another way to turn a string into an array
  return [...str].map(char => {
    return char.toUpperCase();
  }).join("");
}

console.log('capitalize("heLlo")', capitalize("hello world"));

// console.log(String.fromCharCode(("z".charCodeAt()+1)))
//This function 
function shiftLetters(str){
  const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const alphabetsUpperCase = alphabets.map(char => {
    return char.toUpperCase();
  })

  const pattern = new RegExp(/[a-zA-Z]/);

  return [...str].map((char)=>{
    if(!pattern.test(char)){
      return char;
    } else {
      if(char === char.toLowerCase()){
        if(char === "z"){
          return alphabets[0];
        } else {
          return alphabets[alphabets.indexOf(char)+1];
        }
      } else if(char === char.toUpperCase()) {
        if(char === "Z"){
          return alphabetsUpperCase[0];
        } else {
          return alphabetsUpperCase[alphabetsUpperCase.indexOf(char)+1];
        }
      } 
    }
  }).join("");

}

console.log(shiftLetters("Hello my name is Simon"));

//makes every other word capitalized
function swapCase(str){
  return (str.split(" ")).map((word, index) => {
    if(index%2 === 0){
      return capitalize(word);
    } else {
      return word;
    }
  }).join(" ");
}

console.log(swapCase("Hello this is a string that's supposed to have every other word capitalized"));