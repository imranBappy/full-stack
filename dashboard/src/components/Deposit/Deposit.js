/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { allDepositGetAction, depositAcceptAction } from '../../store/actions/transactionAction';
import Table from '../Table/Table';
import columns from '../../data/deposit';
import useQuery from '../../utils/useQuery';
import { useLocation } from 'react-router-dom';

const Deposit = (props) => {
    let query = useQuery(useLocation);
    useEffect(() =>{
        props.allDepositGetAction(query.get('page'))
    },[]);
    const acceptHandler = (...rest) =>{
        props.depositAcceptAction(...rest)
    }
    return (
        <div>
            <h1>This is Deposit</h1>
            <Table
                columns = {columns()}
                rows = {props.deposit.transaction}
                length={props.deposit.length}
                path='/deposit'
                acceptHandler={acceptHandler}
                action = {props.allDepositGetAction}
           />
        </div>
    );
};
const mapStateToProps = state =>({
    deposit: state.deposit
})
export default connect(mapStateToProps, {allDepositGetAction, depositAcceptAction})(Deposit);