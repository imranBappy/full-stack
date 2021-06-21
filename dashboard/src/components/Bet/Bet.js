import React from 'react';


import { useParams } from 'react-router-dom';
import Table from '../Table/Table';

const Bet = () => {
    let { gameId } = useParams();
    const action = ()=>{
        // console.log(2000);
    }
    
    return (
        <>
           <Table
                columns = {[]}
                rows = {[]}
                length={0}
                path='/game'
                action = {action}
                btnName = 'Add Bet'
                btnPath = {`/bet-add/${gameId}`}
           />
        </>
    );
};

export default Bet;