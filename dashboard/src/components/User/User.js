/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import userHatedata from '../../data/user';
import { getUserAction } from '../../store/actions/userAction';
import Table from '../Table/Table';
import './User.css';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function User(props) {
  
    let query = useQuery();
    const [user , setUser] = useState([]);

    useEffect(()=>{
      setUser(userHatedata())
    },[]);

    const page = Number(query.get('page')) ||0 ;
    useEffect(()=>{
      props.getUserAction(page);
    },[]);
    
  return (
          <>
            <Table
              columns = {user}
              rows = {props.user.user}
              length={props.user.length}
              path='/user'
              action = {props.getUserAction}
            />
          </>
  );
}
const mapStateToProps = state =>({
  user: state.user
})
export default connect(mapStateToProps, { getUserAction })(User) ;