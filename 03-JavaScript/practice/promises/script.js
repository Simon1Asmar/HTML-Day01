//Selecting DOM Element
const div = document.querySelector("div");

window.onload = () => {
  p1().then(() => p2())
  .then(() => p3())
  .then(() => p4());
};

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //changes div's background color to red
      div.classList.add("red-bg");
  
      resolve();
    }, 5000);
  });
}


const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Changes font size to 50px
      div.classList.add("fontsize-50px");

      resolve();
    }, 5000);
  });
};

const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // changes the background color to purple
      div.classList.remove("red-bg");
      div.classList.add("purple-bg");

      resolve();
    }, 5000);
  });
};

const p4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // adds "callback hell" to the inner text
      div.innerText = div.innerText + " callback hell";
  
      resolve();
    }, 5000);
  });
}
