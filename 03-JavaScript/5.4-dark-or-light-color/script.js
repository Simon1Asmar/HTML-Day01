let color = prompt("Enter Color").trim().toLowerCase();

console.log(checkColor(color));

alert(checkColor(color));

function checkColor(color){
  let output ="";

  switch(color){
    case "yellow":
    case "pink":
    case "orange":
      output="light color";
      break;
    case "blue":
    case "purple":
    case "brown":
      output="dark color";
      break;
    default:
      output= "Unkown color";
  }

  return output;

}
