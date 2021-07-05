/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import {connect} from 'react-redux'
import { betAction } from '../../store/actions/betAction';
import { BetContext, ModalContext } from '../Layout/Layout';

const BetInput = (props) => {
    const [bet, setBet] = useState({
        bet: 100,
        message: ''
    });
    const user = props.auth.user
    const [Bet, SetBet] = useContext(BetContext);
    const [,setOpen] = useContext(ModalContext);
    useEffect(() =>{ 
        if(user.balance < 100) setBet({...bet, message:'There is not enough balance'})
     },[])
    const handelChange = e =>{
        const name = e.target.name, value = e.target.value;
        let number
        if(Number(value)) number = typeof Number(value)          
        if(number === 'number' || value === ''){
            if(user.balance >= Number(value)) {
                console.log(user.balance);
                setBet({...bet, [name]: value, message:''});
                SetBet({...Bet, amount: Number(value)});
            }else{
                setBet({...bet,[name]: value, message:'There is not enough balance'})
            }
            if (!(Number(value)>= 100)) setBet({...bet, [name]: value, message:'You can bet at least 100 Taka'})
        }
    }
    const handleSubmit = () =>{
        if (!bet.message) {
            props.betAction(Bet, props.auth)
            setOpen({display: 'none', component:''})
        }
    }
    return (
        <div>
           
                <>
                    <label htmlFor="bet">Enter You Amount</label>
                    <input 
                        onChange={handelChange} 
                        placeholder='Please Enter you Number' 
                        name='bet'
                        value={bet.bet} 
                        type="text" 
                    />
                    {
                        bet.message && <p className='error' >{bet.message}</p>
                    }
                    <button onClick={handleSubmit} >Submit</button>

                </>
            
            
        </div>
    );
};
const mapStateToProps = state =>({
    auth: state.auth
})
export default connect(mapStateToProps,{betAction})(BetInput) ;