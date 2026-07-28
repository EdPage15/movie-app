
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios'
import MovieCard from '../components/MovieCard';
import "../App.css"

const API_URL = "https://www.omdbapi.com/?apikey=b561df05";

const Home = () => {
    const navigate = Navigate
    const { title } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTitle, setSearchTitle] = useState(title)

    function onSearch() {
        fetchMovies(searchTitle)
    }

    async function fetchMovies(title) {
        setLoading(true);
        const { data } = await axios.get(
            `${API_URL}&s=${title}`
        );
        setMovies(data.search || []);
        setLoading(false);
        console.log(data);
    }

    function onSearchKeyPress(key) {
        if (key === 'Enter') {
            onSearch()
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [title]);

    return (
        <>
            <div className="movie__search">
                <div className="search">
                    <input  
                        value={searchTitle} 
                        onChange={(event) => setSearchTitle(event.target.value)} 
                        onKeyPress={(event) => onSearchKeyPress(event.key)}
                        placeholder="Search for movies"
                    />
                    <button onClick={() => onSearch(searchTitle)}>Enter</button>
                </div>
            </div>
            {loading ? 
                new Array(12).fill(0).map((_, imbdID) => (
                <div className="movie" key={imbdID}>
                    <div className="movie__title">
                        <div className="movie__title--skeleton"></div>
                    </div>
                    <div className="movie__year">
                        <p className="movie__year--skeleton"></p>
                    </div>
                </div>
            )) 
            : 
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            }
        </>
    )
}

export default Home;