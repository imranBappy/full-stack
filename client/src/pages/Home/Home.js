/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import LiveEffect from '../../components/LiveEffect/LiveEffect';
import LiveGame from '../../components/LiveGame/LiveGame';
import News from '../../components/News/News';

import {allGameGetAction} from '../../store/actions/gameAction';
import { connect } from 'react-redux';

import './home.css';

const Home = (props) => {
    useEffect(()=>{
        props.allGameGetAction()
        setInterval(() => {
            props.allGameGetAction()
        }, 30000);
    },[])
    return (
        <>
                <div className="home">
                    <div className='home-controller'>
                        <News/>
                        <LiveEffect/>
                        <LiveGame game={props.game} />
                    </div>
                </div>
        </>
    );
};
const mapStateToProps = (state)=>({
    game: state.game.game
})
export default connect(mapStateToProps, {allGameGetAction})(Home);
