const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const emailInput = document.querySelector("#email");

const submitBtn = document.querySelector("button[type='submit']");
const form = document.querySelector("#form-section form");

//gets the sections
const formSec = document.querySelector("#form-section");
const changeSec = document.querySelector("#success-section");

const infoObj = {};
const inputs = [nameInput, ageInput, emailInput];

inputs.forEach((input) => {
  //{target} gets only event.target instead of the whole event (e structuring)
  input.addEventListener("input", ({ target }) => {
    // more structuring: grabs the name and value of the target
    const { name, value } = target;
    infoObj[name] = value;
  });
});

form.addEventListener("submit", (e) => {
  console.log(infoObj);
  e.preventDefault(); //prevents the form from refreshing the page
  if (
    confirm(`By pressing \"Ok\" you'er confirming that the following data is correct:\n\tName: ${infoObj["name"]}\n\tAge: ${infoObj["age"]}\n\tEmail: ${infoObj["email"]}`)
  ) {
    changeSec.classList.remove("collapsed");
    formSec.classList.add("collapsed");
  }
});

const changeForm = document.querySelector("#change-form");
changeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  changeSec.classList.add("collapsed");
  formSec.classList.remove("collapsed");
});
