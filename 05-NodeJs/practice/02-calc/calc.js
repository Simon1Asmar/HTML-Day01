console.log("hi from calc");

// Command line argument
console.log("process.argv", process.argv);

//Way 1
// const num1 = process.argv[2];
// console.log('num1', num1)
// const operator = process.argv[3];
// console.log('operator', operator)
// const num2 = process.argv[4];
// console.log('num2', num2)

// Way 2: Deconstructing
const [num1, operator, num2] = process.argv.slice(2);
console.log("num1", num1);
console.log("operator", operator);
console.log("num2", num2);

let result = 0;

switch (operator) {
  case "+":
    result = parseInt(num1) + parseInt(num2);
    console.log(result);
    break;

  case "-":
    result = parseInt(num1) - parseInt(num2);
    console.log(result);
    break;

  // when running it in git bash run it as calc.js 6 "*" 2
  case "*":
    result = parseInt(num1) * parseInt(num2);
    console.log(result);
    break;

  // when running it in git bash run it as calc.js 2 // 3
  case "/":
    result = parseInt(num1) / parseInt(num2);
    console.log(result);
    break;

  // Extra
  case "%":
    result = parseInt(num1) % parseInt(num2);
    console.log(result);
    break;

  default:
    break;
}
