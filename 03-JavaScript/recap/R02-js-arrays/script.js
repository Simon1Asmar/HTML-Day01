let movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 9.3,
    votes: 2345890,
    length: 120
  },
  {
    id: 2,
    title: "The Godfather",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    rating: 9.2,
    votes: 1620360,
    length: 120
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1974,
    rating: 9.0,
    votes: 1133175,
    length: 120
  },
  {
    id: 4,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan",
    releaseYear: 2008,
    rating: 9.0,
    votes: 2303232,
    length: 120
  },
  {
    id: 5,
    title: "12 Angry Men",
    genre: "Crime, Drama",
    director: "Sidney Lumet",
    releaseYear: 1957,
    rating: 9.0,
    votes: 689845,
    length: 120
  },
];

console.log('movies', movies)

// 1. Movie Initials: Create a function,  getMovieInitials(title) , that takes a movie title and returns its initials.
// This function takes a string of words and returns its initials
function getMovieInitials(title){

  let initials = "";

  /* turns the string into an array of words, 
   * then adds the first letter of each word to the initials variable */
  title.split(" ").forEach(word => {
    initials+=word.charAt(0);
  })

  return initials;
}
console.log('getMovieInitials(movies[1].title)', getMovieInitials(movies[2].title));

//another way
function getMovieInitials2(title){
  return title.split(" ").map(word => word.charAt(0).toUpperCase()).join("");
}
console.log(getMovieInitials2("the dark knight"));

/* 2. Genre List: Implement a function, splitGenres(genres),
 * that takes a string of genres separated by commas 
 * and converts it into an array of individual genres. */
function splitGenres(genres){
  return genres.split(", ");
}
console.log('splitGenres(movies[3].genre)', splitGenres(movies[3].genre));

// 3. Arrow Functions with Multiple Operations: Given a function  getTotalMovieLength  that calculates the total length of all movies and returns a string, convert it into an arrow function.
const getTotalMovieLength = (movies) => {
  let totalLength = 0;
  for (let i = 0; i < movies.length; i++) {
    totalLength += movies[i].length;
  }
  return 'Total movie length is ' + totalLength + ' minutes';
}

console.log(getTotalMovieLength(movies));


//ARRAY METHODS

// 1. takes in an array of movie objects and returns an array of movie titles
function displayMovieTitles(arrayOfMovies){
  return arrayOfMovies.map(movie => movie.title);
}

console.log(displayMovieTitles(movies));

// 2. Highly Rated Movies: Given an array of movie objects and a minimum rating value, return a new array containing only movies with a rating equal to or greater than the provided value.
function filterByRating(arrayOfMovies, minRating){
  // return arrayOfMovies.reduce((accumilator, currentValue) => {
  //   if(currentValue.rating>=minRating){
  //     accumilator.push(currentValue)
  //   } 
  //   return accumilator;
  // },[]);

  return arrayOfMovies.filter(movie => movie.rating >= minRating)
}

console.log(filterByRating(movies, 9.1));


//3. Average Movie Rating: Calculate and return the average movie rating from an array of movie objects. Example: Given the input data, the function should return approximately 9.1
// calculates the average movie rating
function averageMovieRating(arrayOfMovies){
  // sums up all the movie ratings, then devides by the number of movies (.length) and returns the value
  return arrayOfMovies.reduce((accumilator, currentMovie) => {
    // console.log(accumilator)
    return accumilator + currentMovie.rating;
  },0) / arrayOfMovies.length;
}
console.log(averageMovieRating(movies));

// 4. Sort Movies by Votes: Given an array of movie objects, return a new array sorted by the number of votes in descending order.
function sortMoviesByVotes(arrayOfMovies){
  return arrayOfMovies.sort((movieA, movieB) => movieB.votes - movieA.votes);
}
console.log('sortMoviesByVotes(movies)', sortMoviesByVotes(movies))

//OBJECTS

const movieDatabase = {
  movies: [],
};


function addMovie(title){
  const newMovie = {
    title: title,
    ratings: [],
    averageRating: 0,
  }

  // newMovie.averageRating = (ratings.reduce((accumilator, currentRating) => {
  //   return accumilator + currentRating;
  // }, 0) / ratings.length).toFixed(2);

  movieDatabase.movies.push(newMovie);
}

addMovie("Home Alone");

console.log(movieDatabase);

function removeMovie(title){
  log(movieDatabase.movies.includes)
}



