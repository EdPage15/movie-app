import React from 'react';

const MovieCard = ({ movie: { imbdID, Year, Poster, Title, Type } }) => {
    return (
        <div className="movie" key={imbdID}>
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