function removeDuplicates(array) {
  const uniqueValuesArray = [];

  for (value in array) {
    if (uniqueValuesArray.indexOf(array[value]) === -1) {
      uniqueValuesArray.push(array[value]);
    }
  }

  return uniqueValuesArray;
}

const arrayOfNums = [1, 2, 3, 22, 2, 12, 1, 80, 80, 80, 22];
console.log("arrayOfNums", arrayOfNums);
const arrayOfUniqueNums = removeDuplicates(arrayOfNums);
console.log("arrayOfUniqueNums", arrayOfUniqueNums);
