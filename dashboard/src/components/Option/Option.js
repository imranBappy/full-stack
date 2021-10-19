import React, { useEffect, useState } from 'react';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Number from './../Number/Number';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './option.css';
import  axios  from 'axios';
import store from './../../store/store';
import Rate from '../Rate/Rate';
const Option = () => {
    // al840gb 8 / 256 8 2 2.3
    const [news, setNews] = useState('');
    const newSubmit = () =>{
        console.log(news);
        axios.post('https://day20.herokuapp.com/option/news',{news})
        .then(res =>res)
        .then(data=>{
            store.dispatch({
                type: 'SET_ALERT',
                payload:{
                    message: data.data.message,
                    error:data.data.error
                }
            })
        })
    }
    useEffect(()=>{
        axios.get('https://day20.herokuapp.com/option/news')
        .then(res =>res)
        .then(data=>{
            setNews(data.data.data.news)
        })
    },[])
    const handleChange = e =>{
        setNews(e.target.value)
    }
    return (
        <div className="option">
            <Button variant='outlined'>
                <Link to='/option/number'>Number</Link>
            </Button>
            <Button variant='outlined'>
                <Link to='/option/rate'>Rate</Link>
            </Button>
            <Button variant='outlined'>
                <Link to='/option'>News</Link>
            </Button>


            <PrivateRoute exact path='/option'>
            <div className="news input__wrap">
                <input onChange={handleChange} value={news} type="text" />
                <button type="submit" onClick={newSubmit}>Submit</button>
            </div>
            </PrivateRoute>


            <PrivateRoute exact path='/option/number'>
                <Number/>
            </PrivateRoute>
            <PrivateRoute exact path='/option/rate'>
                <Rate/>
            </PrivateRoute>
           
            
        </div>
    );
};

export default Option;