import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [movies, setMovies] = useState([]);
    let navigate = useNavigate();

    async function getMovies() {
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=b561df05&`)
        setMovies(data);
        console.log(data)
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="movie-list">
                    {movies.map(() => (
                        <div className="movie" key={} onClick={() => navigate(`${}`)}>
                            <div className="movie-card">
                                <div className="movie-card__container">
                                    <h3>{}</h3>
                                    <p>
                                        <b>:</b> {}
                                    </p>
                                    <p>
                                        <b>:</b> {}
                                    </p>
                                    <p>
                                        <b>:</b> {}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))};
                </div>
            </div>
        </div>
    );
};

export default Home;