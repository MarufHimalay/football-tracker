import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    
    const headerStyle = {
        backgroundImage: `url(https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/sport-football-1-adobe.jpeg)`, 
        backgroundPosition: 'center', backgroundSize:'80%',
        height:'200px',
        paddingTop: '80px',
        paddingBottom: '100px'
    }

    const navStyle = { 
        backgroundColor:'black',
        padding: '5px', 
        color: 'black', 
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