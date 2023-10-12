/**
 * Without running the code below, explain in your own
 * words what the result of each block of code will be and why.
 * */

console.log(`---1---`);
// var b = 1;
// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }
//   b = 5;
//   return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);
// console.log('result', result);

// firstResult will have the function saved in it with number 9 but the number isnt event used
// result will have value of 5 (CHECKED - Correct)

console.log(`---2---`);
// var a = 1;
// function b2() {
//   a = 10;
//   return;
//   function a() {}
// }
// b2();
// console.log(a);

//prediction: prints 1 since a is inside the function it wont really affect the outside a value
// checked - correct

console.log(`---3---`);
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
// i first though it might waith 100ms log 1 then wait 100ms then log 2 then wait 100ms
// however turns out the setTimeout function wont delay the loop, to the loop will reach i=3 at the end
// then after 100ms it will run the log function 3 times where i is also 3