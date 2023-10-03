const btn = document.querySelector("button");
const textArea = document.querySelector("textarea");
const pErrorMsg = document.querySelector("p#error-message");

pErrorMsg.classList.add("collapsed");

btn.addEventListener("click", () => {
  let numOfChars =  textArea.value.length;

  if(numOfChars < 100){
    textArea.classList.add("redBorder");
    textArea.classList.remove("greenBorder");

    document.body.style.backgroundColor = "#FFD3D1"

    pErrorMsg.classList.remove("collapsed");
    pErrorMsg.innerText = `*the minimum number of characters is 100, (char count =${numOfChars})`

  } else {
    textArea.classList.remove("redBorder");
    textArea.classList.add("greenBorder");

    document.body.style.backgroundColor = "#D3FFD1";

    pErrorMsg.classList.add("collapsed");
  }
  console.log(textArea.value.length);
})