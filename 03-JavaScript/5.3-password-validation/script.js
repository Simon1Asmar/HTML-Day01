let password = prompt("Enter Password");

console.log("1. Using if: " + usingIf(password));
console.log("2. Using ternary: " + usingTernary(password));
console.log("3. Using &&: " + usingAnd(password));
console.log("3. advanced password: " + advancedPassword(password));

// 1. function using if/else conditional expression
function usingIf(password) {
  let message;
  if (password.length >= 7) {
    message = "Strong";
  } else {
    message = "Weak";
  }

  return message;
}

// 2. function using a ternary conditional expression
function usingTernary(password) {
  let message = password.length >= 7 ? "Strong" : "Weak";
  return message;
}

// 3. uses && logical operator
function usingAnd(password) {
  let message;

  if (password.indexOf("password") === -1 && password.length >= 7) {
    message = "Strong";
  } else {
    message = "Weak";
  }

  return message;
}

// 4. Advanced Password Function
function advancedPassword(password) {
  // This regular expression is for checking if there's at least one uppercase letter in the password
  const pattern = new RegExp(
    "(?=.*[A-Z])"
  );

  let message = password.length < 7 ? "Weak" : ( pattern.test(password)===true ? "Very Strong" : "Strong");

  return message;
}
