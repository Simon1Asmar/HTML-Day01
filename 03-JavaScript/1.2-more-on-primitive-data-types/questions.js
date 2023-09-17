/*--Delete the wrong answers--
1. Which of the following is/are strings?
c) '4'

2. Which of the following is/are numbers?
a) 4
b) 4.0
d) -4 

3. Which of the following is/are booleans?
a) true
b) false

4. What is the result of 80 + 71.2?
a) 151.2

5. What is the result of "80" + 71.2?
c) "8071.2"

6. Does 100 + 30 produce a number or a string?
a) number

7. Does "100" + 30 produce a number or a string?
b)string
*/

//------Submit your answers under the question------//

//create three different ways to declare variables
const firstVar = 1;
let secondVar = 1;
var thirdVar = 1;

//declare a variable and reassign a value to it
let varToReassign = "S";
console.log(varToReassign);
varToReassign = 2.5;
console.log(varToReassign);

//create a variable and after that assign a string with its value being: He's got it!
let x;
x = 'He\'s got it!';
console.log(x);

/*
1. create a variable and assign a value on how
much a restaurant bill is.
2. create a variable and assign a value on how
much tax they should pay.
3. create a variable that will calculate the bill
* tax and its output would be: Your total bill is
<total bill> $.
*/
let bill = 75.5;
let tax = 0.17;
let totalBill = (bill + tax * bill).toFixed(2);
console.log(`Your total bill is ${totalBill} $`);
console.log(`Your total bill is ${(bill + tax * bill).toFixed(2)} $`);

// Round the number 50.6 to its nearest integer
let num1 = 50.6;
num1 = Math.round(num1);
console.log(num1);

//Create a variable that is undefined
let uVar;
console.log(uVar);
