/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {allDepositGetAction, depositAcceptAction} from '../../store/actions/transactionAction';
import Table from '../Table/Table';
import columns from '../../data/deposit';
import useQuery from '../../utils/useQuery';
import { useLocation } from 'react-router-dom';
const Withdraw = (props) => {
    let query = useQuery(useLocation);

    useEffect(()=>{
        props.allDepositGetAction(query.get('page'), 'withdraw')
    },[])
    const acceptHandler = (...rest) =>{
        props.depositAcceptAction(...rest)
    }
    return (
        <div>
            <h2>This is withdraw</h2>
            <Table
                columns = {columns()}
                rows = {props.withdraw.transaction}
                length={props.withdraw.length}
                path='/withdraw'
                acceptHandler={acceptHandler}
                action = {props.allDepositGetAction}
           />
        </div>
    );
};

const mapStateToProps = state =>({
    withdraw: state.withdraw
})
export default connect(mapStateToProps, {allDepositGetAction, depositAcceptAction})(Withdraw);