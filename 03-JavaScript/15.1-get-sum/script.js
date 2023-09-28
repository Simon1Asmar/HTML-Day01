function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3],[(5, 66, 23)]);

//The bug was in line 10
// getSum([1,2,3][5,66,23]);
// and sum was const instead of let and then we were trying to change it

/*I found it using the debugger tool in Firefox, 
i put a breaking point next to it and started stepping forward 
but once it entered the getSum method it was still showing arr1 and arr2 as undefined 
so i went back and looked at the line and saw that 
it was not sending the correct number of arguments to the function, 
it was missing a comma
and also then sum wasn't changing so i switched it to let instead of const
*/
