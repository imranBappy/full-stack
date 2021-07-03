import React from 'react';
import {connect} from 'react-redux';
import Game from './Game';
const UpcomingGame = (props) => {
    return (
        <>
           <Game
            game={props.game}
            state={{}}
            classNames='accordion'
           />
        </>
    );
};

export default connect()(UpcomingGame) ;