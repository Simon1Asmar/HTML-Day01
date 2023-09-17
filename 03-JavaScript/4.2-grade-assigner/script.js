let grade = prompt("What is your grade in the form of a  letter? (A-F)");

grade = grade.trim().toUpperCase();

if (grade === "A") {
  console.log("90-100");
} else if (grade === "B") {
  console.log("80-89");
} else if (grade === "C") {
  console.log("70-79");
} else if (grade === "D") {
  console.log("65-69");
} else if (grade === "F") {
  console.log("0-64");
} else {
  alert("Invalid Input. You did not enter a letter from A-F");
}

let grade2 = prompt("What is your grade in numbers? (0-100)");

grade2 = parseFloat(grade2);

if (grade2 >= 0 && grade2 <= 64) {
  console.log("F");
} else if (grade2 >= 65 && grade2 <= 69) {
  console.log("D");
} else if (grade2 >= 70 && grade2 <= 79) {
  console.log("C");
} else if (grade2 >= 80 && grade2 <= 89) {
  console.log("B");
} else if (grade2 >= 90 && grade2 <= 100) {
  console.log("A");
} else {
  alert("Invalid Input. Not a number or not a number in the allowed range.");
}
