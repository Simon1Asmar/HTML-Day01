const movie = {
  title: "The Godfather",
  genre: "Crime, Drama",
  director: "Francis Ford Coppola",
  releaseYear: 1972,
  rating: 9.2,
  votes: 1620360,
  img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
};

// SELECTING DOM ELEMENTS
const body = document.body;
const moviesList = document.querySelector("#movies-list")

displayMovie(movie)

function displayMovie(movie){
  const movieCard = document.createElement("section");
  movieCard.classList.add("movie-card");
  moviesList.append(movieCard);

  const movieImg = document.createElement("img");
  movieImg.setAttribute("src", movie.img);
  movieImg.classList.add("movieImage");
  movieCard.append(movieImg);

  const movieTitle = document.createElement("h2");
  movieTitle.innerText = `${movie.title} (${movie.releaseYear})`;
  movieCard.append(movieTitle);

  const movieRating = document.createElement("h3");
  movieRating.innerText = `Rating: ${movie.rating}`;
  movieCard.append(movieRating);

}