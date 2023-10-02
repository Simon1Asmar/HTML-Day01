const users = [
  {
  id: 167464,
  firstName: "Jimmy",
  lastName: "Arnold",
  email: "jimmya@gmail.com",
  },
  {
  id: 578447,
  firstName: "Martha",
  lastName: "Goldman",
  email: "gold@hotmail.com",
  },
  {
  id: 864578,
  firstName: "Tim",
  lastName: "Burton",
  email: "timmy@hotmail.com",
  },
  ];

//Loop over the array with the forEach method 
//Create ordered list
const ol = document.createElement("ol");
users.forEach((userObj) => {
  //list items for the ordered list of the first and last names of the objects
  const li = document.createElement("li");
  li.innerText = `${userObj.firstName}  ${userObj.lastName}`;

  // Create a custom data attribute called “data-id” and attach the id value to each li.
  li.setAttribute("data-id", Math.floor(Math.random() * 100000));

  // append li to ol
  ol.appendChild(li);
})

// append ol to body
const body = document.getElementsByTagName("body")[0];
body.appendChild(ol);

// Remove the bullet points of the ordered list with JavaScript.

// first i created a stylesheet and added a selector for class .removeListStyle
//adding CSS link to head
const stylesheetLink = document.createElement("link");
stylesheetLink.setAttribute("rel", "stylesheet");
stylesheetLink.setAttribute("href", "./style.css");
const head = document.getElementsByTagName("head")[0];
head.appendChild(stylesheetLink);

//adding class "removeListStyle" to ol element
ol.classList.add("removeListStyle");


//another way
// ol.style.listStyle = "none";

