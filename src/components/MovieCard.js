import React from "react";

import "../styles/movie-card.css";

export default function MovieCard({ movie }) {
  // console.log(movie.Poster);
  return (
    <div className="movie-card">
      <img className="image" src={movie.Poster} alt={movie.Title} />
      <p className="movie-title">{movie.Title}</p>
      <p className="year">Year : {movie.Year}</p>
    </div>
  );
}
