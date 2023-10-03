// Gets the body element
const body = document.querySelector("body");

// Gets head element
const head = document.querySelector("head");

// Changes the title of the webpage
document.title = "19.4 Create a Webpage"

//DOING THIS JUST FOR TESTING - IT'S BETTER TO DIRECTLY PUT IT IN THE HTML THOUGH
// Creates link element for the stylesheet and adds attributes to it
const stylesheet = document.createElement("link");
stylesheet.setAttribute("rel", "stylesheet");
stylesheet.setAttribute("href", "style.css");

//appends the stylesheet link to the head element
head.appendChild(stylesheet);

// Creates a nav element
const nav = document.createElement("nav");
body.append(nav);

//Navbar text Logo
const logo = document.createElement("p");
logo.innerText = "My Webpage"
nav.append(logo);

// Create ul
const ul = document.createElement("ul")
nav.append(ul);

const arrayOfNavLinks = ["Home", "FAQs", "About", "Contact-us"];
arrayOfNavLinks.forEach((linkText)=>{
  const li = document.createElement("li");
  // li.innerText = linkText;
  ul.append(li);
  
  const a = document.createElement("a");
  a.innerText = linkText;
  a.setAttribute("href", "#");
  li.append(a)
})

//main section
const main = document.createElement("main");
body.append(main);

const h1 = document.createElement("h1");
h1.innerText = "Change Website Name";
main.append(h1);

const input = document.createElement("input")
main.append(input);

input.addEventListener("input", (e)=>{
  logo.innerText = e.target.value;
})