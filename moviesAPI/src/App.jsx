import axios from 'axios';
import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovies = async (title) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=d25f5e18`);
      setData(response.data.Search || []);
      console.log(response.data.Search);
    } catch (error) {
      console.error("Error fetching the movie data:", error);
    }
  };

  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=d25f5e18`);
      setMovieDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching the movie details:", error);
    }
  };

  const handleClick = (id) => {
    setSelectedId(id);
    setMovieDetails(null);
    fetchMovieDetails(id);
  };

  return (
    <>   
      <h1>CinemaArchive</h1>
      <div className="search-container" style={{ position: 'relative' }}>
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <input
            type="text"
            value={title}
            onChange={(e) => {fetchMovies(e.target.value)  ; setTitle(e.target.value)}}
            placeholder="Search Movie Name"
            className="search-input"
          />
          <button type="submit" onClick={() => fetchMovies(title)}>
            Search
          </button>
        </form>
      </div>

      <div className="main">
        {data.length > 0 && (
          <div className="movie-container">
            <div className="movie-list">
              {data.map((movie) => (
                <div
                  className={selectedId === movie.imdbID ? "show movie-details" : "movie-details"}
                  key={movie.imdbID}  >
                  {selectedId === movie.imdbID && movieDetails ? (
                    <>
                      <h2>{movieDetails.Title}</h2>
                      <p>Year: {movieDetails.Year}</p>
                      <p>Genre: {movieDetails.Genre}</p>
                      <p>Actors: {movieDetails.Actors}</p>
                      <p>Awards: {movieDetails.Awards}</p>
                      <p>Language: {movieDetails.Language}</p>
                      <p>Rated: {movieDetails.Rated}</p>
                    </>
                  ) : (
                    <div  onMouseOver={() => handleClick(movie.imdbID)}>
                      <img
                        src={movie.Poster}
                        alt={`${movie.Title} Poster`}
                        className="movie-poster"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
