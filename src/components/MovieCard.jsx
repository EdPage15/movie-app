import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie: { imbdID, Year, Poster, Title, Type } }) => {
    let navigate = useNavigate();
    
    return (
        <div className="movie" key={imbdID} onClick={() => navigate(`${Title}`)}>
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster} alt={Title} />
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;