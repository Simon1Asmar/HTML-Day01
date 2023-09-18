const numOfSteps = parseInt(prompt("Enter an Integer"));

for (let i = 0; i < numOfSteps; i++) {
  let line = "";
  for (let j = 0; j < numOfSteps; j++) {
    if (j <= i) {
      line += "#";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
