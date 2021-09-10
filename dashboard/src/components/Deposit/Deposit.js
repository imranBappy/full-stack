/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { allTransactionGetAction, transactionAcceptAction } from '../../store/actions/transactionAction';
import Table from '../Table/Table';
import columns from '../../data/deposit';
import useQuery from '../../utils/useQuery';
import { useLocation } from 'react-router-dom';

const Transaction = (props) => {
    let query = useQuery(useLocation);
    useEffect(() =>{
        props.allTransactionGetAction(query.get('page'), 'deposit');
    },[]);
    const acceptHandler = (...rest) =>{
        props.transactionAcceptAction(...rest)
    }
    return (
        <div>
            <Table
                columns = {columns()}
                rows = {props.deposit.transaction}
                length={props.deposit.length}
                path='/deposit'
                acceptHandler={acceptHandler}
                action = {props.allTransactionGetAction}
           />
        </div>
    );
};
const mapStateToProps = state =>({
    deposit: state.deposit
})
export default connect(mapStateToProps, {allTransactionGetAction, transactionAcceptAction})(Transaction);