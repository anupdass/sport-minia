import React from 'react';
import Banner from '../../Banner/Banner';
import './Displayteam.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Displayteam = (props) => {
    const { strTeam, strTeamBadge, strLeague2 } = props.team;
    return (
        <div className="main">
            <div className='team-logo'><img src={strTeamBadge} alt=""/></div>
            <h2>{strTeam}</h2>
            <h5>{strLeague2}</h5>
            <p>Soprts type : football</p>
            <button className='team-btn'>Explore</button>
        </div>
    );
};


export default Displayteam;