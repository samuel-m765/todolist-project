import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

const API_KEY = "12fe8979"

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Avengers");

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) setMovies(data.Search);
        else setMovies([]);
      });
  }, [query]);

  return (
    <div className="App">
      <h1>🎬 My Movie App</h1>
      <SearchBar onSearch={setQuery} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
