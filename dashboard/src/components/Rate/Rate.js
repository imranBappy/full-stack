import React, { useState,useEffect } from 'react';
import  axios  from 'axios';
import store from './../../store/store';
const Number = () => {
    const [sponsor, setSponsor] = useState(0);
    const [club, setClub] = useState(0);

    useEffect(()=>{
        axios.get('https://day20.herokuapp.com/option/rate?rate=sponsor')
        .then(res =>res)
        .then(data=>{
            setSponsor(data.data.data)
        })
        axios.get('https://day20.herokuapp.com/option/rate?rate=club')
        .then(res =>res)
        .then(data =>{
            setClub(data.data.data)
        })
    },[])
    const sponsorHandleChange = e =>{
        setSponsor(e.target.value)
    }
    const clubHandleChange = e =>{
        setClub(e.target.value)
    }
    const handleSubmitSponsor = () =>{
        if (parseFloat(sponsor)) {
            axios.patch('https://day20.herokuapp.com/option/rate?rate=sponsor',{sponsor: sponsor === ''? 0: sponsor})
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
        }else{
            alert('Please Input Number')
        }
            
    }
    const handleSubmitClub = () =>{
        
        if (parseFloat(club)) {
        axios.patch('https://day20.herokuapp.com/option/rate?rate=club',{club: club === ''? 0: club})
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
        }else{
            alert('Please Input Number')
        }
        
    }
    return (
        <div>

    <br />            
            
            <div>
               <label htmlFor="sponsor">Sponsor Rate : </label>
               <input onChange={sponsorHandleChange}
                value={sponsor}
                 name="sponsor" placeholder="Sponsor Rate" type="text" />
               <button onClick={handleSubmitSponsor} type="submit">Submit</button>
            </div>
            <br />            
            <div>
              <label htmlFor="sponsor">Club Rate : &nbsp;	&nbsp;	&nbsp; </label>

              <input onChange={clubHandleChange} value={club} name="club" placeholder="Club Rate" type="text" />
              <button onClick={handleSubmitClub} type="submit">Submit</button>

            </div>
    <br />            

          

        </div>
    );
};

export default Number;

// admin sName 500 = 520 
// bappy club 0 = 30
