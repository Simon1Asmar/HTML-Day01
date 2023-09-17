// PRIMITIVE DATA TYPES

// String
let firstName = "Simon";
console.log(firstName + " is a " + typeof firstName);

// Number
let x = 88.5;
console.log(x + " is a " + typeof x);

// Object
let game = {
  gameName: "GTA V",
  rating: 5,
  year: 2013,
};
console.log(game + " is an " + typeof game);

// Boolean
let isSleeping = false;
console.log(isSleeping + " is a " + typeof isSleeping);

// Null
let emptyVar = null;
console.log("null: " + emptyVar +", type: " + typeof null);

// Undefined
let someVar;
console.log(someVar + " is " + typeof someVar);

// Symbol
let sym1 = Symbol("something");
console.log(sym1);
console.log("symbol type: " + typeof(sym1))
