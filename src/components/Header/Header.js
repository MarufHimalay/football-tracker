import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    
    const headerStyle = {
        paddingTop: '100px',
        paddingBottom: '100px'
    }

    const navStyle = { 
        backgroundColor: 'black', 
        padding: '5px', 
        color: 'white', 
        opacity: '0.6', 
        fontWeight: 'bold' }

    const linkStyle = { textDecoration: 'none', color: 'white' }

    return (
        <div style={headerStyle}>
            <nav style={navStyle} className="text-center">
                <h1>
                    <Link style={linkStyle} to="/">Football Tracker</Link>
                </h1>
            </nav>
        </div>
    );
};

export default Header;