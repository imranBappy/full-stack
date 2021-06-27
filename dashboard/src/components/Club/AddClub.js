import { Button, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { clubAction } from '../../store/actions/clubAction';
import checkForm from './checkForm';


const AddClub = (props) => {

    const [club, setClub] = useState({
        name:'',
        clubId: '',
        clubHolder:''
    })

    const [error, setError] = useState({ 
        message:'',
        error: false
    })

    const handelChange = (e) => {
        let name = e.target.name , value = e.target.value;
        setClub({...club, [name]: value });
        if (name === 'clubId') {
            setError(checkForm(value, 'Club Id'))
        }
        if (name === 'clubHolder') {
            setError(checkForm(value, 'clubHolder'))
        }
        
        if (name === 'name') {
            if (value.length > 2) {
                setError({
                    message:'',
                    error: false
                })
            }else{
                setError({
                    message:'Invalid Name',
                    error: true
                })
            }
        }
    }

    const handelSubmit = () => {
        for (const key in club) {
            const value = club[key];
            if (!value) {
                setError({
                    message:'Please fill up this form',
                    error: true
                })
            }else{
                setError({
                    message:'',
                    error: false
                })
            }
        }

        if (!error.error) {
            props.clubAction(club);
        }
    }

    return (
        <div>
            <Grid container justify="center">
                    <Grid item xs={12} md={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            onChange={handelChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="clubId"
                            label="Club Id"
                            name="clubId"
                            onChange={handelChange}
                        />
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="clubHolder"
                            label="clubHolder"
                            name="clubHolder"
                            onChange={handelChange}
                        />
                        {
                            error.error && <p style={{ color: 'red' }}
                            >{error.message}</p>
                        }
                        <Button
                            style={{ marginTop: '20px' }}
                            fullWidth color="primary"
                            variant="contained"
                            onClick={ handelSubmit}
                        > { 'Add question' }</Button>
                    </Grid>
                </Grid>
        </div>
    );
};

export default connect(null, {clubAction})(AddClub);
