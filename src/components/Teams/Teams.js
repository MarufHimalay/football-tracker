import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const Teams = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams.slice(0, 30)))

    }, [])
    // const teamsStyle = {
    //     // backgroundColor:'lightgray',

    // }
    return (
        <div className="container text-center">
            <div style={{ justifyContent: 'center', paddingBottom:'30px' }} className="App row cols row-cols-md-4 cols-sm-1">
                {
                    teams.map(team => <Team team={team} key={team.idTeam}></Team>)
                }

            </div>
        </div>
    );
};

export default Teams;