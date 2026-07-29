import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    let navigate = useNavigate();
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <FontAwesomeIcon 
                                icon="clapperboard" 
                                className="logo" 
                                onClick={() => navigate(`/`)}
                            />
                        </figure>
                    </Link>
                    <div className="footer__list" alt="">
                        <Link to="/" className="footer__link">Home</Link>
                        <span className="footer__link no-cursor">About</span>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2026 Library
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer; 