import { Button, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { gameAddAction } from '../../store/actions/gameAction';
import { Link, useLocation} from 'react-router-dom';
import Title from './Title';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
  
const AddBet = (props) => {
    let { gameId } = useParams();
    let query = useQuery();
    const [game, setGame] = useState({
        bet: gameId,
        question:'',
        rate:'',
        game: query.get("bet") ? query.get("bet") : '00000'
    })
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
            console.log(game);
            // props.gameAddAction(game);  
        }
    };
    
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
                        >Add question </Button>
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