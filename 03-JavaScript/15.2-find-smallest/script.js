function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2);

//The bug was that the name of the function was written wrong on line 10
// findSmalest(52, 66, 2);

//I saw it by using the debugger tool in firefox
// it was underlined with red showing there's an error also when i put a breakingpoint next to it and tried to step it didnt go to the function
// so i hovered my mouse over it and it said "ReferenceError: findSmallest is not defined"
// that made me notice that the way it's written in line 10 is wrong and switched it to findSmallest(...) instead
