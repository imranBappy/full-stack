import React from 'react';
import './LiveGame.css';
import Game from './Game';
const LiveGame = ({game, handleModel}) => {
    return (
        <>{
            game.length ? 
            <Game
                handleModel={handleModel}
                game={game}
                style={{maxHeight:500}}
                classNames='accordion active'
            />:
            <p 
                style={{ textAlign: 'center',color: 'gray', margin: 20,fontSize: 25
            }} >
                Live Game Not Found!
            </p>
        }
            
        </>
    );
};

export default LiveGame;