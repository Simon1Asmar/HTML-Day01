const people = ["Greg", "Mary", "Devon", "James"];
console.log("original", people);

// 1. Write the command to remove "Greg" from the array.
// Shift removes from the begnning of the array
people.shift();
console.log("shift()", people);

// 2. Write the command to remove "James" from the array.
people.pop(); // removes from the end
console.log("pop()", people);

// 3. Write the command to add "Matt" to the front of the array.
people.unshift("Matt"); //adds to the front of the array
console.log('unshift("Matt")', people);

// 4. Write the command to add your name to the end of the array.
people.push("Simon"); //
console.log('push("Simon")', people);

// 5. Write the command to make a copy of the array using a slice. The copy should NOT include "Mary" or "Matt".
let peopleCopy = people.slice(2);
console.log("copy slice", peopleCopy);

// 6. Write the command that gives the indexOf where "Mary" is located.
console.log('Index of "Mary" in the people array is', people.indexOf("Mary"));

// 7. Write the command that gives the indexOf where "Foo" is located. What is returning? Why?
console.log(
  'the indexOf "Foo" is',
  people.indexOf("Foo"),
  "because it doesn't exist in the array"
);

// Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie"
people.length = 0; //This empties the array
people.push("Greg", "Mary", "Devon", "James"); //here I'm pushing back the original values
people.splice(2, 1, "Elizabeth", "Artie"); //splice starting at Devon's index (2) deletes 1 item and adds Elizabeth and Artie
console.log("After splice", people);

const withBob = people.concat("Bob");
console.log("withBob", withBob);
