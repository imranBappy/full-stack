/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Table from '../Table/Table';
import { connect } from 'react-redux';
import { loadAllBet, betActionAction, resultShowAction } from '../../store/actions/betAction';
import { betStatusAction } from '../../store/actions/userBetAction';
import bet from '../../data/bet';
import { Button } from '@material-ui/core';

const Bet = (props) => {
    let { gameId } = useParams();
    const [columns, setColumns] = useState([]);
    useEffect(()=>{
        setColumns(bet())
        props.loadAllBet(gameId);
       
    },[])
    
    return (
        <>
            {props.bet.length && <Link style={{ textDecoration: 'none' }} to={`/bet-add/${gameId}`}>
                <Button variant='outlined' color='primary' >
                  {'Add Bet'}
                </Button>
                </Link>
            }
            <Link to={`/game-edit/${gameId}`} >
                <Button variant='outlined' color='primary'>Edit</Button>
            </Link>
        {  
            props.bet.length ? 
            props.bet.map((bet,i) =><div key={bet._id} >
                <h1 align="center" >{bet.title}</h1>
                <Button 
                    onClick={()=> props.betActionAction({...bet, show: !bet.show}, i, props.bet)}
                    color={bet.show ? 'primary' : 'secondary' }
                    variant="outlined" 
                    style={{marginRight: 10, width: 110}} 
                    >{bet.show ? 'Active' : 'Inactive' }</Button>
                <Table
                    acceptHandler={props.betStatusAction}
                    resultShowAction={props.resultShowAction}
                    bets={props.bet}
                    index={i}
                    bet={bet}
                    _id={bet._id}
                    columns = {columns}
                    rows = {bet.question}
                    length={bet.question.length}
                    path='/bet'
                    action = {()=>{}}
                    btnName = {'Add Result'}
                    btnPath = {`/bet-add/${gameId}?betId=${bet._id}`}
                />
                </div>)
                :
                <Table
                    columns = {[]}
                    rows = {[]}
                    length={0}
                    path='/bet'
                    action = {()=>{}}
                    btnName = {'Add Bet'}
                    btnPath = {`/bet-add/${gameId}`}
                />
        }
        </>
    );
};
const mapStateToProps = state =>({
    bet:state.bet.bet,
    game: state.game.game
})
export default connect(mapStateToProps, {loadAllBet, betActionAction, resultShowAction, betStatusAction})(Bet);