import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_URL = "https://www.omdbapi.com/?apikey=b561df05";

const Movie = () => {
    const { imdbID } = useParams();
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchMovies() {
            const { data } = await axios.get(
                `${API_URL}&i=${imdbID}`
            );
            setData(data)
            console.log(data)
        }

        fetchMovies();
    }, [imdbID]);

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <div className="movie__selected--top">
                
            </div>
            <div className="movie__selected">
                <div className="movie__selected--img">
                    <img src={data.Poster} alt={data.Title} />
                </div>
                <div className="movie__selected--description">
                    <div className="movie__selected--title">
                        <h1>{data.Title}</h1>
                    </div>
                    <div className="movie__selected--extra">
                        <div className="movie__selected--released">
                            <h3>Released: {data.Released}</h3>
                        </div>
                        <div className="movie__selected--rated">
                            <h3>Rated: {data.Rated}</h3>
                        </div>
                        <div className="movie__selected--runtime">
                        <h3>Runtime: {data.Runtime}</h3>
                    </div>
                    </div>
                    <div className="movie__selected--summary">
                        <h3 className="movie__summary--title">Summary:</h3>
                        <div className="movie__summary--para">
                            <h3>{data.Plot}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;