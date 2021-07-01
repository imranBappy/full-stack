/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import gameHatedata from '../../data/game';
import { gameLodeAction, gameStatusAction } from '../../store/actions/gameAction';
import Table from '../Table/Table';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Game = (props) => {
    
    let query = useQuery();
    const [gameHate , setGameHate] = useState([]);
    useEffect(()=>{
        setGameHate(gameHatedata())
    },[]);
    
    const page = Number(query.get('page')) ||0 ;
    useEffect(()=>{
        props.gameLodeAction(page)
    },[]);
    
    return (
        <>
            <Table
                columns = {gameHate}
                rows = {props.game.game}
                length={props.game.length}
                path='/game'
                action = {props.gameLodeAction}
                gameStatusAction={props.gameStatusAction}
                btnName = 'Add Game'
                btnPath = '/game-add'
           />
        </>
    );
};
const mapStateToProps = state =>({
    game: state.game
});
export default connect(mapStateToProps, {gameLodeAction, gameStatusAction})(Game);