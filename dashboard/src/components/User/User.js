/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import userHatedata from '../../data/user';
import { getUserAction, userActiveAction } from '../../store/actions/userAction';
import Table from '../Table/Table';
import './User.css';
import useQuery from '../../utils/useQuery';


function User(props) {
  
    let query = useQuery(useLocation);
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
            {
              props.user.user.length ? <Table
              columns = {user}
              rows = {props.user.user}
              length={props.user.length}
              path='/user'
              userAction={props.userActiveAction}
              action = {props.getUserAction}
            />
              :
              <h1 style={{ textAlign: 'center'}} >Data Not Found</h1> 
            }
          </>
  );
}
const mapStateToProps = state =>({
  user: state.user
})
export default connect(mapStateToProps, { getUserAction, userActiveAction })(User) ;