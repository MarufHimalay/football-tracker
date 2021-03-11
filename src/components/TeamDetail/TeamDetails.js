import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import male from '../../images/male.jpeg';
import female from '../../images/female.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const TeamDetails = () => {
    const { id } = useParams();
    const [teamInfo, setTeamInfo] = useState({})
    console.log(teamInfo);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=';
        fetch(url + id)
            .then(res => res.json())
            .then(data => setTeamInfo(data.teams[0]))
    }, [id])

    const { strTeamBadge, strTeamBanner, intFormedYear, strCountry, strGender, strDescriptionEN, strTeam, strFacebook, strTwitter, strYoutube, strWebsite, strSport } = teamInfo;

    const website = "https://" + strWebsite;

    const iconStyle = {
        marginRight: '5px', color: 'white', fontSize: '20px'
    }

    const logoStyle = {
        maxWidth: '150px', opacity: '0.6', backgroundColor: 'white'
    }

    const introStyle = {
        backgroundColor: 'darkblue', opacity: '0.8', marginBottom: '30px', borderRadius: '5px', color: 'white'
    }

    const descriptionStyle = {
        backgroundColor: "darkblue", opacity: '0.8', borderRadius: '5px', color: "white", padding: "20px", marginTop: "10px"
    }
    return (
        <div className="container pt-3">
            <div style={{ backgroundImage: `url(${strTeamBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover', marginBottom:'100px' }} className="text-center p-3">
                <img style={logoStyle} src={strTeamBadge} alt="not found"></img>
            </div>
            <div style={introStyle} className="row align-items-center px-2 d-flex d-flex py-3 m-1" >
                <div className="col-md-6 pt-2">
                    <h2 style={{ fontWeight: 'bold' }}>{strTeam}</h2>
                    <h6><FontAwesomeIcon icon={faHistory} style={iconStyle} />Founded: {intFormedYear}</h6>
                    <h6><FontAwesomeIcon icon={faFlag} style={iconStyle} />Country: {strCountry}</h6>
                    <h6><FontAwesomeIcon icon={faFutbol} style={iconStyle} />Sport Type: {strSport}</h6>
                    <h6><FontAwesomeIcon icon={faVenusMars} style={iconStyle} />Gender: {strGender} Team</h6>

                </div>
                <div className="col-md-6 ">
                    {
                        strGender === 'Male' ? <img style={{ width: "100%" }} src={male} alt=""></img> : <img style={{ width: "200px" }} src={female} alt=""></img>
                    }
                </div>
            </div>
            <div style={descriptionStyle}>
                <h3 className="text-center">About us</h3>
                <p style={{}}>
                    {strDescriptionEN}
                </p>
            </div>
            <div className="text-center p-2">
                <div className="p-2">
                    <a className="p-2" target="_blank" rel="noreferrer" href={"https://" + strTwitter}><FontAwesomeIcon icon={faTwitter} style={iconStyle} /></a>
                    <a className="p-2" target="_blank" rel="noreferrer" href={"https://" + strFacebook}><FontAwesomeIcon icon={faFacebookF} style={iconStyle} /></a>
                    <a className="p-2" target="_blank" rel="noreferrer" href={"https://" + strYoutube}><FontAwesomeIcon icon={faYoutube} style={iconStyle} /></a>
                </div>
                <p style={{ fontSize: "20px" }} className="text-center"><a style={{ textDecoration: 'none', color: "white" }} href={website}>{strWebsite}</a></p>
            </div>
        </div>
    );
};

export default TeamDetails;