/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { resultAction } from '../../store/actions/betAction';
import { Link, useLocation} from 'react-router-dom';
import Title from './Title';
import axios from 'axios';
import { alertAction } from '../../store/actions/alertAction';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
  
const AddBet = (props) => {
    let { gameId } = useParams();
    let query = useQuery();
    const [game, setGame] = useState({
        game: gameId,
        question:'',
        rate:'',
        bet: ''
    })

    useEffect(() =>{
        axios.get(`/bet/get-single-bet?betId=${query.get("betId")}`).then(res =>{
            if (res.data.bet) {
                setGame(res.data.bet);
            }
        });
    },[]);

    const [isValid, setIsValid] = useState(true)
    const handelChange = e => {
        let name = e.target.name, value = e.target.value
        setGame({ ...game, [name]: value });
    };
  
    const checkValid = () =>{
        if (!game.bet) {
            setGame({ ...game, bet: query.get("bet") ? query.get("bet") : ''});
        }
        
        for (const key in game) {
            const element = game[key];
            if (!element) {
                console.log(element);
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
        if (checkValid()) {
            setIsValid(true);
            props.resultAction(game);  
        }
    };
    const handleUpdate = () =>{
        if (checkValid()) {
            setIsValid(true);
            axios.put(`/bet/result-update`, game).then(res=>{
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
                            onClick={query.get("betId")? handleUpdate : handelSubmit}
                        > { query.get("betId")? 'Update' : 'Add question' }</Button>
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