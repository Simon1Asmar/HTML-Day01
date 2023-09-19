const book = {
  bookName: "the 48 Laws of Power",
  authorName: "Robert Greene",
  publishYear: 1998,
  subject: "self-help",
};

console.log(getBookDescription(book));

function getBookDescription(bookObj) {
  return (
    "The book '" +
    bookObj.bookName +
    "', written by " +
    bookObj.authorName +
    ", is a " +
    bookObj.subject +
    " book that was published in the year " +
    bookObj.publishYear +
    "."
  );
}
