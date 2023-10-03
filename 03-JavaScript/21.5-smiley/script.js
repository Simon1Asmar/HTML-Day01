const input = document.querySelector("input");
const btn = document.querySelector("button");

const container = document.createElement("section");
container.classList.add("container")

document.body.append(container);

// Add a click event listener to the button
btn.addEventListener("click", ()=>{
  const numOfSmileys = parseInt(input.value);

  //instead of doing innerHTML = " "
  clearChildren(container);

  if(!isNaN(numOfSmileys)){

    //Create smiley obj
    let currentNumOfSmileys = 0;
    while(currentNumOfSmileys < numOfSmileys){
      const smileyImg = document.createElement("img");
      smileyImg.src = "./imgs/grinch1.png"
      container.append(smileyImg);
      currentNumOfSmileys++;
    }
    
  }
});

//removes all children of an element
function clearChildren(element){
  while(element.lastChild){
    element.lastChild.remove();
  }
}