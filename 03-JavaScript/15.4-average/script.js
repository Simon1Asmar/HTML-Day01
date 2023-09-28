function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);

// The error is in line 2
// var sum;

//while stepping in using the debugger tool 
// i noticed in the scopes that the value of sum was staying "NaN" while it was supposed to be added in the forloop
// that's because sum is not initalized as a number so doing += on a null variable does nothing
// the fix was adding "= 0" at line 2