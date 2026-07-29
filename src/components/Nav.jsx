import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = ({ numberOfItems }) => {
    let navigate = useNavigate();

    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");
    }

    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <FontAwesomeIcon 
                        icon="clapperboard" 
                        className="logo" 
                        onClick={() => navigate(`/`)}
                    />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link">
                            Home
                        </Link>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;