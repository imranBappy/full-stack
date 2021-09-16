/* eslint-disable react-hooks/exhaustive-deps */
import { Button, FormControl, Grid, InputLabel, Select, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { gameAddAction } from '../../store/actions/gameAction';
import axios from 'axios';

const gameType = ['Football', 'Cricket', 'Basketball'];

const GameAdd = (props) => {
    const history = useHistory()
    const [game, setGame] = useState({
        name:'',
        country1:'',
        country2:'',
        date:'',
        time:'',
        status:'',
        type:''
    })
    const [isValid, setIsValid] = useState(true)
    const handelChange = e => {
        let name = e.target.name, value = e.target.value
        setGame({ ...game, [name]: value });
    }
    const checkValide = () =>{
        for (const key in game) {
            const element = game[key];
            if (!element) {
                setIsValid(false)
                return false
            }
        }
        return true
    }
    const handelSubmit = () =>{

        if (checkValide()) {
            const date = `${game.date} ${game.time}`
            const newGame = {
                ...game,
                date,
                isActive: false
            };
            delete newGame.time
            props.gameAddAction(newGame, history, props.game);  
        }
        
    }
    let { id } = useParams();

    useEffect(()=>{
        if (id) {
        axios.get(`http://localhost:4000/game/single/${id}`)
        .then(res=>{
            setGame(res.data.game)
        })
        }
    },[])
    // mutipoll server 
    // image store
    // image ki data base store kora jay
    return (
        <>
            <div >
                <Grid container justify="center">
                    <Grid item xs={12} md={6}>
                        <TextField
                            value={game.name}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Tournament Name"
                            name="name"
                            onChange={handelChange}
                            />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="country1"
                            label="Country1"
                            name="country1"
                            onChange={handelChange}
                            value={game.country1}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="country2"
                            label="Country2"
                            name="country2"
                            onChange={handelChange}
                            value={game.country2}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type='date'
                            name="date"
                            onChange={handelChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            placeholder="1.19 AM"
                            name="time"
                            onChange={handelChange}
                        />
                        <FormControl style={{ marginTop: 15 }} required variant="outlined" className='select-option' fullWidth >
                            <InputLabel htmlFor="select-type">Game Type </InputLabel>
                            <Select
                                required
                                native
                                label="select-type "
                                inputProps={{
                                    name: 'type',
                                    id: 'select-type',
                                }}
                                onChange={handelChange}
                            >
                                <option aria-label="None" />
                                {
                                    gameType.map((club, i) => <option key={i} value={club}>{club}</option>)
                                }
                            </Select>
                        </FormControl>
                        <FormControl style={{ marginTop: 20 }} required variant="outlined" className='select-option' fullWidth >
                            <InputLabel htmlFor="select-status">Game Status </InputLabel>
                            <Select
                                required
                                native
                                label="select-status "
                                inputProps={{
                                    name: 'status',
                                    id: 'select-status',
                                }}
                                onChange={handelChange}
                            >
                                <option aria-label="None" />
                                {
                                    ['Live', 'Upcoming'].map((club, i) => <option key={i} value={club}>{club}</option>)
                                }
                            </Select>
                        </FormControl>
                        {
                            !isValid && <p style={{ color: 'red' }}
                            >Please Fill Up This Form!</p>
                        }
                        <Button
                            style={{ marginTop: '20px' }}
                            fullWidth color="primary"
                            variant="contained"
                            onClick={handelSubmit}
                        >Submit</Button>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};
const mapStateToProps = state =>({
    game: state.game
})
export default connect(mapStateToProps, {gameAddAction})(GameAdd) ;