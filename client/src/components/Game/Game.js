import React from 'react';
import './LiveGame.css';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
const Game = ({game, style, classNames,  handleModel, auth}) =>{
    const history = useHistory()
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
    const handleBet=(...rest) =>{
        if (auth)  {
            handleModel(...rest)
        }else{
            history.push('/login')
        }
    }
    return (
        <div className='container'>

            {
                game.map((main)=>
                <div key={main._id} style={{marginBottom:10, border:'none'}}>
                <h1 onClick={open} className={classNames}>
                    {`${main.country1} VS ${main.country2} ${main.name}`}
                </h1>
                <div className="panel" style={style} >
                    {
                        main.bets.map(bet=>{
                            return(
                                <div key={bet._id}>
                                    {bet.show&&
                                    <div className="bet">
                                        <h4> <span>{bet.title}</span> </h4>
                                        <div className="bet-container">
                                            {
                                                bet.question && bet.question.map(q=>{
                                                    return (
                                                        <>
                                                            {q.show && <button 
                                                                onClick={()=>handleBet(main._id, bet._id, q._id ) }
                                                                key={q._id}>{q.question} 
                                                                <span>{q.rate}</span> 
                                                                </button>}
                                                        </>
                                                    )
                                                }) 
                                            }
                                        </div>
                                    </div>
                                }
                                </div>
                            )
                        }   
                        )
                    }
                    
                </div>
            </div>
            )
            }
            
        </div>
    );
};
const mapStateToProps = (state) =>({
    auth: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(Game);