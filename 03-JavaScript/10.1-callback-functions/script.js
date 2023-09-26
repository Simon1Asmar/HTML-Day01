/*
  1. Write a function called ‘isString’ that receives 2 arguments,
  a string and a callback function. The function checks that
  the string is indeed a string. If the string is a string, pass
  the string to a callback function that logs that string to the
  console.
*/

function isString (str, func){
  if(typeof(str) === "string"){
    func(str)
  }
}

function logString(str){
  console.log(str);
}

// isString ("hello", function(string){
//   console.log(string);
// })
isString("hello", logString);
isString(6, logString);


/*
  2. Create a function called ‘firstWordUpperCase’ that
  receives 2 arguments, a string and a callback function.
  The function will capitalize the first word in the sentence
  and pass the string to a callback function which will create
  dashes between the words.
*/

function firstWordUpperCase(str, func){
  // str = str.trim();
  // str = str.charAt(0).toUpperCase() + str.slice(1);
  str = str.slice(0, str.indexOf(" ")).toUpperCase() + str.slice(str.indexOf(" "));
  
  func(str);
}

function createDashesBetween(str){
  str = str.split(" ").join("-");
  console.log(str);
}

firstWordUpperCase("my name is simon", createDashesBetween);

/*
3. Call the ‘firstWordUpperCase’ function with a callback of your choice.
*/

function strToArrayofWords(str){
  let arrayOfWords = str.split(" ");
  console.log(arrayOfWords);
}

firstWordUpperCase("testing relplace char", strToArrayofWords)

/*
  4. Create your own function that will receive from one of its
  arguments a callback function.
*/

function calculateTotalPrice(price, taxPercentage, func){
  return price + func(price, taxPercentage);
}

function calcTaxFunc(price, taxPercent){
  return price * taxPercent;
}

console.log(calculateTotalPrice(50, 0.17, calcTaxFunc))


// Test For Me
function replaceAllChars(str){
  return function(oldChar, newChar){
    return str.split(oldChar).join(newChar);
  }
}

const stringToEdit = "this is the string i want to test on"
const replaceCharsOfString1 = replaceAllChars(stringToEdit);
// console.log('spacesToUnderscored', replaceCharsOfString1(" ", "_"))
