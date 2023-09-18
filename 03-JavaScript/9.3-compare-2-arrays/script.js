const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

console.log(checkIfIncludeSameValue(food1, food2));

const names1 = ["mary", "mike"];
const names2 = ["matt", "devon"];
console.log(checkIfIncludeSameValue(names1, names2));

function checkIfIncludeSameValue(array1, array2) {
  let isSameValuePresent = false;

  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) != -1) {
      console.log(true + " " + food1[i]);
      isSameValuePresent = true;
      break;
    }
  }

  return isSameValuePresent;
}
