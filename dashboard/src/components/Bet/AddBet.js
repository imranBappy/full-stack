import { Button, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { gameAddAction } from '../../store/actions/gameAction';

const AddBet = (props) => {
    let { gameId } = useParams();
    const [game, setGame] = useState({
        title:'',
        quation:'',
        rate:'',
        gameId
    })
    const [isValid, setIsValid] = useState(true)
    const handelChange = e => {
        let name = e.target.name, value = e.target.value
        setGame({ ...game, [name]: value });
    };
    const checkValide = () =>{
        for (const key in game) {
            const element = game[key];
            if (!element) {
                setIsValid(false)
                return false
            }
        }
        return true;
    };
    const handelSubmit = () =>{
        if (checkValide()) {
            setIsValid(true);
            // props.gameAddAction(newGame, history, props.game);  
        }
    };
    return (
        <>
            <h1>gameId: {gameId}</h1>
            <div >
                <Grid container justify="center">
                    <Grid item xs={12} md={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            onChange={handelChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="quation"
                            label="Quation"
                            name="quation"
                            onChange={handelChange}
                        />
                        <TextField
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
                            onClick={handelSubmit}
                        >Add</Button>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

const mapStateToProps = state =>({
    game: state.game
});

export default connect(mapStateToProps, { gameAddAction })(AddBet);