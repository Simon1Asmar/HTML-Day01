/**
 * Without running the code below, explain in your own
 * words what the result of each block of code will be and why.
 */

console.log(`---1---`);
// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a);
//   })(1);
// })(0);

// this creates and invokes a function immediatley and sends 0 as the a value
// inside it is also an imediatley invoked function so it logs 0 (a), b is not used
// correct

console.log(`---2---`);
// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// })();

// prediction: wil print 1 then 0
// because inside the if statement it creates a new variable called count and sets its value to 1
// but on the line after it, it logs the original count variable which is equal to 0
//Correct

console.log(`---3---`);
// var module = (function () {
//   var foo = "foo";
//   function addToFoo(bam) {
//     foo = bam;
//     return foo;
//   }
//   var publicInterface = {
//     bar: function () {
//       return "bar";
//     },
//     bam: function () {
//       return addToFoo("bam");
//     },
//   };
//   return publicInterface;
// })();
// console.log(module.bar());
// console.log(module.bam());

// module variable has an imediate function inside it that returns the public interface
// public interface is an object with 2 keys: bar and bam
// first key bar has a function in it that returns the word "bam" so that's what the first log will show
// the 2nd key: bam has a function that returns addToFoo("bam") which is another function that returns the string sent to it in the parameter
// so it will print "bam"

console.log(`---4---`);
// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++;
//   }
//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message);
//   }
//   return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();

// (WRONG) this will increase count to 3 and log "count is 3"
// Correction this increments 3 but the message variable takes the original value count is 0
// and it doesnt get updated
// inorder to fix that we would have to put the let message = "count is ${count}" inside the log function

console.log(`---5---`);
// var x = 10;
// console.log(x); //logs 10
// if (true) {
//   (function () {
//     var x = 20;
//     console.log(x); // logs 20
//   })();
// }
// console.log(x); //logs 10

// (correct) first logs 10,
// then inside the function is logs 20 but it doesnt affect the outside value of x
// because its being done inside a function
// so then it logs the original unchanged value of x which is 10
// (10,20,10)

console.log(`---6---`);
// var x = 10;
// console.log(x); //logs 10
// function test() {
//   var x = 20;
//   console.log(x); // logs 20
//   if (x > 10) {
//     let x = 30;
//     console.log(x); // logs 30
//   }
//   console.log(x); // logs 20
// }
// test();
// console.log(x); // logs 10

// (Correct): this will log 10, 20, 30, 20, 10
// it would've logged 10, 20, 30, 30, 10 if the x inside the if statement was a "var" not a "let"

console.log(`---7---`);
// var x;
// x = 10;
// function test() {
//   var x;
//   if (x > 20) {
//     x = 50;
//   }
//   console.log(x);
// }
// test();

// (CORRECT) this will log "undefined" for x because it's not being given a value
// var x; x is undefined... the if statement if(x>20) wont be true because x is undefined
// it logs the x that is inside the function which is undefined

console.log(`---8---`);
// function test() {
//   var x, y; //x and y are undefined
//   if (false) { // if false wont even run the code inside it
//     x = 50;
//   }
//   console.log(x); //undefined
//   console.log(y);//undefined
//   y = 100;
//   console.log(y); //100
// }
// test();

// (CORRECT) this will log undefined, undefined, 100
// first they were both undefined. x's value never got changed because the if statement is false
// the y value changed to 100 thats why in the end it logs 100


console.log(`---9---`);
// function test() {
//   foo();
//   bar();
//   function foo() {
//     console.log("foo");
//   }
//   var bar = function () {
//     console.log("bar");
//   };
// }
// test();

//(CORRECT)
// this will first log "foo"
// then when it tries to invoke bar() i believe it will give an error 
// because bar is a variable containing a function but it gets defined later
// so in the beginning of the function it knows theres a hoisted variable called bar but it's still undefined ... not a function
// it later becomes defined as a function