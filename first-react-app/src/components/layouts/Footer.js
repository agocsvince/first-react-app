import React from 'react';
import '../../css/footer.css';

const Footer = props => {
    return (
        <footer className="footer">
            <h1>VPT-week3</h1>
            <div className="footer-tabs">
                <h3 className="tab">Categories</h3>
                <h3 className="tab">Favorites</h3>
                <h3 className="tab">Random</h3>
            </div>
        </footer>
    )
}

export default Footer;