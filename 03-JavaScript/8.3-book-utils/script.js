const book1 = {
  bookName: "The 48 Laws of Power",
  authorName: "Robert Greene",
  publishYear: 1998,
};

const book2 = {
  bookName: "The Art of War",
  authorName: "Noccolo Machiavelli",
  publishYear: 1521,
};

const bookUtils = {
  getFirstPublished(bookObj1, bookObj2) {
    let firstPublished = bookObj1.publishYear < bookObj2.publishYear ? book1 : book2;

    return firstPublished;
  },
  setNewEdition(bookObj, newEditionYear){
    bookObj.latestEdition = newEditionYear;
  },
  setLanguage(bookObj, language){
    bookObj.language = language;
  },
  setTranslation(bookObj, language, translator){
    bookObj.translation = {
      translator: translator,
      language: language,
    }
  },
  setPublisher(bookObj, publisherName, location){
    bookObj.publisher = {
      name: publisherName,
      location: location,
    }
  },
  isSamePublisher(bookObj1, bookObj2){
    return bookObj1.publisher.location === bookObj2.publisher.location ? (bookObj1.publisher.name === bookObj2.publisher.name) : false;
  }
};

//log first published book
console.log("First published book: " + bookUtils.getFirstPublished(book1,book2).bookName);

// setting new edition and logging it
bookUtils.setNewEdition(book1, 2019);
console.log(book1.latestEdition);

// setting new language and logging it
bookUtils.setLanguage(book1, "English");
console.log(book1.language);

//Setting translation for a book
bookUtils.setTranslation(book2, "Arabic", "Simon Asmar");
console.log(book2.translation);

//Setting publisher and logging it
bookUtils.setPublisher(book2, "Asmar Publishing", "Jerusalem");
console.log(book2.publisher);

bookUtils.setPublisher(book1, "Asmar Publishing", "Jerusalem");

console.log("is same publisher? : " + bookUtils.isSamePublisher(book1, book2));