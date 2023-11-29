// Create an HTML page with a button
// Send HTTP req when clicking to a free API
// Get the data from the API and process it
// Show the data in HTML

const form = document.querySelector("form");
const outputSection = document.querySelector("#output");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchValue = form.elements.search.value.split(" ").join("+");

  // fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
  fetch(`https://openlibrary.org/search.json?q=${searchValue}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayData(data);
    });
});

function displayData(data){
  const paragraph = document.createElement("p");
  paragraph.innerText = `${data.numFound} books found for "${data.q}"`
  outputSection.append(paragraph);

  const books = data.docs;
  books.forEach(book => {
    console.log(book);
    // console.log(book.olid);
  })
}