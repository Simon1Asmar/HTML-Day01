// 1. Fill an array with 100 of the same object using the array fill method.
const array1 = [];
array1.length = 100;
array1.fill({
  name: "simon",
  lastName: "asmar",
});

console.log('array1.fill("test")', array1);

// 2. Create an array with numbers ranging from 1-100 using the Array.from method.
arrayOfNumbers = Array.from(array1, (x, i) => i + 1);
console.log("arrayOfNumbers", arrayOfNumbers);

// 3. Convert only values of an object into one array.
const bookObj = {
  name: "the 48 Laws of Power",
  author: "Robert Greene",
};
const arrayFromObject = Object.values(bookObj);
console.log("arrayFromObject", arrayFromObject);

// 4. Convert an array into one object.
const objFromArray = { ...arrayOfNumbers };
console.log("objFromArray", objFromArray);

// 5. Find out if an array is an array.
console.log(
  "Checking if Array.isArray(arrayFromObject):",
  Array.isArray(arrayFromObject)
);

// 6. Copy an array.
const arrayToCopy = ["KFC", "Popeyes", "McDonald's", "Pizza Hut", "Hardees"];
console.log('arrayToCopy', arrayToCopy)

const copiedArray1 = arrayToCopy.slice();
console.log('copiedArray1', copiedArray1)

const coppiedArray2 = arrayToCopy;
console.log('coppiedArray2', coppiedArray2)

coppiedArray2.push("Wingstop", "Sides");
console.log('coppiedArray2', coppiedArray2)
console.log('arrayToCopy', arrayToCopy)
