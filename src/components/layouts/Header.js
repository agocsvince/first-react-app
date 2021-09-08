import React from 'react';
import '../../css/header.css';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <header className="header">
            <Link className="title" to="/"><h1>YourFood</h1></Link>
            <div className="header-tabs">
                <Link className="tab" to="/categories">Categories</Link>
                <Link className="tab" to="/favorites">Favorites</Link>
                <Link className="tab" to="/random">Random</Link>
            </div>
        </header>
    )
}

export default Header;