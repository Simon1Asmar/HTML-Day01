function calcArrayLength(array) {
  let length = 0;

  for (value in array){
    length++;
  }


  return length;
}

const arrayOfNums = [1, 2, 435, 2342];
console.log(calcArrayLength(arrayOfNums));

