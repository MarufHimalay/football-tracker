import React from 'react';
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Team = (props) => {
    const { idTeam, strTeam, strSport, strTeamBadge } = props.team
    const teamStyles = {
        border: '1px solid lightgray',
        margin: '10px',
        padding: '5px',
        backgroundColor: 'darkblue',
        borderRadius:'5px',
        maxWidth: '80%',
        color:'white', opacity: '0.8'
    }
    return (
        <div style={teamStyles} className="py-2">
            <h3>{strTeam}</h3>
            <p>Sports Type: {strSport}</p>
            <img style={{ maxWidth: '80px' }} src={strTeamBadge} alt="" />
            <li style={{listStyle:'none', margin:'10px'}}>
                <Button style={{backgroundColor:'black'}} as = {Link} to={`/team/${idTeam}`}>Explore ➨</Button>
            </li>
        </div>
    );
};

export default Team;