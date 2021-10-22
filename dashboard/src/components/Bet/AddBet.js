/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { resultAction } from '../../store/actions/betAction';
import { Link, useLocation, useParams} from 'react-router-dom';
import Title from './Title';
import axios from 'axios';
import { alertAction } from '../../store/actions/alertAction';
import useQuery from '../../utils/useQuery';

const AddBet = (props) => {
    let { gameId } = useParams();
    let query = useQuery(useLocation);
    const [game, setGame] = useState({
        game: gameId,
        question:'',
        rate:'',
        bet: query.get("betId") ? query.get("betId"): ''
    })
    
    useEffect(() =>{
        if (query.get("resultId")) {
            axios.get(`https://day20.herokuapp.com/bet/get-single-bet?betId=${query.get("resultId")}`).then(res =>{
                console.log(res.data.bet);
                if (res.data.bet) {
                    setGame(res.data.bet);
                }
            });
        }
    },[]);

    const [isValid, setIsValid] = useState(true)
    const handelChange = e => {
        let name = e.target.name, value = e.target.value;
        console.log(value)
        setGame({ ...game, [name]: value, bet:query.get("betId") ? query.get("betId"):'' });
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
                    console.log(element);
                    setIsValid(false) 
                    return false
                }
            }
        }
        return true
    };

    const handelSubmit = () =>{
        setGame({ ...game, bet:query.get("betId") ? query.get("betId"):'' });
        if (checkValid()) {
            setIsValid(true);
            props.resultAction(game);  
        }
    };
    const handleUpdate = () =>{
        if (checkValid()) {
            setIsValid(true);
            axios.put(`https://day20.herokuapp.com/bet/result-update`, game).then(res=>{
                props.alertAction(res.data)
            })
        }
    }
    return (
        <>
            <div >
                <Link style={{ textDecoration: 'none' }} to={`/bet/${gameId}`}>
                    <Button variant='outlined' color='secondary' >
                    {'Back Bets'}
                    </Button>
                </Link>
                <Grid container justify="center">
                    <Grid item xs={12} md={6}>
                        <Title/>
                        <TextField
                            value={game.question}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="question"
                            label="question"
                            name="question"
                            onChange={handelChange}
                        />
                        <TextField
                            value={game.rate}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="rate"
                            label="Rate"
                            name="rate"
                            onChange={handelChange}
                        />
                        {
                            !isValid && <p style={{ color: 'red' }}
                            >Please Fill Up This Form!</p>
                        }
                        <Button
                            style={{ marginTop: '20px' }}
                            fullWidth color="primary"
                            variant="contained"
                            onClick={query.get("resultId")? handleUpdate : handelSubmit}
                        > { query.get("resultId")? 'Update' : 'Add question' }</Button>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

const mapStateToProps = state =>({
    game: state.game
});

export default connect(mapStateToProps, { resultAction, alertAction })(AddBet);