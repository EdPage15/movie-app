
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
    const [searchTitle, setSearchTitle] = useState(title);

    function onSearch() {
        fetchMovies(searchTitle)
    }

    async function fetchMovies(title) {
        setLoading(true);
        const { data } = await axios.get(
            `${API_URL}&s=${title}`
        );
        setMovies(data.Search || []);
        setLoading(false);
        console.log(data);
    
        function filterMovies(filter) {
            let sortingList = [...data];
            if (filter === "A_TO_Z") {
                sortingList.sort((a, b) => a.title.localeCompare(b.title))
            }
            else if (filter === "Z_TO_A") {
                sortingList.sort((a, b) => b.title.localeCompare(a.title))
            }
        }
    }

    function filterMovies() {
        fetchMovies();
    }

    function onSearchKeyPress(key) {
        if (key === 'Enter') {
            onSearch()
        }
    }

    useEffect(() => {
        fetchMovies("fast");
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
                <div className="search__filter">
                    <select id="filter" onChange={() => filterMovies()}>
                        <option value="" disable selected>sort</option>
                        <option value="A_TO_Z">Alphabetical A to Z</option>
                        <option value="Z_TO_A">Alphabetical Z to A</option>
                    </select>
                </div>
            </div>
            {loading ? 
                new Array(20).fill(0).map((_, imdbID) => (
                <div className="movie" key={imdbID}>
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