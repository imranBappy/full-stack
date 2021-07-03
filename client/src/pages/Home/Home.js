/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import LiveEffect from '../../components/LiveEffect/LiveEffect';
import LiveGame from '../../components/Game/LiveGame';
import UpcomingGame from '../../components/Game/UpcomingGame';
import News from '../../components/News/News';
import {allGameGetAction} from '../../store/actions/gameAction';
import { connect } from 'react-redux';

import './home.css';

const Home = (props) => {
    const [live, setLive] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(()=>{
        props.allGameGetAction()
        setInterval(() => {
            props.allGameGetAction()
        }, 10000);
    },[]);
    useEffect(()=>{
        const liveGame = props.game.filter(game => game.status === 'Live')
        setLive(liveGame)
        const upcomingGame = props.game.filter(game => game.status === 'Upcoming');
        setUpcoming(upcomingGame);
    },[props.game]);

    return (
        <>
                <div className="home">
                    <div className='home-controller'>
                        <News/>
                        <LiveEffect/>
                        <LiveGame game={live} />
                        <div className="container">
                            <span className='upcoming-text'>Upcoming</span>
                        </div>
                        <UpcomingGame game={upcoming} />
                    </div>
                </div>
        </>
    );
};
const mapStateToProps = (state)=>({
    game: state.game.game
})
export default connect(mapStateToProps, {allGameGetAction})(Home);
