/**
 * Without running the code below, explain in your own words
 * what the result of each block of code will be and why.
 * If there are any faulty outputs, please write on how we can fix
 * them
 */

console.log(`---1---`);
// var x = 10;
// console.log(x);
// if (true) {
//   var x = 20;
//   console.log(x);
// }
// console.log(x);
/**
 * my perditction:
 * first it will print 10
 * then it will print 20
 * then it will print 20 again because x gets hoisted outside of the scope
 *
 * checked - correct
 */

console.log(`---2---`);
// var x = 10;
// console.log(x);
// if (true) {
//   (function () {
//     var x = 20;
//     console.log(x);
//   })();
// }
// console.log(x);

//Prediction: 10, 20, 10 (correct)
// because the second one is hoisted outside the scope of the function
// but not outside of the scop of the if statement

console.log(`---3---`);
// var x = 10;
// console.log(x); //prints 10
// function test() {
//   var x = 20; // gets hoisted outside of this (test) scope
//   console.log(x); //prints 20
//   if (x > 10) {
//     // true since the x above it is 20 (20>10)
//     let x = 30; // (wrong): gets hoisted outside the if statement scope
//     //correction: didnt notice it's a let not a var so it does  not get hoisted outside
//     console.log(x); //prints 30
//   }
//   console.log(x); //  prints 30
// }
// test();
// console.log(x); // prints 20

// prediction 10, 20, 30, 30, 20 (wrong)
// correct output : 10, 20, 30, 20, 10
// since the hoisting is happening inside the function it doesnt actually affect the original value of x that's outside the function
// and the 4th output is 20 not 30 because it's a let not a var so it doesnt get hoisted

console.log(`---4---`);
var x;
x = 10;
function test() {
  var x;
  if (x > 20) {
    x = 50;
  }
  console.log(x);
}
test();

// my prediction is var x that's inside the test function stays undefined and it prints undefined
// checked it's correct
