import React, { useState, useEffect } from 'react';
import axios from 'axios'
import MovieCard from "./components/MovieCard";
// import SearchIcon from "../components/SearchIcon";
import "../App.css"

const API_URL = "https://www.omdbapi.com/?apikey=b561df05";

const Movies = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchMovies("Batman");
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.search);
    };

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search for movies"
                />
                <button onClick={() => searchMovies(searchTerm)}
                >

                    Enter
                </button>
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    )
    console.log(searchTerm)
}

export default Movies;