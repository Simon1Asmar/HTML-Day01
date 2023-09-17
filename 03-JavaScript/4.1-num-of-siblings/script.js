

let numSiblings = prompt("How many siblings do you have?");

numSiblings = parseInt(numSiblings);

if(numSiblings === 1){
  console.log(numSiblings + " sibling");
} else if (numSiblings > 1){
  console.log(numSiblings +" siblings");
} else {
  console.log("No siblings");
}

/* 
We should use === because it makes sure that the type of the variable is the same
"1" is a string
while 1 is a number
eventhough "1" == 1 is true, they don't really have the same type and it could get confusing later on
so it's better to use === and check everything correctly with their types
*/