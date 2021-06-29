/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Table from '../Table/Table';
import useQuery from '../../utils/useQuery';
import { useLocation } from 'react-router-dom';
import {connect} from 'react-redux';
import {loadAllClub} from '../../store/actions/clubAction';
import club from '../../data/club';
const Club = (props) => {
    const query = useQuery(useLocation)
    useEffect(()=>{
        props.loadAllClub(query.get('page'))
    },[])
    
    return (
        <div>
            <Table
                columns = {club()}
                rows = {props.club.club}
                length={props.club.length}
                path='/club'
                action = {props.loadAllClub}
                btnName = {'Add Club'}
                btnPath = {`/add-club`}
            />
        </div>
    );
};
const mapStateToProps = state => ({
    club: state.club
})
export default connect(mapStateToProps, {loadAllClub})(Club);