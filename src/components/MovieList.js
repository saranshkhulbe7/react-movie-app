import React from "react";
import MovieCard from "./MovieCard";

import "../styles/movie-list.css";
export default function MovieList({ isLoading, movieList }) {
  if (isLoading) {
    return "Loading Movies";
  } else {
    if (typeof movieList === "undefined" || movieList.length < 1) {
      return <div>no results found!</div>;
    } else {
      return (
        <div className="movieList">
          {movieList.map((movie) => (
            <MovieCard movie={movie} key={movie.index} />
          ))}
          {/* movies */}
        </div>
      );
    }
  }
}
