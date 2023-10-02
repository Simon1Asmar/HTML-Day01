// Create a variable that holds the <li> element with the class “start-here”
const liStart = document.querySelector(".start-here");
console.log(liStart);

// Change the text from “title 2” to “main title”
liStart.innerText = "main title";

// Add another subtitle with the text “subtitle 4”
const sibling2 = liStart.nextElementSibling; //traversing sideways
const sibling2ul = sibling2.querySelector("ul"); //traversing downward
const subtitle4 = document.createElement("li");
subtitle4.innerText = "subtitle 4";
sibling2ul.appendChild(subtitle4);
console.log(sibling2ul);

// Delete the last <li> element from the list.
const lastLiElement = sibling2.nextElementSibling; //traversing sideways
lastLiElement.remove();

// Change the <title> element text to “Master Of The Dom”.
document.getElementsByTagName("title")[0].innerText = "Master Of The Dom"

// Change the text of the <p> element to something else of your choice
const div = sibling2.parentElement.nextElementSibling; //traversed upwards then sideways
const pElement = div.querySelector("p"); //traversing downwards
pElement.innerText = "Something else"
console.log(pElement);

/* 
  GREAT LINKS FOR TRAVERSING METHODS
  https://codevoweb.com/9-javascript-dom-traversal-methods/
  https://zellwk.com/blog/dom-traversals/
*/

/*
Summary from second website

    1. Traversing downwards
        a. element.querySelector
        b. element.querySelectorAll
        c. element.children
    2. Traversing upwards
        a. element.parentElement
        b. element.closest
    3. Traversing sideways
        a. element.nextElementSibling
        b. element.previousElementSibling
        c. Combine parentElement, children, and index

*/