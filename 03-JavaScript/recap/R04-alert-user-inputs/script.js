// Referencing DOM Elements
const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", formSubmitted);

function formSubmitted(event){
  event.preventDefault();
  if(usernameInput.value.length && emailInput.value.length && passwordInput.value.length){
    //visual feedback
    usernameInput.classList.remove("invalid-input");
    emailInput.classList.remove("invalid-input");
    passwordInput.classList.remove("invalid-input");

    

    window.alert(`Username: ${usernameInput.value}\nEmail: ${emailInput.value}\nPassword: ${passwordInput.value}`);
  } else {
    //visual feedback
    if(!usernameInput.value.length){
      usernameInput.classList.add("invalid-input");
    } else {
      usernameInput.classList.remove("invalid-input");
    }

    if(!emailInput.value.length){
      emailInput.classList.add("invalid-input");
    } else {
      emailInput.classList.remove("invalid-input");
    }

    if(!passwordInput.value.length){
      passwordInput.classList.add("invalid-input");
    } else {
      passwordInput.classList.remove("invalid-input");
    }
  }

}