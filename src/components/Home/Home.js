import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Displayteam from './Displayteam/Displayteam';
import './Home.css'

const Home = () => {
    const [team, setteam] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
            .then(res => res.json())
            .then(data => setteam(data.teams))
    }, []);

    return (
        <div className="homeflex">
           {
               team.map(team => <Displayteam team = {team}></Displayteam>)
           }
        </div>
    );
};

export default Home;