const btn = document.querySelector("button");
const ageInputField = document.querySelector("input");
const h1 = document.querySelector("h1");
h1.classList.add("collapsed");

btn.addEventListener("click", ()=>{
  let age = parseInt(ageInputField.value);

  h1.classList.remove("collapsed");

  if(isNaN(age)){
    h1.innerText = "Please enter a valid age"
    h1.style.color = "red";
  } else {
    if(age >= 18){
      h1.innerText = "You can drink!"
      h1.style.color = "green";
    } else {
      h1.innerText = "you\'re too young"
      h1.style.color = "red";
    }
  }
  console.log(`${ageInputField.value}`);

  
})