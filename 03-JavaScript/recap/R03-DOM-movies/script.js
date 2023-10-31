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
//selecting form DOM elements
const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const genresInput = document.querySelector("#genres");
const directorInput = document.querySelector("#director");
const yearInput = document.querySelector("#year");
const ratingInput = document.querySelector("#rating");
const votesInput = document.querySelector("#votes");
const imgInput = document.querySelector("#img-link");

displayAllMovies();

form.addEventListener("submit", addNewMove);

function addNewMove(event){
  event.preventDefault();

  if(titleInput.value && genresInput.value && directorInput.value && yearInput.value && ratingInput.value && votesInput.value && imgInput.value){
    const newMovie = {
      id: movies.length+1,
      title: titleInput.value,
      genre: genresInput.value,
      director: directorInput.value,
      releaseYear: yearInput.value,
      rating: ratingInput.value,
      votes: votesInput.value,
      img: imgInput.value,
    }
  
    movies.push(newMovie);
  
    displayAllMovies();
    // displayMovie(movies[movies.length-1]);
    form.reset();
    window.alert(`Movie id: ${newMovie.id}, "${newMovie.title} added successfully!"`)
  } else {
    window.alert("Please fill in all input fields");
  }

}

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

function displayAllMovies(){
  clearMoviesList();

  movies.forEach(movie => {
    displayMovie(movie);
  })
}

function clearMoviesList(){
  while(moviesList.children.length > 0){
    moviesList.removeChild(moviesList.firstChild);
  }
}

//image link to test: zootopia
//https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2FwtlDFrvnyTyPUPiLYgZ8sqg57PCVyGsKeJ153K4KDoA.jpg%3Fauto%3Dwebp%26s%3D5e3b665764fa1bac64bebfd30545d143e0ac1000&f=1&nofb=1&ipt=ed95a4bbba4093a77d1ebd5df666c322fecd0405fb1c81b2690bf2a59ff38108&ipo=images