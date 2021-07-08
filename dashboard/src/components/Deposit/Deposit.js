/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { allTransactionInputGetAction, TransactionInputAcceptAction } from '../../store/actions/transactionAction';
import Table from '../Table/Table';
import columns from '../../data/TransactionInput';
import useQuery from '../../utils/useQuery';
import { useLocation } from 'react-router-dom';

const TransactionInput = (props) => {
    let query = useQuery(useLocation);
    useEffect(() =>{
        props.allTransactionInputGetAction(query.get('page'), 'TransactionInput');
    },[]);
    const acceptHandler = (...rest) =>{
        props.TransactionInputAcceptAction(...rest)
    }
    return (
        <div>
            <Table
                columns = {columns()}
                rows = {props.TransactionInput.transaction}
                length={props.TransactionInput.length}
                path='/TransactionInput'
                acceptHandler={acceptHandler}
                action = {props.allTransactionInputGetAction}
           />
        </div>
    );
};
const mapStateToProps = state =>({
    TransactionInput: state.TransactionInput
})
export default connect(mapStateToProps, {allTransactionInputGetAction, TransactionInputAcceptAction})(TransactionInput);