import React from 'react';
import './LiveGame.css';

const LiveGame = ({game}) => {
    const open = (e) =>{
        if (e.target.className.length > 9) {
            e.target.className = 'accordion'
            e.target.nextElementSibling.style = 'max-height:0'
        }else{
            e.target.className = 'accordion active'
            e.target.nextElementSibling.style = 'max-height:500px'
        }
    }
    return (
        <div className='container'>

            {
                game.map((main)=>
                <div>
                <h1 onClick={open} className="accordion">{main.name}</h1>
                <div className="panel" >
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

export default LiveGame;