import React from 'react';
import './LiveGame.css';
import Game from './Game';
const LiveGame = ({game}) => {
    return (
        <>
            <Game
                game={game}
                style={{maxHeight:500}}
                classNames='accordion active'
            />
        </>
    );
};

export default LiveGame;