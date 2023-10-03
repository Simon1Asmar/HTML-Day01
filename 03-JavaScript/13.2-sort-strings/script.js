const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// Ascending order
const ascendingOrder = foods.sort();
console.log("ascendingOrder", ascendingOrder);

// Descending order
// const descendingOrder = foods.sort().reverse()
const descendingOrder = foods.sort((a, b) => {
  return b.localeCompare(a);
});
console.log("descendingOrder", descendingOrder);


//  sort an array of words that includes a word with an uppercase
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

const upperCaseAscend = foodsWithUpperCase.sort((a, b) => {
  return a.localeCompare(b);
})
console.log('upperCaseAscend', upperCaseAscend)

const upperCaseDescend = foodsWithUpperCase.sort((a, b)=>{
  return b.localeCompare(a);
})
console.log('upperCaseDescend', upperCaseDescend)


// Sort the array of strings from the longest word to the shortest word only using the sort function
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
const fromLongestToShortest = words.sort((a, b)=>{
  if(a.length > b.length){
    return -1;
  } else {
    return 1;
  }
})
console.log('fromLongestToShortest', fromLongestToShortest)