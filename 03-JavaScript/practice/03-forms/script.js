// put all form information inside an opbect
const formData = {}

const input = document.querySelector("input");
input.addEventListener("input",(e)=>{
  formData["username"] = e.target.value;
  console.log('formData', formData)
})

const section = document.querySelector("section");
const btn = document.getElementById("show");
btn.addEventListener("click", (e)=>{
  section.innerText = `username is: ${ formData["username"]}`
  //prepare data inside object
  //sending manually
})

//stop default behavior (stop form from refresh)
const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
  console.log("submit");
  e.preventDefault();
})