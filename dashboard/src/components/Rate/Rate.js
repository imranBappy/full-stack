import React, { useState,useEffect } from 'react';
import  axios  from 'axios';
import store from './../../store/store';
const Number = () => {
    const [sponsor, setSponsor] = useState(0);

    useEffect(()=>{
        axios.get('http://localhost:4000/option/rate?rate=sponsor')
        .then(res =>res)
        .then(data=>{
            setSponsor(data.data.data)
        })
        
    },[])
    const sponsorHandleChange = e =>{
        const number = parseFloat(e.target.value);
        if (e.target.value.length > 0) {
            if (e.target.value[e.target.value.length - 1] === '.' ) {
                return setSponsor(e.target.value)
            }
        }
        if (!number) {
            setSponsor('')
        }else{
            setSponsor(number)
        }
    }
    
    const handleSubmitSponsor = () =>{
        console.log(sponsor === '');
        // if (sponsor === ''){
                 axios.patch('http://localhost:4000/option/rate?rate=sponsor',{sponsor: sponsor === ''? 0: sponsor})
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
        // }
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
                        

          

        </div>
    );
};

export default Number;

// admin sName 500 = 520 
// bappy club 0 = 30
