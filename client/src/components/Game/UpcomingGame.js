import React from 'react';
import {connect} from 'react-redux';
import Game from './Game';
const UpcomingGame = (props) => {
    return (
        <>
           {
            props.game.length ? 
            <Game
                game={props.game}
                style={{}}
                classNames='accordion'
            />:
            <p style={{
                textAlign: 'center',
                 color: 'gray', margin: 20,
                 fontSize: 25
         }} >Upcoming Game Not Found!</p>
        }
        </>
    );
};

export default connect()(UpcomingGame) ;