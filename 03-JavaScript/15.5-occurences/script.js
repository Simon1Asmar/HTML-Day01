function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");

//The bug was in line 5, counter + 1 wasnt actually changing the value of counter
// counter + 1;

//i put a break point next to the call to the function at line 10
// and started stepping in using the debugger tool
// in the scopes section the value of counter can be seen not changing
// it stayed counter = 0
// so the solution was to make it affect the value on the change variable by making it counter += 1;