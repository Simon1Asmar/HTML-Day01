// DOM = Document Object Model
console.log(document) //to view document tree

const p1 = document.getElementById("myP");
console.log('p', p1)
p1.innerText = "Hello World"

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//loop
for (const p of paragraphs) {
  p.innerText = Math.random();
}

//CRUD = Create Reade Update Delete

//Create
const section = document.getElementById("add")
console.log('section', section)

//wrong way
// section.innerHTML = "<h1>H1 using wrong way (dont do this)</h1>"

//Correct way
const newTitle = document.createElement("h1");
newTitle.innerHTML = "New Title Text";
section.appendChild(newTitle);

//Create a list example
const prices = ["$100", "$500", "$1000"];
const listContainer = document.getElementById("list");
const ul = document.createElement("ul");
prices.forEach((price)=>{
  const li = document.createElement("li");
  li.innerText = price;
  ul.appendChild(li);
})
listContainer.appendChild(ul);

//CSS
const pres = document.getElementsByTagName("pre");
for (const pre of pres) {
  console.log(pre);
  if(parseInt(pre.innerText)>100){
    pre.classList.add("title"); //adds a class called title to the element
  }
}