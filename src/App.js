import "./App.css";
import axios from "axios";
import { NavBar, MovieList } from "./components";
import { useState } from "react";
const API_BASE_URL = "https://www.omdbapi.com";
const API_KEY = "7880735c";

function App() {
  //default searches
  const defaultSearch = [
    "marvel",
    "horror",
    "netflix",
    "thriller",
    "crime",
    "comedy",
    "romantic",
    "sci-fi",
    "adventure",
  ];
  const defSize = defaultSearch.length;

  //use states
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState(
    defaultSearch[Math.floor(Math.random() * defSize)]
  );

  // functions
  const search = async () => {
    setIsLoading(true);
    // console.log(inputValue);
    let response = await axios.get(
      API_BASE_URL + "/?apikey=" + API_KEY + "&s=" + inputValue
    );
    let validMovieArr = [];
    // console.log(response.data.Search);
    if (response.data.Search) {
      for (let i = 0; i < response.data.Search.length; i++) {
        if (response.data.Search[i].Poster !== "N/A") {
          validMovieArr.push(response.data.Search[i]);
        }
      }
    }
    setMovies(validMovieArr);
    // console.log(validMovieArr);
    setIsLoading(false);
  };

  return (
    <div className="main">
      {/* NAVBAR */}
      <NavBar
        search={search}
        inputValue={inputValue}
        setInputValue={setInputValue}
        defaultSearch={defaultSearch}
        defSize={defSize}
      />

      {/* MOVIE LIST */}
      <MovieList isLoading={isLoading} movieList={movies} />
    </div>
  );
}

export default App;
