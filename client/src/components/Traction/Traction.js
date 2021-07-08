/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import columns from '../../data/trasaction';
import useQuery from '../../utils/useQuery';
import { useLocation} from 'react-router-dom';
import {transitionGetAction} from '../../store/actions/transactionAction';
import Table from '../Table/Table';
import jwt_decide from 'jwt-decode';

const Traction = (props) => {
    const user = jwt_decide(props.auth.token)
    const query = useQuery(useLocation);
    console.log(props.transition);
    useEffect(()=>{
        props.transitionGetAction(query.get('page'), user._id)
    },[]);

    const action = page =>{
        props.transitionGetAction(page, user._id)
    }
    return (
        <div className="container">
            <Table
                path="/traction"
                action={action}
                rows={props.transition}
                columns={columns()}
            />
        </div>
    );
};
const mapStateToProps = (state) => ({
    auth: state.auth,
    transition: state.transaction.transition
})
export default connect(mapStateToProps, {transitionGetAction})(Traction);