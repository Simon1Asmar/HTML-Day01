// Question 1:
// In your own words what will this point to and why?
// (Note this is the global scope)
console.log(this);
//ANSWER
// when in the global space using "this" refers to the window

// ---

// Question 2:
const myObj = {
  name: "Timmy",
  // greet: () => {
  //   console.log(`Hello ${this.name}`);
  // },
  //The FIX
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
// a. In your own words what will this point to and why?
//before running: i believe since it's an arrow function it will say name is undefined
//after running: this.name is an empty string so the output was "Hello "
// b. How can you fix this code?
// in order to solve this i'd make it a normal function not an arrow function

// ---

// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};
//ANSWER
myFuncDec();
// when this function is called the this refers to the window because that's what's outside the scope of the function

// ---

// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
//ANSWER
// i also believe the this will point to the window object
// correct. for the same reason when a function is in the global scope, the "this" that's inside it refers to the window

// ---

// Question 5:
// document.querySelector(".element").addEventListener(() => {
//   console.log(this);
// });
// a. In your own words, what will this point to and why?
// before running: i dont have aything in the html file with class .element so it's not sellecting anything
// yes it gives an error because it's trying to add an event listener to a null object
// b. How can you fix this code?
// i added an a button and gave it a class "element"
// now i'm getting a different error because eventListener requires 2 arguments not 1
document.querySelector(".element").addEventListener("click", () => {
    console.log(this);
});
// now after i added the first argument which is "click" what happens is "this" also refers to the window