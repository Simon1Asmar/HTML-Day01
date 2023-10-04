const checkbox = document.querySelector("#show");
const img = document.querySelector("img");

checkbox.checked = false;
img.classList.add("collapsed");

checkbox.addEventListener("input", ({target})=>{
  const {checked} = target;
  if(checked){
    img.classList.remove("collapsed")
  } else {
    img.classList.add("collapsed")
  }
})