/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import validateNumber from '../../utils/validateNumber';
import {depositRequestAction} from '../../store/actions/transactionAction';
import {ModalContext} from '../Layout/Layout';
import  './deposit.css';
const Deposit = (props) => {
    const methods = ['Bkash', 'Rocket', 'Nagad'];
    const [, setOpen] = useContext(ModalContext)
    const [deposit, setDeposit] = useState({
        amount: 100,
        type:'personal',
        method:'',
        number:'',
        transaction: props.transaction
    });
    const [error, setError] = useState({
        amount: '',
        number:'',
        trxId: '',
        method:'',
    });
    useEffect(() =>{ 
        if(props.user.balance < 100) {
            setDeposit({...deposit, message:'There is not enough balance'})
            setError({...error, amount: 'There is not enough balance'});
        }
     },[])
    const handelChange = e => {
        const name = e.target.name, value = e.target.value.trim();
        switch(name){
            case 'amount':
                let number
                if(Number(value)) number = typeof Number(value)          
                if(number === 'number' || value === ''){
                    if(props.user.balance >= Number(value)) {
                        setDeposit({...deposit, [name]: value});
                        setError({...error, [name]: ''});
                    }else{
                        setDeposit({...deposit,[name]: value})
                        setError({...error, [name]: 'There is not enough balance'});

                    }
                    if (!(Number(value)>= 100)) {
                        setDeposit({...deposit, [name]: value})
                        setError({...error, [name]: 'You can withdraw at least 100 Taka'});

                    }
                }
                break;
            case 'number':
                if (validateNumber(value)) {
                    setDeposit({...deposit, [name]: value});
                    setError({...error, [name]: ''});
                }else{
                    setDeposit({...deposit, [name]: value});
                    setError({...error, [name]: `You ${name} is wrong`});
                }
                break;
            case 'trxId':
                if (value.length >= 8) {
                    setDeposit({...deposit, [name]: value});
                    setError({...error, [name]: ''});
                }else{
                    setDeposit({...deposit, [name]: value});
                    setError({...error, [name]: `You ${name} ID is wrong`});
                }
                break;
            case 'method':
                    if (value) {
                        setDeposit({...deposit, [name]: value});
                        setError({...error, [name]: ''});
                    }else{
                        setDeposit({...deposit, [name]: value});
                        setError({...error, [name]: `Please select method`});
                    }
                    break;
            default:
                break;
        }
    }
    const checkValid = (obb, type) =>{
        for (const key in obb) {
            const value = obb[key];
                if (type ==='deposit') {
                    if (!value) return false;
                }else{
                    if (value) return false;
                }
        }
        return true;
    }
    const handleSubmit = () =>{
        if (checkValid(deposit, 'deposit')) {
            if (checkValid(error)) {
                props.depositRequestAction(deposit, props.user);
                setDeposit({
                    amount: 100,
                    trxId: '',
                    method:'',
                    number:'',
                })
                setOpen({ display:'none' })
            }
        }
    }

    return (
        <div>
            <input 
                onChange={handelChange}
                placeholder='Please Enter you amount' 
                type="number"
                name="amount"
                value={deposit.amount} 
            />
            {
                error.amount && <p className='error' >{error.amount}</p>
            }
            <input 
                    onChange={handelChange} 
                    placeholder='Please Enter you Number' 
                    name='number'
                    value={deposit.number} 
                    type="text" 
                />
            {error.number && <p className='error' >{error.number}</p>}
            {
                props.transaction === 'deposit' &&<>
                <input 
                onChange={handelChange} 
                placeholder='Please Enter you TrxID' 
                type="text" 
                value={deposit.trxId} 
                name='trxId'
                />
                {
                    error.trxId && <p className='error' >{error.trxId}</p>
                }
                </>
            }
            
            <select onChange={handelChange} name="method" id="club">
                <option value="">Select Method*</option>
                    {
                        methods.map(club=>(
                            <option key={club} value={club.toLowerCase()}>{club}</option>
                        ))
                    }
            </select>
            {
                props.transaction === 'withdraw' && 
                    <select onChange={handelChange} name="type" id="club">
                    <option value="personal">Personal</option>
                    <option value='agent'>Agent</option>
                </select>
            }
            
            {
                error.method && <p className='error' >{error.method}</p>
            }
            <button onClick={handleSubmit} >Submit</button>
        </div>
    );
};
const mapStateToProps = state =>({
    user: state.auth.user
})
export default connect(mapStateToProps, {depositRequestAction})(Deposit) ;