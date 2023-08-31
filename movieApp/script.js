// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7b381516&t=3 Idiot&y=2009")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
const searchMovie = () => {
  const movieName = document.getElementById("movieName").value;
  const year = document.getElementById("year").value;

  fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=7b381516&t=${movieName}&y=${year}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.Response === "True") {
        console.log(data);
        document.getElementById("title").innerHTML = data.Title;
        document.getElementById("plot").innerHTML = data.Plot;
        document.getElementById("poster").src = data.Poster;
        document.getElementById("director").innerHTML =
          "Director: " + data.Director;
        document.getElementById("actors").innerHTML = "Actors: " + data.Actors;
        document.getElementById("ratings").innerHTML =
          "IMDB Ratings: " + data.imdbRating;
        document.getElementById("boxOffice").innerHTML =
          "Box Office: " + data.BoxOffice;
      } else {
        document.getElementById("title").innerHTML =
          "Oops! There seems to be no such movie.";
      }
    });
};
