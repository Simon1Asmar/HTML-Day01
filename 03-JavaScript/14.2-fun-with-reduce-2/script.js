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
  // return arrayOfObjs.map((object) => {
  //   return object[key];
  // });

  return arrayOfObjs.reduce((acc, currentObj)=>{
    if(currentObj[key]){
      acc.push(currentObj[key])
    }
    return acc
  }, []);
}

console.log('extractOnlyValue(dogs, "age")', extractOnlyValue(dogs, "age"));

function countOnlyVowels(str) {
  // const vowelCounter = {};
  str = str.toLowerCase();
  const arrayOfChars = [...str];

  const pattern = new RegExp(/[a,e,o,u,i]/);

  // arrayOfChars.forEach((char) => {
  //   if (pattern.test(char)) {
  //     if (vowelCounter[char]) {
  //       vowelCounter[char]++;
  //     } else {
  //       vowelCounter[char] = 1;
  //     }
  //   }
  // });

  const vowelCounter = arrayOfChars.reduce((acc, currentChar)=>{
    if(pattern.test(currentChar)){
      //just learned this
      //if the value of acc[currentChar] exists it returns the value then increments one
      //else if it does not exist it returns 0 then increments 1 to it
      //this saves time
      acc[currentChar] = (acc[currentChar] || 0) + 1; 
    }
    return acc;
  }, {})

  return vowelCounter;
}
let testStr = "for some reason I really believe i already did this assignment before but i cant find it."
console.log('countOnlyVowels(testStr)', countOnlyVowels(testStr))

function addKeyAndValue(arrayOfObjs, key, value) {
  // arrayOfObjs.forEach((obj) => {
  //   obj[key] = value;
  // });
  arrayOfObjs=arrayOfObjs.reduce((acc, currentObj)=>{
    currentObj[key] = value;
    acc.push(currentObj);
    return acc;
  },[])

  return arrayOfObjs;
}
console.log('addKeyAndValue(dogs,"owner", "John Doe")', addKeyAndValue(dogs,"owner", "John Doe"))
