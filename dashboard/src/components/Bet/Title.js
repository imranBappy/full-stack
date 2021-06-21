import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { betAction } from '../../store/actions/betAction';

const Title = (props) => {
    let { gameId } = useParams();
    const [game, setGame] = useState({
        title:'this is title',
        game: gameId
    })
    const history = useHistory()
    
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
                onClick={handelSubmit}
            >Add Bet </Button>
        </>
    );
};


export default connect(null, { betAction })(Title);