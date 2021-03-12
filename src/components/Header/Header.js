import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const headerStyle = {
        backgroundImage: `url(https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/sport-football-1-adobe.jpeg)`,
        backgroundPosition: 'center', backgroundSize: '80%',
        // height: '200px',
        paddingTop: '80px',
        paddingBottom: '100px'
    }

    const navStyle = {
        backgroundColor: 'black',
        padding: '5px',
        color: 'black',
        opacity: '0.6',
        fontWeight: 'bold'
    }

    const linkStyle = { textDecoration: 'none', color: 'white' }

    const [search, setSearch] =useState('@@');
    const [player, setPlayer] = useState([]);
    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${search}`)
        .then( res => res.json())
        .then(data => {
                setPlayer(data.player)
        })
    }, [search])
    console.log(search);
    return (
        <div style={headerStyle}>
            <nav style={navStyle} className="text-center">
                <h1>
                    <Link style={linkStyle} to="/">Football Tracker</Link>
                </h1>
            </nav>
            <div style={{width: '50%',margin: 'auto'}} className="input-group mb-3 pt-3">
                <span className="input-group-text" id="inputGroup-sizing-default">search by player</span>
                <input onChange={handleChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
             {
                    player?.map( pl => <h2 className="text-center">{pl?.strPlayer}</h2>)
            } 
        </div>
    );
};

export default Header;