import React, { useState } from 'react';
import { TextField, Grid, Button, Switch } from '@material-ui/core';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({
        name:'',
        email:'',
        isAdmin: false,
        password:''
    })
    const [isValid, setIsValid] = useState(true)


    const checkValid = () =>{
        for (const key in admin) {
            const element = admin[key];
            if (key !== 'isAdmin') {
                if (!element) {
                    setIsValid(false)
                    return false
                }
            }
        }
        return true
    };

    const handelChange = (e) =>{
        const name = e.target.name, value = e.target.value;
        if (name==='isAdmin') {
            setAdmin({...admin, isAdmin: !admin.isAdmin})
        }else{
            setAdmin({...admin, [name]: value});
        }
    };
    const handelSubmit = (e) =>{
        if (checkValid()) {
            console.log(admin);
        }
    }
    console.log(isValid);
    return (
        <div>
            <Grid container justify="center">
                <Grid item xs={12} md={6}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        onChange={handelChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        onChange={handelChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        name="password"
                        onChange={handelChange}
                    />
                    <Switch
                        checked={admin.isAmin}
                        onChange={handelChange}
                        name="isAdmin"
                        color="primary"
                    />
                    <Button
                        onClick={handelSubmit}
                        style={{ marginTop: '20px' }}
                        fullWidth color="primary"
                        variant="contained"
                    >Submit</Button>
                        {
                            !isValid && <p style={{ color: 'red' }}
                            >Please Fill Up This Form!</p>
                        }
                </Grid>
            </Grid>
        </div>
    );
};

export default AddAdmin;