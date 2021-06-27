/* eslint-disable react-hooks/exhaustive-deps */
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { alertAction } from '../../store/actions/alertAction';
import { betAction } from '../../store/actions/betAction';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Title = (props) => {
    let { gameId } = useParams();
    const [game, setGame] = useState({
        title:'',
        game: gameId
    })
    const history = useHistory()
    let query = useQuery();
    
    useEffect(()=>{
        axios.get(`/bet/single-bet-get?betId=${query.get('Id')}`).then(res=>{
            if (res.data.bet) {
                setGame(res.data.bet)
            }
        })
    },[])
    const [isValid, setIsValid] = useState(true)
    const handelChange = e => {
        let name = e.target.name, value = e.target.value
        setGame({ ...game, [name]: value });
    };
    const checkValid = () =>{
        for (const key in game) {
            const element = game[key];
            if (!element) {
                setIsValid(false)
                return false
            }
            if (key === 'rate') {
                if (!Number(element)) {
                    setIsValid(false) 
                    return false
                }
            }
        }
        return true;
    };


    const handelSubmit = () =>{
        if (checkValid()) {
            setIsValid(true);
            props.betAction(game, history)
        }
    };
    const handleUpdate = () =>{
        if (checkValid()) {
            setIsValid(true);
            axios.put(`/bet/bet-update`, game).then(res=>{
                props.alertAction(res.data)
            })
        }
    }
    return (
        <>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={game.title}
                onChange={handelChange}
            />
            {
                !isValid && <p style={{ color: 'red' }}
                >Please Fill Up This Form!</p>
            }
            <Button
                style={{ marginTop: '20px' }}
                fullWidth color="secondary"
                variant="contained"
                onClick={query.get('Id') ? handleUpdate : handelSubmit}
            > {query.get('Id')? 'Update': 'Add Bet' }</Button>
        </>
    );
};

const mapStateToProps = state =>({
    bet: state.bet
})

export default connect(mapStateToProps, { betAction, alertAction })(Title);