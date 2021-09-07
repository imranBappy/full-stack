/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Table from '../Table/Table';
import {connect} from 'react-redux';
import { adminEditAction, loadAdminAction } from '../../store/actions/adminAction';
import columns from '../../data/admin';
import { adminDeleteAction } from './../../store/actions/adminAction';
const Admin = (props) => {
    
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
                action = {() =>{}}
                btnName = {'Add Admin'}
                btnPath = {`/add-admin`}
                adminDeleteAction={props.adminDeleteAction}
                adminEditAction={props.adminEditAction}
            />
        </div>
    );
};
const mapStateToProps = (state) =>({
    admin: state.admin.admin
})
export default connect(mapStateToProps, {loadAdminAction,adminEditAction, adminDeleteAction})(Admin) ;