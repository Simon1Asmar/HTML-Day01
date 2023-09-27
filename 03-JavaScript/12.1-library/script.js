const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const readableBooks =  library.filter( b => {
  if(b.readingStatus===true){
    console.log(`\"${b.title}\" by ${b.author}, readable status: ${b.readingStatus}`)
    return true;
  }
})

console.log(readableBooks)

