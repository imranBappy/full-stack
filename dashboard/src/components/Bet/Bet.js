/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../Table/Table';
import { connect } from 'react-redux';
import { loadAllBet } from '../../store/actions/betAction';
import bet from '../../data/bet';
const Bet = (props) => {
    let { gameId } = useParams();
    const [columns, setColumns] = useState([])
    const action = ()=>{
        console.log(2000);
    }
    useEffect(()=>{
        setColumns(bet())
        props.loadAllBet(gameId)
    },[])
    return (
        <>
        {   props.bet.length ? 
            props.bet.map((bet,i) =><div key={bet._id} >
                <h1 align="center" >{bet.title}</h1>
                <Table
                    _id={bet._id}
                    columns = {columns}
                    rows = {bet.question}
                    length={props.bet.length}
                    path='/bet'
                    action = {action}
                    btnName = {i=== 0 ? 'Add Bet': ''}
                    btnPath = {`/bet-add/${gameId}`}
            />
            </div>):
            <Table
                _id={bet._id}
                columns = {columns}
                rows = {bet.question}
                length={0}
                path='/bet'
                action = {action}
                btnName = {'Add Bet'}
                btnPath = {`/bet-add/${gameId}`}
            />
        }
        </>
    );
};
const mapStateToProps = state =>({
    bet:state.bet.bet
})
export default connect(mapStateToProps, {loadAllBet})(Bet);