/*
Your Task: Edit the storm object. Invoke the printSuperPower
function using the storm object as the context of the function.
So your output should be: my superpower is flying.
Well, Storm also controls the weather, so, whatever you
choose!

You cannot change the printSuperPower function
*/

const storm = {
  //since the "this" inside the printSuperPower wouth be pointing to the window
  //inside this storm object i created a super power variable
  superPower: "flying",
  //then here printSuperPower1 copies the printSuperPower that's outside
  printSuperPower1: printSuperPower,
  //now it will have the same code and since this function is inside the storm object, the this will be refering to the storm object
  //so the this.superPower is the same as storm.superPower which is "flying"
  //so the output will be correct "my super poer is flying"
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.printSuperPower1()
