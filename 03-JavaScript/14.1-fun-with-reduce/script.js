const nums = [10, 5, 100, 232, 2, 1, 33];

function max(array){
  const intialValue = 0;

  const maximumNum = array.reduce((acc, currentValue) => {
    if(currentValue>acc){
      return currentValue;
    } else {
      return acc;
    }
  }, intialValue);

  return maximumNum
}
console.log('max(nums)', max(nums));

function sumOfEven(array){
  const initialValue = 0;

  const sum = array.reduce((acc, currentValue)=>{ 
    if(currentValue%2===0){
      return acc + currentValue;
    } else {
      return acc;
    }
  }, initialValue);

  return sum;
}

console.log("Sum of Even", sumOfEven(nums));

function average(array){
  const intialValue = 0;

  const sum = array.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, intialValue);

  return sum/nums.length;
}

console.log(average(nums))