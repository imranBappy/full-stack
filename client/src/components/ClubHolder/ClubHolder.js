/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from '../Table/Table';
import columns from '../../data/clubBet';
import { connect } from 'react-redux';
import useQuery from '../../utils/useQuery';
import { useLocation} from 'react-router-dom';

const ClubHolder = (props) => {
    const query = useQuery(useLocation);
    const [bet, setBet] = useState({result:[], length: 0});
    useEffect(()=>{
        if (props.club) {
            axios.get(`/usersbet/club-bet-get?page=${query.get('page')}&club=${props.club.clubId}`)
            .then(function (response) {
                console.log(response.data);
                setBet(response.data)
            })
            .catch(function (error) {
            }) 
        }
    },[props.club])

    // console.log(bet.length);
    const active = page =>{
        axios.get(`/usersbet/club-bet-get?page=${page}&club=${props.club.clubId}`)
        .then(function (response) {
            setBet(response.data)
        })
        .catch(function (error) {})
    }
    return (
        <div className="container">
            <Table
                path="/club-holder"
                action={active}
                rows={bet.result}
                length={bet.length}
                columns={columns()}
            />
        </div>
    );
};
const mapStateToProps = state =>({
    club: state.auth.user.club
})
export default connect(mapStateToProps)(ClubHolder) ;