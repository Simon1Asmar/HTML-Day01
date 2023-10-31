// Referencing DOM Elements
const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password")

form.addEventListener("submit", formSubmitted);

function formSubmitted(event){
  event.preventDefault();
  if(usernameInput.value.length && emailInput.value.length && passwordInput.value.length && confirmPassword.value.length){
    if(passwordInput.value === confirmPassword.value){
      window.alert(`Username: ${usernameInput.value}\nEmail: ${emailInput.value}\nPassword: ${passwordInput.value}`);
    } else {
      window.alert("passwords do not match");
    }
  } else {
    window.alert("make sure all inputs are full");
  }

}