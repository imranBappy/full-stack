import React from 'react';
import Table from '../Table/Table';
import columns from '../../data/bet';
import useQuery from '../../utils/useQuery';
import { useLocation} from 'react-router-dom';
import { connect } from 'react-redux';
import {betGetAction} from '../../store/actions/betAction';
const Bet = (props) => {
    const query = useQuery(useLocation);
    const rows = [
        {
            createdAt:'7/6/2021, 4:09:26 PM',
            amount:100,
            game:'Argentina VS Brazil- World Cup Football 2021',
            bet:'To win the match',
            result:'Brazil',
            rate: 1.5,
            status:'Loss'
        },
        {
            createdAt:'7/6/2021, 4:09:26 PM',
            amount:100,
            game:'Argentina VS Brazil- World Cup Football 2021',
            bet:'To win the match',
            result:'Brazil',
            rate: 1.5,
            status:'Loss'
        },
        {
            createdAt:'7/6/2021, 4:09:26 PM',
            amount:100,
            game:'Argentina VS Brazil- World Cup Football 2021',
            bet:'To win the match',
            result:'Brazil',
            rate: 1.5,
            status:'Loss'
        },
        {
            createdAt:'7/6/2021, 4:09:26 PM',
            amount:100,
            game:'Argentina VS Brazil- World Cup Football 2021',
            bet:'To win the match',
            result:'Brazil',
            rate: 1.5,
            status:'Loss'
        }
    ];
    return (
        <div  class="container">
            <Table
                action={props.betGetAction}
                rows={props.bet.bet}
                columns={columns()}
            />
        </div>
    );
};
const mapStateToProps = state =>({bet: state.bet})
export default connect(mapStateToProps, {betGetAction})(Bet);