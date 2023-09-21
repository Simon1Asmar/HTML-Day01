/*
JavaScript - Declaring Functions

The following exercise contains the following
subjects:

* functions Instructions
* Please reformat the following function declarations to function expression.
* Please reformat the following function expressions to function declarations.

  Submit the file to Hive
*/

// From function declarations to function expressions
/*
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}
*/

const welcome = () => { return "Welcome to Appleseeds Bootcamp!"};
console.log(welcome());

const myNumber1 = (a) => Math.pow(a, 2);
console.log(myNumber1(3));

const myNumber2 = (a, b = 5) => a + b;
console.log(myNumber2(3)); // 3 + 5 (default)
console.log(myNumber2(3, 3)); //3 + 3

// From function expressions to function declarations
/*
const hello = () => "Hello!";
const squareRoot = (a) => Math.sqrt(a);
const randomNumbers = (a, b) => Math.random() * (a - b) + b;
*/

function hello() {
  return "Hello!";
}
console.log(hello());

function squareRoot(a) {
  return Math.sqrt(a);
}
console.log("Square Root: " + squareRoot(9));

function randomNumbers(a, b) {
  return Math.random() * (a - b) + b;
}
console.log(randomNumbers(1, 2));