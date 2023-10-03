const section = document.querySelector("section");
const p = document.querySelector("p");

const pComputedStyle = window.getComputedStyle(p);
let fontSize = parseInt(pComputedStyle.fontSize);

p.innerText = `Font Size: ${fontSize}px`;

const minFontSize = 6;
const maxFontSize = 100;

section.addEventListener("click", (e) => {
  console.log(e.target.id);
  if(e.target.id === "minusBtn" && fontSize>minFontSize){
    fontSize--;
    updateFontSize(fontSize);
  } else if(e.target.id === "plusBtn" && fontSize<maxFontSize){
    fontSize++;
    updateFontSize(fontSize);
  }
})

function updateFontSize(fontSize){
  p.style.fontSize = p.style.fontSize = `${fontSize}px`;
  p.innerText = `Font Size: ${fontSize}px`;
}