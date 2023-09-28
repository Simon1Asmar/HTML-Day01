function getSumOfEven(arr) {
  return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

//The error was in line 2 and 4
//in line 2 it was trying to access array index 10
// return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
//while in line 4 it was giving it an array with length===10 which means the last index is 9

// found it by putting a breakpoint next to the call to the function at line 4 and stepping in
// i kept paying attention to the "Scopes" section in the debugger tool and it used to return NaN
// then i ran the debugger again and once it was on line 2 i hovered my mouse over the indexes
// when i hovered over the 10 in arr[10] it showed me that it was undefined
// there is no item with index===10 in the array being sent
//so in line 4 i added another item to the array