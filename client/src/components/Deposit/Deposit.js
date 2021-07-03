import React, { useContext, useState } from 'react';
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
        trxId: '',
        method:'',
        number:'',
    });
    const [error, setError] = useState({
        number:'',
        trxId: '',
        method:'',
    });

    const handelChange = e => {
        const name = e.target.name, value = e.target.value.trim();
        switch(name){
            case 'amount':
                if (value >= 100) {
                    setDeposit({...deposit, [name]: value});
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
                props.depositRequestAction({
                    ...deposit, 
                    status: 'Pending', 
                    transaction:'deposit', 
                    user:props.user._id 
                });
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
            <input 
                onChange={handelChange} 
                placeholder='Please Enter you Number' 
                name='number'
                value={deposit.number} 
                type="text" 
            />
            {
                error.number && <p className='error' >{error.number}</p>
            }
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
            <select onChange={handelChange} name="method" id="club">
                <option value="">Select Method*</option>
                    {
                        methods.map(club=>(
                            <option key={club} value={club.toLowerCase()}>{club}</option>
                        ))
                    }
            </select>
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