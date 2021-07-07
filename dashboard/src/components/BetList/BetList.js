/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userBetGetAction } from '../../store/actions/userBetAction';
import { useLocation } from 'react-router-dom';
import Table from '../Table/Table';
import useQuery from '../../utils/useQuery';
import columns from '../../data/userBet';
const BetList = (props) => {
    let query = useQuery(useLocation);
    useEffect(()=>{
        props.userBetGetAction(query.get('page'))
    },[])
    const pageHandler = page =>{
        props.userBetGetAction(page)
    }
    return (
        <div>
            <Table
              columns = {columns()}
              rows = {props.bet.userBet}
              length={props.bet.length}
              path='/bet-list'
              action = {pageHandler}
            />
        </div>
    );
};
const mapStateToProps = (state) =>({
    bet: state.userBet
})
export default connect(mapStateToProps, {userBetGetAction})(BetList);