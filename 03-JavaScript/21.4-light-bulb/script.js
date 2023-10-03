const lightBulb = document.querySelector("img");

let isLightOn = false;

lightBulb.addEventListener("click", ()=>{
  if(isLightOn){
    lightBulb.src = "./imgs/lightbulb-off.png";
    document.body.classList.remove("lightsOn");
    isLightOn = false;
  } else {
    lightBulb.src = "./imgs/lightbulb-on.png";
    document.body.classList.add("lightsOn");
    isLightOn = true;
  }
})