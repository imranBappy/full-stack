import React from 'react';
import './LiveGame.css';

const Game = ({game, style, classNames}) => {
    const open = (e) =>{
        if (e.target.className.length > 9) {
            console.log(true);
            e.target.className = 'accordion'
            e.target.nextElementSibling.style = 'max-height:0'
        }else{
            e.target.className = 'accordion active'
            e.target.nextElementSibling.style = 'max-height:500px';
        }
    }
    return (
        <div className='container'>

            {
                game.map((main)=>
                <div style={{marginBottom:10, border:'1px solid orangered'}}>
                <h1 onClick={open} className={classNames}>
                    {`${main.country1} VS ${main.country2} ${main.name}`}
                </h1>
                <div className="panel" style={style} >
                    {
                        main.bets.map(bet=>
                    <div className="bet">
                        <h4> <span>{bet.title}</span> </h4>
                        <div className="bet-container">
                            {
                                bet.question? 
                                bet.question.map(q=>
                                    <button>{q.question} <span>{q.rate}</span> </button>
                                    )
                                :''
                            }
                        </div>
                    </div>
                    )
                    }
                    
                </div>
            </div>
            )
            }
            
        </div>
    );
};

export default Game;