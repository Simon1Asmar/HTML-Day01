const dogs = [
  {
    breed: "german shepherd",
    age: 3,
  },
  {
    breed: "husky",
    age: 1.5,
  },
  {
    breed: "german shepherd",
    age: 11,
  },
  {
    breed: "rottweiler",
    age: 6,
  },
];

// takes an array of objects and a key and returns an array of values
function extractOnlyValue(arrayOfObjs, key) {
  return arrayOfObjs.map((object) => {
    return object[key];
  });
}

console.log('extractOnlyValue(dogs, "age")', extractOnlyValue(dogs, "age"));

function countOnlyVowels(str) {
  const vowelCounter = {};
  str = str.toLowerCase();
  const arrayOfChars = [...str];

  const pattern = new RegExp(/[a,e,o,u,i]/);

  arrayOfChars.forEach((char) => {
    if (pattern.test(char)) {
      if (vowelCounter[char]) {
        vowelCounter[char]++;
      } else {
        vowelCounter[char] = 1;
      }
    }
  });

  return vowelCounter;
}
let testStr = "for some reason I really believe i already did this assignment before but i cant find it."
console.log('countOnlyVowels(testStr)', countOnlyVowels(testStr))

function addKeyAndValue(arrayOfObjs, key, value) {
  arrayOfObjs.forEach((obj) => {
    obj[key] = value;
  });

  return arrayOfObjs;
}
console.log('addKeyAndValue(dogs,"owner", "John Doe")', addKeyAndValue(dogs,"owner", "John Doe"))
