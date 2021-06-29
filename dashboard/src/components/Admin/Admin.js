/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Table from '../Table/Table';
import {connect} from 'react-redux';
import { loadAdminAction } from '../../store/actions/adminAction';
import columns from '../../data/admin';
const Admin = (props) => {
    const action = () =>{
        
    }
    useEffect(() => {
        props.loadAdminAction()
    }, []);
    return (
        <div>
            <Table
                columns = {columns()}
                rows = {props.admin}
                length={props.admin.length}
                path='/add-admin'
                action = {action}
                btnName = {'Add Admin'}
                btnPath = {`/add-admin`}
            />
        </div>
    );
};
const mapStateToProps = (state) =>({
    admin: state.admin.admin
})
export default connect(mapStateToProps, {loadAdminAction})(Admin) ;