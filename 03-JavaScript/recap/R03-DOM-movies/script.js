const movie = {
  title: "The Godfather",
  genre: "Crime, Drama",
  director: "Francis Ford Coppola",
  releaseYear: 1972,
  rating: 9.2,
  votes: 1620360,
  img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
};

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 9.3,
    votes: 2345890,
    img: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    rating: 9.2,
    votes: 1620360,
    img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1974,
    rating: 9.0,
    votes: 1133175,
    img: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: 4,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan",
    releaseYear: 2008,
    rating: 9.0,
    votes: 2303232,
    img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    id: 5,
    title: "12 Angry Men",
    genre: "Crime, Drama",
    director: "Sidney Lumet",
    releaseYear: 1957,
    rating: 9.0,
    votes: 689845,
    img: "https://m.media-amazon.com/images/S/pv-target-images/b92d2865829416e35e7102a3934a2ee745f3b903a95678710442d4299d86f39c.jpg",
  },
];

// SELECTING DOM ELEMENTS
const body = document.body;
const moviesList = document.querySelector("#movies-list");

// displayMovie(movie);

function displayMovie(movie) {
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

  const movieGenres = document.createElement("p");
  movieGenres.innerText = `${movie.genre.split(", ").join(" | ")}`;
  movieCard.append(movieGenres);

  const extraMovieDetails = document.createElement("p");
  extraMovieDetails.innerText = `Director: ${movie.director}\nVotes: ${movie.votes}`;
  extraMovieDetails.classList.add("extra-movie-details");
  movieCard.append(extraMovieDetails);
}

movies.forEach(movie => {
  displayMovie(movie);
})