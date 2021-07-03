/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { allDepositGetAction } from '../../store/actions/transactionAction';
const Deposit = (props) => {
    useEffect(() =>{
        props.allDepositGetAction()
    },[])
    return (
        <div>
            <h1>This is Deposit</h1>
        </div>
    );
};

export default connect(null, {allDepositGetAction})(Deposit);